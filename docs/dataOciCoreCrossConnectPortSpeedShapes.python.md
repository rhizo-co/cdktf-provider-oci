# `dataOciCoreCrossConnectPortSpeedShapes` Submodule <a name="`dataOciCoreCrossConnectPortSpeedShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreCrossConnectPortSpeedShapes <a name="DataOciCoreCrossConnectPortSpeedShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes oci_core_cross_connect_port_speed_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connect_port_speed_shapes

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCoreCrossConnectPortSpeedShapesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#compartment_id DataOciCoreCrossConnectPortSpeedShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#id DataOciCoreCrossConnectPortSpeedShapes#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#compartment_id DataOciCoreCrossConnectPortSpeedShapes#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#filter DataOciCoreCrossConnectPortSpeedShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#id DataOciCoreCrossConnectPortSpeedShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreCrossConnectPortSpeedShapesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreCrossConnectPortSpeedShapes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connect_port_speed_shapes

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connect_port_speed_shapes

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connect_port_speed_shapes

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connect_port_speed_shapes

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreCrossConnectPortSpeedShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreCrossConnectPortSpeedShapes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreCrossConnectPortSpeedShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreCrossConnectPortSpeedShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.crossConnectPortSpeedShapes">cross_connect_port_speed_shapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList">DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList">DataOciCoreCrossConnectPortSpeedShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cross_connect_port_speed_shapes`<sup>Required</sup> <a name="cross_connect_port_speed_shapes" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.crossConnectPortSpeedShapes"></a>

```python
cross_connect_port_speed_shapes: DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList">DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.filter"></a>

```python
filter: DataOciCoreCrossConnectPortSpeedShapesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList">DataOciCoreCrossConnectPortSpeedShapesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreCrossConnectPortSpeedShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreCrossConnectPortSpeedShapesConfig <a name="DataOciCoreCrossConnectPortSpeedShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connect_port_speed_shapes

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreCrossConnectPortSpeedShapesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#compartment_id DataOciCoreCrossConnectPortSpeedShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#id DataOciCoreCrossConnectPortSpeedShapes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#compartment_id DataOciCoreCrossConnectPortSpeedShapes#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreCrossConnectPortSpeedShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#filter DataOciCoreCrossConnectPortSpeedShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#id DataOciCoreCrossConnectPortSpeedShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes <a name="DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connect_port_speed_shapes

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes()
```


### DataOciCoreCrossConnectPortSpeedShapesFilter <a name="DataOciCoreCrossConnectPortSpeedShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connect_port_speed_shapes

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#name DataOciCoreCrossConnectPortSpeedShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#values DataOciCoreCrossConnectPortSpeedShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#regex DataOciCoreCrossConnectPortSpeedShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#name DataOciCoreCrossConnectPortSpeedShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#values DataOciCoreCrossConnectPortSpeedShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#regex DataOciCoreCrossConnectPortSpeedShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList <a name="DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connect_port_speed_shapes

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference <a name="DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connect_port_speed_shapes

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.portSpeedInGbps">port_speed_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes">DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port_speed_in_gbps`<sup>Required</sup> <a name="port_speed_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.portSpeedInGbps"></a>

```python
port_speed_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes">DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes</a>

---


### DataOciCoreCrossConnectPortSpeedShapesFilterList <a name="DataOciCoreCrossConnectPortSpeedShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connect_port_speed_shapes

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreCrossConnectPortSpeedShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>]]

---


### DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference <a name="DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_cross_connect_port_speed_shapes

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreCrossConnectPortSpeedShapesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>]

---



