# `dataOciCoreShapes` Submodule <a name="`dataOciCoreShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreShapes <a name="DataOciCoreShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes oci_core_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapes(
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
  availability_domain: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreShapesFilter]] = None,
  id: str = None,
  image_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#compartment_id DataOciCoreShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#availability_domain DataOciCoreShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#id DataOciCoreShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#image_id DataOciCoreShapes#image_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#compartment_id DataOciCoreShapes#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#availability_domain DataOciCoreShapes#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#filter DataOciCoreShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#id DataOciCoreShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#image_id DataOciCoreShapes#image_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetImageId">reset_image_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreShapesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetImageId"></a>

```python
def reset_image_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreShapes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreShapes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList">DataOciCoreShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.shapes">shapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList">DataOciCoreShapesShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filter"></a>

```python
filter: DataOciCoreShapesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList">DataOciCoreShapesFilterList</a>

---

##### `shapes`<sup>Required</sup> <a name="shapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.shapes"></a>

```python
shapes: DataOciCoreShapesShapesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList">DataOciCoreShapesShapesList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreShapesConfig <a name="DataOciCoreShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  availability_domain: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreShapesFilter]] = None,
  id: str = None,
  image_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#compartment_id DataOciCoreShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#availability_domain DataOciCoreShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#id DataOciCoreShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#image_id DataOciCoreShapes#image_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#compartment_id DataOciCoreShapes#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#availability_domain DataOciCoreShapes#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#filter DataOciCoreShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#id DataOciCoreShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#image_id DataOciCoreShapes#image_id}.

---

### DataOciCoreShapesFilter <a name="DataOciCoreShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#name DataOciCoreShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#values DataOciCoreShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#regex DataOciCoreShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#name DataOciCoreShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#values DataOciCoreShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#regex DataOciCoreShapes#regex}.

---

### DataOciCoreShapesShapes <a name="DataOciCoreShapesShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapes()
```


### DataOciCoreShapesShapesMaxVnicAttachmentOptions <a name="DataOciCoreShapesShapesMaxVnicAttachmentOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions()
```


### DataOciCoreShapesShapesMemoryOptions <a name="DataOciCoreShapesShapesMemoryOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions()
```


### DataOciCoreShapesShapesNetworkingBandwidthOptions <a name="DataOciCoreShapesShapesNetworkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions()
```


### DataOciCoreShapesShapesOcpuOptions <a name="DataOciCoreShapesShapesOcpuOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions()
```


### DataOciCoreShapesShapesPlatformConfigOptions <a name="DataOciCoreShapesShapesPlatformConfigOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions()
```


### DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions()
```


### DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions()
```


### DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions()
```


### DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions()
```


### DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions()
```


### DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions()
```


### DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions()
```


### DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions()
```


### DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions()
```


### DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions()
```


### DataOciCoreShapesShapesRecommendedAlternatives <a name="DataOciCoreShapesShapesRecommendedAlternatives" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreShapesFilterList <a name="DataOciCoreShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>]]

---


### DataOciCoreShapesFilterOutputReference <a name="DataOciCoreShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreShapesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>]

---


### DataOciCoreShapesShapesList <a name="DataOciCoreShapesShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesMaxVnicAttachmentOptionsList <a name="DataOciCoreShapesShapesMaxVnicAttachmentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference <a name="DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.defaultPerOcpu">default_per_ocpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions">DataOciCoreShapesShapesMaxVnicAttachmentOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_per_ocpu`<sup>Required</sup> <a name="default_per_ocpu" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.defaultPerOcpu"></a>

```python
default_per_ocpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesMaxVnicAttachmentOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions">DataOciCoreShapesShapesMaxVnicAttachmentOptions</a>

---


### DataOciCoreShapesShapesMemoryOptionsList <a name="DataOciCoreShapesShapesMemoryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesMemoryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesMemoryOptionsOutputReference <a name="DataOciCoreShapesShapesMemoryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.defaultPerOcpuInGbs">default_per_ocpu_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxInGbs">max_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerNumaNodeInGbs">max_per_numa_node_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerOcpuInGbs">max_per_ocpu_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minInGbs">min_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minPerOcpuInGbs">min_per_ocpu_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions">DataOciCoreShapesShapesMemoryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_per_ocpu_in_gbs`<sup>Required</sup> <a name="default_per_ocpu_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.defaultPerOcpuInGbs"></a>

```python
default_per_ocpu_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_in_gbs`<sup>Required</sup> <a name="max_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxInGbs"></a>

```python
max_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_per_numa_node_in_gbs`<sup>Required</sup> <a name="max_per_numa_node_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerNumaNodeInGbs"></a>

```python
max_per_numa_node_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_per_ocpu_in_gbs`<sup>Required</sup> <a name="max_per_ocpu_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerOcpuInGbs"></a>

```python
max_per_ocpu_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_in_gbs`<sup>Required</sup> <a name="min_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minInGbs"></a>

```python
min_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_per_ocpu_in_gbs`<sup>Required</sup> <a name="min_per_ocpu_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minPerOcpuInGbs"></a>

```python
min_per_ocpu_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesMemoryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions">DataOciCoreShapesShapesMemoryOptions</a>

---


### DataOciCoreShapesShapesNetworkingBandwidthOptionsList <a name="DataOciCoreShapesShapesNetworkingBandwidthOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference <a name="DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps">default_per_ocpu_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.maxInGbps">max_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.minInGbps">min_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions">DataOciCoreShapesShapesNetworkingBandwidthOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_per_ocpu_in_gbps`<sup>Required</sup> <a name="default_per_ocpu_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps"></a>

```python
default_per_ocpu_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_in_gbps`<sup>Required</sup> <a name="max_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.maxInGbps"></a>

```python
max_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_in_gbps`<sup>Required</sup> <a name="min_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.minInGbps"></a>

```python
min_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesNetworkingBandwidthOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions">DataOciCoreShapesShapesNetworkingBandwidthOptions</a>

---


### DataOciCoreShapesShapesOcpuOptionsList <a name="DataOciCoreShapesShapesOcpuOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesOcpuOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesOcpuOptionsOutputReference <a name="DataOciCoreShapesShapesOcpuOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.maxPerNumaNode">max_per_numa_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions">DataOciCoreShapesShapesOcpuOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_per_numa_node`<sup>Required</sup> <a name="max_per_numa_node" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.maxPerNumaNode"></a>

```python
max_per_numa_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesOcpuOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions">DataOciCoreShapesShapesOcpuOptions</a>

---


### DataOciCoreShapesShapesOutputReference <a name="DataOciCoreShapesShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.baselineOcpuUtilizations">baseline_ocpu_utilizations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.billingType">billing_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpuDescription">gpu_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpus">gpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isBilledForStoppedInstance">is_billed_for_stopped_instance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isFlexible">is_flexible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isLiveMigrationSupported">is_live_migration_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isSubcore">is_subcore</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDiskDescription">local_disk_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisks">local_disks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisksTotalSizeInGbs">local_disks_total_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachmentOptions">max_vnic_attachment_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList">DataOciCoreShapesShapesMaxVnicAttachmentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachments">max_vnic_attachments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryOptions">memory_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList">DataOciCoreShapesShapesMemoryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.minTotalBaselineOcpusRequired">min_total_baseline_ocpus_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthInGbps">networking_bandwidth_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthOptions">networking_bandwidth_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList">DataOciCoreShapesShapesNetworkingBandwidthOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkPorts">network_ports</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpuOptions">ocpu_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList">DataOciCoreShapesShapesOcpuOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.platformConfigOptions">platform_config_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.processorDescription">processor_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.quotaNames">quota_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaBandwidthInGbps">rdma_bandwidth_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaPorts">rdma_ports</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.recommendedAlternatives">recommended_alternatives</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList">DataOciCoreShapesShapesRecommendedAlternativesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.resizeCompatibleShapes">resize_compatible_shapes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes">DataOciCoreShapesShapes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `baseline_ocpu_utilizations`<sup>Required</sup> <a name="baseline_ocpu_utilizations" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.baselineOcpuUtilizations"></a>

```python
baseline_ocpu_utilizations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `billing_type`<sup>Required</sup> <a name="billing_type" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.billingType"></a>

```python
billing_type: str
```

- *Type:* str

---

##### `gpu_description`<sup>Required</sup> <a name="gpu_description" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpuDescription"></a>

```python
gpu_description: str
```

- *Type:* str

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpus"></a>

```python
gpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_billed_for_stopped_instance`<sup>Required</sup> <a name="is_billed_for_stopped_instance" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isBilledForStoppedInstance"></a>

```python
is_billed_for_stopped_instance: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_flexible`<sup>Required</sup> <a name="is_flexible" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isFlexible"></a>

```python
is_flexible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_live_migration_supported`<sup>Required</sup> <a name="is_live_migration_supported" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isLiveMigrationSupported"></a>

```python
is_live_migration_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_subcore`<sup>Required</sup> <a name="is_subcore" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isSubcore"></a>

```python
is_subcore: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `local_disk_description`<sup>Required</sup> <a name="local_disk_description" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDiskDescription"></a>

```python
local_disk_description: str
```

- *Type:* str

---

##### `local_disks`<sup>Required</sup> <a name="local_disks" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisks"></a>

```python
local_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_disks_total_size_in_gbs`<sup>Required</sup> <a name="local_disks_total_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisksTotalSizeInGbs"></a>

```python
local_disks_total_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vnic_attachment_options`<sup>Required</sup> <a name="max_vnic_attachment_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachmentOptions"></a>

```python
max_vnic_attachment_options: DataOciCoreShapesShapesMaxVnicAttachmentOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList">DataOciCoreShapesShapesMaxVnicAttachmentOptionsList</a>

---

##### `max_vnic_attachments`<sup>Required</sup> <a name="max_vnic_attachments" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachments"></a>

```python
max_vnic_attachments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_options`<sup>Required</sup> <a name="memory_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryOptions"></a>

```python
memory_options: DataOciCoreShapesShapesMemoryOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList">DataOciCoreShapesShapesMemoryOptionsList</a>

---

##### `min_total_baseline_ocpus_required`<sup>Required</sup> <a name="min_total_baseline_ocpus_required" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.minTotalBaselineOcpusRequired"></a>

```python
min_total_baseline_ocpus_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `networking_bandwidth_in_gbps`<sup>Required</sup> <a name="networking_bandwidth_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthInGbps"></a>

```python
networking_bandwidth_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `networking_bandwidth_options`<sup>Required</sup> <a name="networking_bandwidth_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthOptions"></a>

```python
networking_bandwidth_options: DataOciCoreShapesShapesNetworkingBandwidthOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList">DataOciCoreShapesShapesNetworkingBandwidthOptionsList</a>

---

##### `network_ports`<sup>Required</sup> <a name="network_ports" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkPorts"></a>

```python
network_ports: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_options`<sup>Required</sup> <a name="ocpu_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpuOptions"></a>

```python
ocpu_options: DataOciCoreShapesShapesOcpuOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList">DataOciCoreShapesShapesOcpuOptionsList</a>

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `platform_config_options`<sup>Required</sup> <a name="platform_config_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.platformConfigOptions"></a>

```python
platform_config_options: DataOciCoreShapesShapesPlatformConfigOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsList</a>

---

##### `processor_description`<sup>Required</sup> <a name="processor_description" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.processorDescription"></a>

```python
processor_description: str
```

- *Type:* str

---

##### `quota_names`<sup>Required</sup> <a name="quota_names" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.quotaNames"></a>

```python
quota_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rdma_bandwidth_in_gbps`<sup>Required</sup> <a name="rdma_bandwidth_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaBandwidthInGbps"></a>

```python
rdma_bandwidth_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rdma_ports`<sup>Required</sup> <a name="rdma_ports" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaPorts"></a>

```python
rdma_ports: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recommended_alternatives`<sup>Required</sup> <a name="recommended_alternatives" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.recommendedAlternatives"></a>

```python
recommended_alternatives: DataOciCoreShapesShapesRecommendedAlternativesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList">DataOciCoreShapesShapesRecommendedAlternativesList</a>

---

##### `resize_compatible_shapes`<sup>Required</sup> <a name="resize_compatible_shapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.resizeCompatibleShapes"></a>

```python
resize_compatible_shapes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes">DataOciCoreShapesShapes</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.allowedValues">allowed_values</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.isDefaultEnabled">is_default_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.allowedValues"></a>

```python
allowed_values: BooleanList
```

- *Type:* cdktf.BooleanList

---

##### `is_default_enabled`<sup>Required</sup> <a name="is_default_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.isDefaultEnabled"></a>

```python
is_default_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.allowedValues">allowed_values</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.isDefaultEnabled">is_default_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.allowedValues"></a>

```python
allowed_values: BooleanList
```

- *Type:* cdktf.BooleanList

---

##### `is_default_enabled`<sup>Required</sup> <a name="is_default_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.isDefaultEnabled"></a>

```python
is_default_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesPlatformConfigOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.allowedValues">allowed_values</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.isDefaultEnabled">is_default_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.allowedValues"></a>

```python
allowed_values: BooleanList
```

- *Type:* cdktf.BooleanList

---

##### `is_default_enabled`<sup>Required</sup> <a name="is_default_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.isDefaultEnabled"></a>

```python
is_default_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.allowedValues">allowed_values</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.isDefaultEnabled">is_default_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.allowedValues"></a>

```python
allowed_values: BooleanList
```

- *Type:* cdktf.BooleanList

---

##### `is_default_enabled`<sup>Required</sup> <a name="is_default_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.isDefaultEnabled"></a>

```python
is_default_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.accessControlServiceOptions">access_control_service_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.inputOutputMemoryManagementUnitOptions">input_output_memory_management_unit_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.measuredBootOptions">measured_boot_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.memoryEncryptionOptions">memory_encryption_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.numaNodesPerSocketPlatformOptions">numa_nodes_per_socket_platform_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.percentageOfCoresEnabledOptions">percentage_of_cores_enabled_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.secureBootOptions">secure_boot_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.symmetricMultiThreadingOptions">symmetric_multi_threading_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.trustedPlatformModuleOptions">trusted_platform_module_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.virtualInstructionsOptions">virtual_instructions_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions">DataOciCoreShapesShapesPlatformConfigOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_control_service_options`<sup>Required</sup> <a name="access_control_service_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.accessControlServiceOptions"></a>

```python
access_control_service_options: DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList</a>

---

##### `input_output_memory_management_unit_options`<sup>Required</sup> <a name="input_output_memory_management_unit_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.inputOutputMemoryManagementUnitOptions"></a>

```python
input_output_memory_management_unit_options: DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList</a>

---

##### `measured_boot_options`<sup>Required</sup> <a name="measured_boot_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.measuredBootOptions"></a>

```python
measured_boot_options: DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList</a>

---

##### `memory_encryption_options`<sup>Required</sup> <a name="memory_encryption_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.memoryEncryptionOptions"></a>

```python
memory_encryption_options: DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList</a>

---

##### `numa_nodes_per_socket_platform_options`<sup>Required</sup> <a name="numa_nodes_per_socket_platform_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.numaNodesPerSocketPlatformOptions"></a>

```python
numa_nodes_per_socket_platform_options: DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList</a>

---

##### `percentage_of_cores_enabled_options`<sup>Required</sup> <a name="percentage_of_cores_enabled_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.percentageOfCoresEnabledOptions"></a>

```python
percentage_of_cores_enabled_options: DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList</a>

---

##### `secure_boot_options`<sup>Required</sup> <a name="secure_boot_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.secureBootOptions"></a>

```python
secure_boot_options: DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList</a>

---

##### `symmetric_multi_threading_options`<sup>Required</sup> <a name="symmetric_multi_threading_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.symmetricMultiThreadingOptions"></a>

```python
symmetric_multi_threading_options: DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList</a>

---

##### `trusted_platform_module_options`<sup>Required</sup> <a name="trusted_platform_module_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.trustedPlatformModuleOptions"></a>

```python
trusted_platform_module_options: DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `virtual_instructions_options`<sup>Required</sup> <a name="virtual_instructions_options" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.virtualInstructionsOptions"></a>

```python
virtual_instructions_options: DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesPlatformConfigOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions">DataOciCoreShapesShapesPlatformConfigOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.defaultValue">default_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.defaultValue"></a>

```python
default_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.allowedValues">allowed_values</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.isDefaultEnabled">is_default_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.allowedValues"></a>

```python
allowed_values: BooleanList
```

- *Type:* cdktf.BooleanList

---

##### `is_default_enabled`<sup>Required</sup> <a name="is_default_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.isDefaultEnabled"></a>

```python
is_default_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.allowedValues">allowed_values</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.isDefaultEnabled">is_default_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.allowedValues"></a>

```python
allowed_values: BooleanList
```

- *Type:* cdktf.BooleanList

---

##### `is_default_enabled`<sup>Required</sup> <a name="is_default_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.isDefaultEnabled"></a>

```python
is_default_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.allowedValues">allowed_values</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.isDefaultEnabled">is_default_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.allowedValues"></a>

```python
allowed_values: BooleanList
```

- *Type:* cdktf.BooleanList

---

##### `is_default_enabled`<sup>Required</sup> <a name="is_default_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.isDefaultEnabled"></a>

```python
is_default_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.allowedValues">allowed_values</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.isDefaultEnabled">is_default_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.allowedValues"></a>

```python
allowed_values: BooleanList
```

- *Type:* cdktf.BooleanList

---

##### `is_default_enabled`<sup>Required</sup> <a name="is_default_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.isDefaultEnabled"></a>

```python
is_default_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions</a>

---


### DataOciCoreShapesShapesRecommendedAlternativesList <a name="DataOciCoreShapesShapesRecommendedAlternativesList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreShapesShapesRecommendedAlternativesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreShapesShapesRecommendedAlternativesOutputReference <a name="DataOciCoreShapesShapesRecommendedAlternativesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_shapes

dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives">DataOciCoreShapesShapesRecommendedAlternatives</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreShapesShapesRecommendedAlternatives
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives">DataOciCoreShapesShapesRecommendedAlternatives</a>

---



