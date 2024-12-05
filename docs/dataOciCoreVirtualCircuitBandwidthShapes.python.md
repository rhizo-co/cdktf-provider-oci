# `dataOciCoreVirtualCircuitBandwidthShapes` Submodule <a name="`dataOciCoreVirtualCircuitBandwidthShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualCircuitBandwidthShapes <a name="DataOciCoreVirtualCircuitBandwidthShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes oci_core_virtual_circuit_bandwidth_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_bandwidth_shapes

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  provider_service_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitBandwidthShapesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.providerServiceId">provider_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#provider_service_id DataOciCoreVirtualCircuitBandwidthShapes#provider_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#id DataOciCoreVirtualCircuitBandwidthShapes#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `provider_service_id`<sup>Required</sup> <a name="provider_service_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.providerServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#provider_service_id DataOciCoreVirtualCircuitBandwidthShapes#provider_service_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#filter DataOciCoreVirtualCircuitBandwidthShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#id DataOciCoreVirtualCircuitBandwidthShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitBandwidthShapesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualCircuitBandwidthShapes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_bandwidth_shapes

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_bandwidth_shapes

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_bandwidth_shapes

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_bandwidth_shapes

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreVirtualCircuitBandwidthShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreVirtualCircuitBandwidthShapes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreVirtualCircuitBandwidthShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualCircuitBandwidthShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList">DataOciCoreVirtualCircuitBandwidthShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.virtualCircuitBandwidthShapes">virtual_circuit_bandwidth_shapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList">DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.providerServiceIdInput">provider_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.providerServiceId">provider_service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.filter"></a>

```python
filter: DataOciCoreVirtualCircuitBandwidthShapesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList">DataOciCoreVirtualCircuitBandwidthShapesFilterList</a>

---

##### `virtual_circuit_bandwidth_shapes`<sup>Required</sup> <a name="virtual_circuit_bandwidth_shapes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.virtualCircuitBandwidthShapes"></a>

```python
virtual_circuit_bandwidth_shapes: DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList">DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitBandwidthShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `provider_service_id_input`<sup>Optional</sup> <a name="provider_service_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.providerServiceIdInput"></a>

```python
provider_service_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `provider_service_id`<sup>Required</sup> <a name="provider_service_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.providerServiceId"></a>

```python
provider_service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualCircuitBandwidthShapesConfig <a name="DataOciCoreVirtualCircuitBandwidthShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_bandwidth_shapes

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  provider_service_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitBandwidthShapesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.providerServiceId">provider_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#provider_service_id DataOciCoreVirtualCircuitBandwidthShapes#provider_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#id DataOciCoreVirtualCircuitBandwidthShapes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `provider_service_id`<sup>Required</sup> <a name="provider_service_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.providerServiceId"></a>

```python
provider_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#provider_service_id DataOciCoreVirtualCircuitBandwidthShapes#provider_service_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitBandwidthShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#filter DataOciCoreVirtualCircuitBandwidthShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#id DataOciCoreVirtualCircuitBandwidthShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreVirtualCircuitBandwidthShapesFilter <a name="DataOciCoreVirtualCircuitBandwidthShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_bandwidth_shapes

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#name DataOciCoreVirtualCircuitBandwidthShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#values DataOciCoreVirtualCircuitBandwidthShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#regex DataOciCoreVirtualCircuitBandwidthShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#name DataOciCoreVirtualCircuitBandwidthShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#values DataOciCoreVirtualCircuitBandwidthShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#regex DataOciCoreVirtualCircuitBandwidthShapes#regex}.

---

### DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes <a name="DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_bandwidth_shapes

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualCircuitBandwidthShapesFilterList <a name="DataOciCoreVirtualCircuitBandwidthShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_bandwidth_shapes

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitBandwidthShapesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>]]

---


### DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference <a name="DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_bandwidth_shapes

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreVirtualCircuitBandwidthShapesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>]

---


### DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList <a name="DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_bandwidth_shapes

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference <a name="DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_bandwidth_shapes

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.bandwidthInMbps">bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes">DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bandwidth_in_mbps`<sup>Required</sup> <a name="bandwidth_in_mbps" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.bandwidthInMbps"></a>

```python
bandwidth_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes">DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes</a>

---



