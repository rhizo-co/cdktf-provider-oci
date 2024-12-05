# `dataOciContainerInstancesContainerInstanceShape` Submodule <a name="`dataOciContainerInstancesContainerInstanceShape` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerInstancesContainerInstanceShape <a name="DataOciContainerInstancesContainerInstanceShape" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape oci_container_instances_container_instance_shape}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape(
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
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#compartment_id DataOciContainerInstancesContainerInstanceShape#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#availability_domain DataOciContainerInstancesContainerInstanceShape#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#id DataOciContainerInstancesContainerInstanceShape#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#compartment_id DataOciContainerInstancesContainerInstanceShape#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#availability_domain DataOciContainerInstancesContainerInstanceShape#availability_domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#id DataOciContainerInstancesContainerInstanceShape#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciContainerInstancesContainerInstanceShape resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciContainerInstancesContainerInstanceShape resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciContainerInstancesContainerInstanceShape to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciContainerInstancesContainerInstanceShape that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerInstancesContainerInstanceShape to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList">DataOciContainerInstancesContainerInstanceShapeItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.items"></a>

```python
items: DataOciContainerInstancesContainerInstanceShapeItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList">DataOciContainerInstancesContainerInstanceShapeItemsList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerInstancesContainerInstanceShapeConfigA <a name="DataOciContainerInstancesContainerInstanceShapeConfigA" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  availability_domain: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#compartment_id DataOciContainerInstancesContainerInstanceShape#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#availability_domain DataOciContainerInstancesContainerInstanceShape#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#id DataOciContainerInstancesContainerInstanceShape#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#compartment_id DataOciContainerInstancesContainerInstanceShape#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#availability_domain DataOciContainerInstancesContainerInstanceShape#availability_domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#id DataOciContainerInstancesContainerInstanceShape#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciContainerInstancesContainerInstanceShapeItems <a name="DataOciContainerInstancesContainerInstanceShapeItems" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItems()
```


### DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions <a name="DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions()
```


### DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions <a name="DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions()
```


### DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions <a name="DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerInstancesContainerInstanceShapeItemsList <a name="DataOciContainerInstancesContainerInstanceShapeItemsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceShapeItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList <a name="DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.defaultPerOcpuInGbs">default_per_ocpu_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.maxInGbs">max_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.maxPerOcpuInGbs">max_per_ocpu_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.minInGbs">min_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.minPerOcpuInGbs">min_per_ocpu_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions">DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_per_ocpu_in_gbs`<sup>Required</sup> <a name="default_per_ocpu_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.defaultPerOcpuInGbs"></a>

```python
default_per_ocpu_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_in_gbs`<sup>Required</sup> <a name="max_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.maxInGbs"></a>

```python
max_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_per_ocpu_in_gbs`<sup>Required</sup> <a name="max_per_ocpu_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.maxPerOcpuInGbs"></a>

```python
max_per_ocpu_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_in_gbs`<sup>Required</sup> <a name="min_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.minInGbs"></a>

```python
min_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_per_ocpu_in_gbs`<sup>Required</sup> <a name="min_per_ocpu_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.minPerOcpuInGbs"></a>

```python
min_per_ocpu_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions">DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList <a name="DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps">default_per_ocpu_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.maxInGbps">max_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.minInGbps">min_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions">DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_per_ocpu_in_gbps`<sup>Required</sup> <a name="default_per_ocpu_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps"></a>

```python
default_per_ocpu_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_in_gbps`<sup>Required</sup> <a name="max_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.maxInGbps"></a>

```python
max_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_in_gbps`<sup>Required</sup> <a name="min_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.minInGbps"></a>

```python
min_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions">DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList <a name="DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions">DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions">DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapeItemsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapeItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_container_instances_container_instance_shape

dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.memoryOptions">memory_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList">DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.networkingBandwidthOptions">networking_bandwidth_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList">DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.ocpuOptions">ocpu_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList">DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.processorDescription">processor_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItems">DataOciContainerInstancesContainerInstanceShapeItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_options`<sup>Required</sup> <a name="memory_options" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.memoryOptions"></a>

```python
memory_options: DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList">DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `networking_bandwidth_options`<sup>Required</sup> <a name="networking_bandwidth_options" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.networkingBandwidthOptions"></a>

```python
networking_bandwidth_options: DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList">DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList</a>

---

##### `ocpu_options`<sup>Required</sup> <a name="ocpu_options" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.ocpuOptions"></a>

```python
ocpu_options: DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList">DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList</a>

---

##### `processor_description`<sup>Required</sup> <a name="processor_description" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.processorDescription"></a>

```python
processor_description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerInstancesContainerInstanceShapeItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItems">DataOciContainerInstancesContainerInstanceShapeItems</a>

---



