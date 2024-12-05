# `dataOciCoreVirtualCircuitAssociatedTunnels` Submodule <a name="`dataOciCoreVirtualCircuitAssociatedTunnels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualCircuitAssociatedTunnels <a name="DataOciCoreVirtualCircuitAssociatedTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels oci_core_virtual_circuit_associated_tunnels}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_associated_tunnels

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  virtual_circuit_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitAssociatedTunnelsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.virtualCircuitId">virtual_circuit_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#virtual_circuit_id DataOciCoreVirtualCircuitAssociatedTunnels#virtual_circuit_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#id DataOciCoreVirtualCircuitAssociatedTunnels#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `virtual_circuit_id`<sup>Required</sup> <a name="virtual_circuit_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.virtualCircuitId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#virtual_circuit_id DataOciCoreVirtualCircuitAssociatedTunnels#virtual_circuit_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#filter DataOciCoreVirtualCircuitAssociatedTunnels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#id DataOciCoreVirtualCircuitAssociatedTunnels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitAssociatedTunnelsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualCircuitAssociatedTunnels resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_associated_tunnels

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_associated_tunnels

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_associated_tunnels

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_associated_tunnels

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreVirtualCircuitAssociatedTunnels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreVirtualCircuitAssociatedTunnels to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreVirtualCircuitAssociatedTunnels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualCircuitAssociatedTunnels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList">DataOciCoreVirtualCircuitAssociatedTunnelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitAssociatedTunnelDetails">virtual_circuit_associated_tunnel_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitIdInput">virtual_circuit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitId">virtual_circuit_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filter"></a>

```python
filter: DataOciCoreVirtualCircuitAssociatedTunnelsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList">DataOciCoreVirtualCircuitAssociatedTunnelsFilterList</a>

---

##### `virtual_circuit_associated_tunnel_details`<sup>Required</sup> <a name="virtual_circuit_associated_tunnel_details" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitAssociatedTunnelDetails"></a>

```python
virtual_circuit_associated_tunnel_details: DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitAssociatedTunnelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `virtual_circuit_id_input`<sup>Optional</sup> <a name="virtual_circuit_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitIdInput"></a>

```python
virtual_circuit_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `virtual_circuit_id`<sup>Required</sup> <a name="virtual_circuit_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitId"></a>

```python
virtual_circuit_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualCircuitAssociatedTunnelsConfig <a name="DataOciCoreVirtualCircuitAssociatedTunnelsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_associated_tunnels

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  virtual_circuit_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitAssociatedTunnelsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.virtualCircuitId">virtual_circuit_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#virtual_circuit_id DataOciCoreVirtualCircuitAssociatedTunnels#virtual_circuit_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#id DataOciCoreVirtualCircuitAssociatedTunnels#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `virtual_circuit_id`<sup>Required</sup> <a name="virtual_circuit_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.virtualCircuitId"></a>

```python
virtual_circuit_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#virtual_circuit_id DataOciCoreVirtualCircuitAssociatedTunnels#virtual_circuit_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitAssociatedTunnelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#filter DataOciCoreVirtualCircuitAssociatedTunnels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#id DataOciCoreVirtualCircuitAssociatedTunnels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreVirtualCircuitAssociatedTunnelsFilter <a name="DataOciCoreVirtualCircuitAssociatedTunnelsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_associated_tunnels

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#name DataOciCoreVirtualCircuitAssociatedTunnels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#values DataOciCoreVirtualCircuitAssociatedTunnels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#regex DataOciCoreVirtualCircuitAssociatedTunnels#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#name DataOciCoreVirtualCircuitAssociatedTunnels#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#values DataOciCoreVirtualCircuitAssociatedTunnels#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#regex DataOciCoreVirtualCircuitAssociatedTunnels#regex}.

---

### DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails <a name="DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_associated_tunnels

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualCircuitAssociatedTunnelsFilterList <a name="DataOciCoreVirtualCircuitAssociatedTunnelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_associated_tunnels

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitAssociatedTunnelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>]]

---


### DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference <a name="DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_associated_tunnels

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreVirtualCircuitAssociatedTunnelsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>]

---


### DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList <a name="DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_associated_tunnels

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference <a name="DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_associated_tunnels

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.ipsecConnectionId">ipsec_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelType">tunnel_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipsec_connection_id`<sup>Required</sup> <a name="ipsec_connection_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.ipsecConnectionId"></a>

```python
ipsec_connection_id: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

##### `tunnel_type`<sup>Required</sup> <a name="tunnel_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelType"></a>

```python
tunnel_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails</a>

---



