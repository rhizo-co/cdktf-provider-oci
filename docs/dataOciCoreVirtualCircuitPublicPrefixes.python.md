# `dataOciCoreVirtualCircuitPublicPrefixes` Submodule <a name="`dataOciCoreVirtualCircuitPublicPrefixes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualCircuitPublicPrefixesA <a name="DataOciCoreVirtualCircuitPublicPrefixesA" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes oci_core_virtual_circuit_public_prefixes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_public_prefixes

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitPublicPrefixesFilter]] = None,
  id: str = None,
  verification_state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.virtualCircuitId">virtual_circuit_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#virtual_circuit_id DataOciCoreVirtualCircuitPublicPrefixesA#virtual_circuit_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#id DataOciCoreVirtualCircuitPublicPrefixesA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.verificationState">verification_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#verification_state DataOciCoreVirtualCircuitPublicPrefixesA#verification_state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `virtual_circuit_id`<sup>Required</sup> <a name="virtual_circuit_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.virtualCircuitId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#virtual_circuit_id DataOciCoreVirtualCircuitPublicPrefixesA#virtual_circuit_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#filter DataOciCoreVirtualCircuitPublicPrefixesA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#id DataOciCoreVirtualCircuitPublicPrefixesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `verification_state`<sup>Optional</sup> <a name="verification_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.verificationState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#verification_state DataOciCoreVirtualCircuitPublicPrefixesA#verification_state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetVerificationState">reset_verification_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitPublicPrefixesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_verification_state` <a name="reset_verification_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetVerificationState"></a>

```python
def reset_verification_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualCircuitPublicPrefixesA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_public_prefixes

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_public_prefixes

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_public_prefixes

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_public_prefixes

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreVirtualCircuitPublicPrefixesA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreVirtualCircuitPublicPrefixesA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreVirtualCircuitPublicPrefixesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualCircuitPublicPrefixesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList">DataOciCoreVirtualCircuitPublicPrefixesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitPublicPrefixes">virtual_circuit_public_prefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList">DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.verificationStateInput">verification_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitIdInput">virtual_circuit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.verificationState">verification_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitId">virtual_circuit_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.filter"></a>

```python
filter: DataOciCoreVirtualCircuitPublicPrefixesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList">DataOciCoreVirtualCircuitPublicPrefixesFilterList</a>

---

##### `virtual_circuit_public_prefixes`<sup>Required</sup> <a name="virtual_circuit_public_prefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitPublicPrefixes"></a>

```python
virtual_circuit_public_prefixes: DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList">DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitPublicPrefixesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `verification_state_input`<sup>Optional</sup> <a name="verification_state_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.verificationStateInput"></a>

```python
verification_state_input: str
```

- *Type:* str

---

##### `virtual_circuit_id_input`<sup>Optional</sup> <a name="virtual_circuit_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitIdInput"></a>

```python
virtual_circuit_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `verification_state`<sup>Required</sup> <a name="verification_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.verificationState"></a>

```python
verification_state: str
```

- *Type:* str

---

##### `virtual_circuit_id`<sup>Required</sup> <a name="virtual_circuit_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitId"></a>

```python
virtual_circuit_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualCircuitPublicPrefixesAConfig <a name="DataOciCoreVirtualCircuitPublicPrefixesAConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_public_prefixes

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  virtual_circuit_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitPublicPrefixesFilter]] = None,
  id: str = None,
  verification_state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.virtualCircuitId">virtual_circuit_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#virtual_circuit_id DataOciCoreVirtualCircuitPublicPrefixesA#virtual_circuit_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#id DataOciCoreVirtualCircuitPublicPrefixesA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.verificationState">verification_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#verification_state DataOciCoreVirtualCircuitPublicPrefixesA#verification_state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `virtual_circuit_id`<sup>Required</sup> <a name="virtual_circuit_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.virtualCircuitId"></a>

```python
virtual_circuit_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#virtual_circuit_id DataOciCoreVirtualCircuitPublicPrefixesA#virtual_circuit_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitPublicPrefixesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#filter DataOciCoreVirtualCircuitPublicPrefixesA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#id DataOciCoreVirtualCircuitPublicPrefixesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `verification_state`<sup>Optional</sup> <a name="verification_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.verificationState"></a>

```python
verification_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#verification_state DataOciCoreVirtualCircuitPublicPrefixesA#verification_state}.

---

### DataOciCoreVirtualCircuitPublicPrefixesFilter <a name="DataOciCoreVirtualCircuitPublicPrefixesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_public_prefixes

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#name DataOciCoreVirtualCircuitPublicPrefixesA#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#values DataOciCoreVirtualCircuitPublicPrefixesA#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#regex DataOciCoreVirtualCircuitPublicPrefixesA#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#name DataOciCoreVirtualCircuitPublicPrefixesA#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#values DataOciCoreVirtualCircuitPublicPrefixesA#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#regex DataOciCoreVirtualCircuitPublicPrefixesA#regex}.

---

### DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes <a name="DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_public_prefixes

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualCircuitPublicPrefixesFilterList <a name="DataOciCoreVirtualCircuitPublicPrefixesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_public_prefixes

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreVirtualCircuitPublicPrefixesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>]]

---


### DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference <a name="DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_public_prefixes

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreVirtualCircuitPublicPrefixesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>]

---


### DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList <a name="DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_public_prefixes

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference <a name="DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit_public_prefixes

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.verificationState">verification_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes">DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `verification_state`<sup>Required</sup> <a name="verification_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.verificationState"></a>

```python
verification_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes">DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes</a>

---



