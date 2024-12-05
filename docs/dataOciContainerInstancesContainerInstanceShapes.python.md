# `dataOciContainerInstancesContainerInstanceShapes` Submodule <a name="`dataOciContainerInstancesContainerInstanceShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerInstancesContainerInstanceShapes <a name="DataOciContainerInstancesContainerInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes oci_container_instances_container_instance_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes(
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
  filter: typing.Union[IResolvable, typing.List[DataOciContainerInstancesContainerInstanceShapesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#compartment_id DataOciContainerInstancesContainerInstanceShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#availability_domain DataOciContainerInstancesContainerInstanceShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#id DataOciContainerInstancesContainerInstanceShapes#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#compartment_id DataOciContainerInstancesContainerInstanceShapes#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#availability_domain DataOciContainerInstancesContainerInstanceShapes#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#filter DataOciContainerInstancesContainerInstanceShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#id DataOciContainerInstancesContainerInstanceShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciContainerInstancesContainerInstanceShapesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciContainerInstancesContainerInstanceShapes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciContainerInstancesContainerInstanceShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciContainerInstancesContainerInstanceShapes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciContainerInstancesContainerInstanceShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerInstancesContainerInstanceShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.containerInstanceShapeCollection">container_instance_shape_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList">DataOciContainerInstancesContainerInstanceShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `container_instance_shape_collection`<sup>Required</sup> <a name="container_instance_shape_collection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.containerInstanceShapeCollection"></a>

```python
container_instance_shape_collection: DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.filter"></a>

```python
filter: DataOciContainerInstancesContainerInstanceShapesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList">DataOciContainerInstancesContainerInstanceShapesFilterList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciContainerInstancesContainerInstanceShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerInstancesContainerInstanceShapesConfig <a name="DataOciContainerInstancesContainerInstanceShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  availability_domain: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciContainerInstancesContainerInstanceShapesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#compartment_id DataOciContainerInstancesContainerInstanceShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#availability_domain DataOciContainerInstancesContainerInstanceShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#id DataOciContainerInstancesContainerInstanceShapes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#compartment_id DataOciContainerInstancesContainerInstanceShapes#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#availability_domain DataOciContainerInstancesContainerInstanceShapes#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciContainerInstancesContainerInstanceShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#filter DataOciContainerInstancesContainerInstanceShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#id DataOciContainerInstancesContainerInstanceShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection()
```


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems()
```


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions()
```


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions()
```


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions()
```


### DataOciContainerInstancesContainerInstanceShapesFilter <a name="DataOciContainerInstancesContainerInstanceShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#name DataOciContainerInstancesContainerInstanceShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#values DataOciContainerInstancesContainerInstanceShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#regex DataOciContainerInstancesContainerInstanceShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#name DataOciContainerInstancesContainerInstanceShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#values DataOciContainerInstancesContainerInstanceShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#regex DataOciContainerInstancesContainerInstanceShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.defaultPerOcpuInGbs">default_per_ocpu_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.maxInGbs">max_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.maxPerOcpuInGbs">max_per_ocpu_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.minInGbs">min_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.minPerOcpuInGbs">min_per_ocpu_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_per_ocpu_in_gbs`<sup>Required</sup> <a name="default_per_ocpu_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.defaultPerOcpuInGbs"></a>

```python
default_per_ocpu_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_in_gbs`<sup>Required</sup> <a name="max_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.maxInGbs"></a>

```python
max_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_per_ocpu_in_gbs`<sup>Required</sup> <a name="max_per_ocpu_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.maxPerOcpuInGbs"></a>

```python
max_per_ocpu_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_in_gbs`<sup>Required</sup> <a name="min_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.minInGbs"></a>

```python
min_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_per_ocpu_in_gbs`<sup>Required</sup> <a name="min_per_ocpu_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.minPerOcpuInGbs"></a>

```python
min_per_ocpu_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps">default_per_ocpu_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.maxInGbps">max_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.minInGbps">min_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_per_ocpu_in_gbps`<sup>Required</sup> <a name="default_per_ocpu_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps"></a>

```python
default_per_ocpu_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_in_gbps`<sup>Required</sup> <a name="max_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.maxInGbps"></a>

```python
max_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_in_gbps`<sup>Required</sup> <a name="min_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.minInGbps"></a>

```python
min_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.memoryOptions">memory_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.networkingBandwidthOptions">networking_bandwidth_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.ocpuOptions">ocpu_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.processorDescription">processor_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_options`<sup>Required</sup> <a name="memory_options" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.memoryOptions"></a>

```python
memory_options: DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `networking_bandwidth_options`<sup>Required</sup> <a name="networking_bandwidth_options" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.networkingBandwidthOptions"></a>

```python
networking_bandwidth_options: DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList</a>

---

##### `ocpu_options`<sup>Required</sup> <a name="ocpu_options" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.ocpuOptions"></a>

```python
ocpu_options: DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList</a>

---

##### `processor_description`<sup>Required</sup> <a name="processor_description" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.processorDescription"></a>

```python
processor_description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems</a>

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.items"></a>

```python
items: DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection</a>

---


### DataOciContainerInstancesContainerInstanceShapesFilterList <a name="DataOciContainerInstancesContainerInstanceShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciContainerInstancesContainerInstanceShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>]]

---


### DataOciContainerInstancesContainerInstanceShapesFilterOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shapes

dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciContainerInstancesContainerInstanceShapesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>]

---



