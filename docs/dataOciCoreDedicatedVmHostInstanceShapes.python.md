# `dataOciCoreDedicatedVmHostInstanceShapes` Submodule <a name="`dataOciCoreDedicatedVmHostInstanceShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDedicatedVmHostInstanceShapes <a name="DataOciCoreDedicatedVmHostInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes oci_core_dedicated_vm_host_instance_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_host_instance_shapes

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes(
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
  dedicated_vm_host_shape: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreDedicatedVmHostInstanceShapesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#compartment_id DataOciCoreDedicatedVmHostInstanceShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#availability_domain DataOciCoreDedicatedVmHostInstanceShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.dedicatedVmHostShape">dedicated_vm_host_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#dedicated_vm_host_shape DataOciCoreDedicatedVmHostInstanceShapes#dedicated_vm_host_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#id DataOciCoreDedicatedVmHostInstanceShapes#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#compartment_id DataOciCoreDedicatedVmHostInstanceShapes#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#availability_domain DataOciCoreDedicatedVmHostInstanceShapes#availability_domain}.

---

##### `dedicated_vm_host_shape`<sup>Optional</sup> <a name="dedicated_vm_host_shape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.dedicatedVmHostShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#dedicated_vm_host_shape DataOciCoreDedicatedVmHostInstanceShapes#dedicated_vm_host_shape}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#filter DataOciCoreDedicatedVmHostInstanceShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#id DataOciCoreDedicatedVmHostInstanceShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetDedicatedVmHostShape">reset_dedicated_vm_host_shape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreDedicatedVmHostInstanceShapesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_dedicated_vm_host_shape` <a name="reset_dedicated_vm_host_shape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetDedicatedVmHostShape"></a>

```python
def reset_dedicated_vm_host_shape() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreDedicatedVmHostInstanceShapes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_host_instance_shapes

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_host_instance_shapes

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_host_instance_shapes

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_host_instance_shapes

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreDedicatedVmHostInstanceShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreDedicatedVmHostInstanceShapes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreDedicatedVmHostInstanceShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDedicatedVmHostInstanceShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostInstanceShapes">dedicated_vm_host_instance_shapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList">DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList">DataOciCoreDedicatedVmHostInstanceShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostShapeInput">dedicated_vm_host_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostShape">dedicated_vm_host_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `dedicated_vm_host_instance_shapes`<sup>Required</sup> <a name="dedicated_vm_host_instance_shapes" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostInstanceShapes"></a>

```python
dedicated_vm_host_instance_shapes: DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList">DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.filter"></a>

```python
filter: DataOciCoreDedicatedVmHostInstanceShapesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList">DataOciCoreDedicatedVmHostInstanceShapesFilterList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `dedicated_vm_host_shape_input`<sup>Optional</sup> <a name="dedicated_vm_host_shape_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostShapeInput"></a>

```python
dedicated_vm_host_shape_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreDedicatedVmHostInstanceShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `dedicated_vm_host_shape`<sup>Required</sup> <a name="dedicated_vm_host_shape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostShape"></a>

```python
dedicated_vm_host_shape: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDedicatedVmHostInstanceShapesConfig <a name="DataOciCoreDedicatedVmHostInstanceShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_host_instance_shapes

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  availability_domain: str = None,
  dedicated_vm_host_shape: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreDedicatedVmHostInstanceShapesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#compartment_id DataOciCoreDedicatedVmHostInstanceShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#availability_domain DataOciCoreDedicatedVmHostInstanceShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.dedicatedVmHostShape">dedicated_vm_host_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#dedicated_vm_host_shape DataOciCoreDedicatedVmHostInstanceShapes#dedicated_vm_host_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#id DataOciCoreDedicatedVmHostInstanceShapes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#compartment_id DataOciCoreDedicatedVmHostInstanceShapes#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#availability_domain DataOciCoreDedicatedVmHostInstanceShapes#availability_domain}.

---

##### `dedicated_vm_host_shape`<sup>Optional</sup> <a name="dedicated_vm_host_shape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.dedicatedVmHostShape"></a>

```python
dedicated_vm_host_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#dedicated_vm_host_shape DataOciCoreDedicatedVmHostInstanceShapes#dedicated_vm_host_shape}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreDedicatedVmHostInstanceShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#filter DataOciCoreDedicatedVmHostInstanceShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#id DataOciCoreDedicatedVmHostInstanceShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes <a name="DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_host_instance_shapes

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes()
```


### DataOciCoreDedicatedVmHostInstanceShapesFilter <a name="DataOciCoreDedicatedVmHostInstanceShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_host_instance_shapes

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#name DataOciCoreDedicatedVmHostInstanceShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#values DataOciCoreDedicatedVmHostInstanceShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#regex DataOciCoreDedicatedVmHostInstanceShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#name DataOciCoreDedicatedVmHostInstanceShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#values DataOciCoreDedicatedVmHostInstanceShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#regex DataOciCoreDedicatedVmHostInstanceShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList <a name="DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_host_instance_shapes

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference <a name="DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_host_instance_shapes

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.instanceShapeName">instance_shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes">DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `instance_shape_name`<sup>Required</sup> <a name="instance_shape_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.instanceShapeName"></a>

```python
instance_shape_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes">DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes</a>

---


### DataOciCoreDedicatedVmHostInstanceShapesFilterList <a name="DataOciCoreDedicatedVmHostInstanceShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_host_instance_shapes

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreDedicatedVmHostInstanceShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>]]

---


### DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference <a name="DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_host_instance_shapes

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreDedicatedVmHostInstanceShapesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>]

---


