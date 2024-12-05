# `dataOciCoreCrossConnects` Submodule <a name="`dataOciCoreCrossConnects` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreCrossConnects <a name="DataOciCoreCrossConnects" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects oci_core_cross_connects}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnects(
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
  cross_connect_group_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreCrossConnectsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#compartment_id DataOciCoreCrossConnects#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.crossConnectGroupId">cross_connect_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#cross_connect_group_id DataOciCoreCrossConnects#cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#display_name DataOciCoreCrossConnects#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter">DataOciCoreCrossConnectsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#id DataOciCoreCrossConnects#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#state DataOciCoreCrossConnects#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#compartment_id DataOciCoreCrossConnects#compartment_id}.

---

##### `cross_connect_group_id`<sup>Optional</sup> <a name="cross_connect_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.crossConnectGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#cross_connect_group_id DataOciCoreCrossConnects#cross_connect_group_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#display_name DataOciCoreCrossConnects#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter">DataOciCoreCrossConnectsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#filter DataOciCoreCrossConnects#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#id DataOciCoreCrossConnects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#state DataOciCoreCrossConnects#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.resetCrossConnectGroupId">reset_cross_connect_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreCrossConnectsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter">DataOciCoreCrossConnectsFilter</a>]]

---

##### `reset_cross_connect_group_id` <a name="reset_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.resetCrossConnectGroupId"></a>

```python
def reset_cross_connect_group_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreCrossConnects resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnects.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnects.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnects.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnects.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreCrossConnects resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreCrossConnects to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreCrossConnects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreCrossConnects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.crossConnects">cross_connects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList">DataOciCoreCrossConnectsCrossConnectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList">DataOciCoreCrossConnectsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.crossConnectGroupIdInput">cross_connect_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter">DataOciCoreCrossConnectsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.crossConnectGroupId">cross_connect_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cross_connects`<sup>Required</sup> <a name="cross_connects" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.crossConnects"></a>

```python
cross_connects: DataOciCoreCrossConnectsCrossConnectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList">DataOciCoreCrossConnectsCrossConnectsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.filter"></a>

```python
filter: DataOciCoreCrossConnectsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList">DataOciCoreCrossConnectsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `cross_connect_group_id_input`<sup>Optional</sup> <a name="cross_connect_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.crossConnectGroupIdInput"></a>

```python
cross_connect_group_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreCrossConnectsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter">DataOciCoreCrossConnectsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cross_connect_group_id`<sup>Required</sup> <a name="cross_connect_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.crossConnectGroupId"></a>

```python
cross_connect_group_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnects.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreCrossConnectsConfig <a name="DataOciCoreCrossConnectsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  cross_connect_group_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreCrossConnectsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#compartment_id DataOciCoreCrossConnects#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.crossConnectGroupId">cross_connect_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#cross_connect_group_id DataOciCoreCrossConnects#cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#display_name DataOciCoreCrossConnects#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter">DataOciCoreCrossConnectsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#id DataOciCoreCrossConnects#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#state DataOciCoreCrossConnects#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#compartment_id DataOciCoreCrossConnects#compartment_id}.

---

##### `cross_connect_group_id`<sup>Optional</sup> <a name="cross_connect_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.crossConnectGroupId"></a>

```python
cross_connect_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#cross_connect_group_id DataOciCoreCrossConnects#cross_connect_group_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#display_name DataOciCoreCrossConnects#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreCrossConnectsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter">DataOciCoreCrossConnectsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#filter DataOciCoreCrossConnects#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#id DataOciCoreCrossConnects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#state DataOciCoreCrossConnects#state}.

---

### DataOciCoreCrossConnectsCrossConnects <a name="DataOciCoreCrossConnectsCrossConnects" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnects.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnects()
```


### DataOciCoreCrossConnectsCrossConnectsMacsecProperties <a name="DataOciCoreCrossConnectsCrossConnectsMacsecProperties" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecProperties()
```


### DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKey <a name="DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKey()
```


### DataOciCoreCrossConnectsFilter <a name="DataOciCoreCrossConnectsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#name DataOciCoreCrossConnects#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#values DataOciCoreCrossConnects#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#regex DataOciCoreCrossConnects#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#name DataOciCoreCrossConnects#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#values DataOciCoreCrossConnects#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connects#regex DataOciCoreCrossConnects#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreCrossConnectsCrossConnectsList <a name="DataOciCoreCrossConnectsCrossConnectsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreCrossConnectsCrossConnectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList <a name="DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference <a name="DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.property.encryptionCipher">encryption_cipher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed">is_unprotected_traffic_allowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.property.primaryKey">primary_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList">DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecProperties">DataOciCoreCrossConnectsCrossConnectsMacsecProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_cipher`<sup>Required</sup> <a name="encryption_cipher" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.property.encryptionCipher"></a>

```python
encryption_cipher: str
```

- *Type:* str

---

##### `is_unprotected_traffic_allowed`<sup>Required</sup> <a name="is_unprotected_traffic_allowed" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed"></a>

```python
is_unprotected_traffic_allowed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.property.primaryKey"></a>

```python
primary_key: DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList">DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreCrossConnectsCrossConnectsMacsecProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecProperties">DataOciCoreCrossConnectsCrossConnectsMacsecProperties</a>

---


### DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList <a name="DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference <a name="DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId">connectivity_association_key_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion">connectivity_association_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId">connectivity_association_name_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion">connectivity_association_name_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKey">DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connectivity_association_key_secret_id`<sup>Required</sup> <a name="connectivity_association_key_secret_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId"></a>

```python
connectivity_association_key_secret_id: str
```

- *Type:* str

---

##### `connectivity_association_key_secret_version`<sup>Required</sup> <a name="connectivity_association_key_secret_version" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion"></a>

```python
connectivity_association_key_secret_version: str
```

- *Type:* str

---

##### `connectivity_association_name_secret_id`<sup>Required</sup> <a name="connectivity_association_name_secret_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId"></a>

```python
connectivity_association_name_secret_id: str
```

- *Type:* str

---

##### `connectivity_association_name_secret_version`<sup>Required</sup> <a name="connectivity_association_name_secret_version" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion"></a>

```python
connectivity_association_name_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKey">DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesPrimaryKey</a>

---


### DataOciCoreCrossConnectsCrossConnectsOutputReference <a name="DataOciCoreCrossConnectsCrossConnectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.crossConnectGroupId">cross_connect_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.customerReferenceName">customer_reference_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.farCrossConnectOrCrossConnectGroupId">far_cross_connect_or_cross_connect_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.isActive">is_active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.locationName">location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.macsecProperties">macsec_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList">DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.nearCrossConnectOrCrossConnectGroupId">near_cross_connect_or_cross_connect_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.ociLogicalDeviceName">oci_logical_device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.ociPhysicalDeviceName">oci_physical_device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.portSpeedShapeName">port_speed_shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnects">DataOciCoreCrossConnectsCrossConnects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cross_connect_group_id`<sup>Required</sup> <a name="cross_connect_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.crossConnectGroupId"></a>

```python
cross_connect_group_id: str
```

- *Type:* str

---

##### `customer_reference_name`<sup>Required</sup> <a name="customer_reference_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.customerReferenceName"></a>

```python
customer_reference_name: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `far_cross_connect_or_cross_connect_group_id`<sup>Required</sup> <a name="far_cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.farCrossConnectOrCrossConnectGroupId"></a>

```python
far_cross_connect_or_cross_connect_group_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.isActive"></a>

```python
is_active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.locationName"></a>

```python
location_name: str
```

- *Type:* str

---

##### `macsec_properties`<sup>Required</sup> <a name="macsec_properties" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.macsecProperties"></a>

```python
macsec_properties: DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList">DataOciCoreCrossConnectsCrossConnectsMacsecPropertiesList</a>

---

##### `near_cross_connect_or_cross_connect_group_id`<sup>Required</sup> <a name="near_cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.nearCrossConnectOrCrossConnectGroupId"></a>

```python
near_cross_connect_or_cross_connect_group_id: str
```

- *Type:* str

---

##### `oci_logical_device_name`<sup>Required</sup> <a name="oci_logical_device_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.ociLogicalDeviceName"></a>

```python
oci_logical_device_name: str
```

- *Type:* str

---

##### `oci_physical_device_name`<sup>Required</sup> <a name="oci_physical_device_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.ociPhysicalDeviceName"></a>

```python
oci_physical_device_name: str
```

- *Type:* str

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `port_speed_shape_name`<sup>Required</sup> <a name="port_speed_shape_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.portSpeedShapeName"></a>

```python
port_speed_shape_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnectsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreCrossConnectsCrossConnects
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsCrossConnects">DataOciCoreCrossConnectsCrossConnects</a>

---


### DataOciCoreCrossConnectsFilterList <a name="DataOciCoreCrossConnectsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreCrossConnectsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter">DataOciCoreCrossConnectsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreCrossConnectsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter">DataOciCoreCrossConnectsFilter</a>]]

---


### DataOciCoreCrossConnectsFilterOutputReference <a name="DataOciCoreCrossConnectsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connects

dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter">DataOciCoreCrossConnectsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreCrossConnectsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnects.DataOciCoreCrossConnectsFilter">DataOciCoreCrossConnectsFilter</a>]

---



