# `dataOciCoreVirtualCircuit` Submodule <a name="`dataOciCoreVirtualCircuit` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualCircuit <a name="DataOciCoreVirtualCircuit" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit oci_core_virtual_circuit}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  virtual_circuit_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.virtualCircuitId">virtual_circuit_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit#virtual_circuit_id DataOciCoreVirtualCircuit#virtual_circuit_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `virtual_circuit_id`<sup>Required</sup> <a name="virtual_circuit_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.Initializer.parameter.virtualCircuitId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit#virtual_circuit_id DataOciCoreVirtualCircuit#virtual_circuit_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualCircuit resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreVirtualCircuit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreVirtualCircuit to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreVirtualCircuit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualCircuit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bandwidthShapeName">bandwidth_shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpAdminState">bgp_admin_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpIpv6SessionState">bgp_ipv6_session_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpManagement">bgp_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpSessionState">bgp_session_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.crossConnectMappings">cross_connect_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList">DataOciCoreVirtualCircuitCrossConnectMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.customerAsn">customer_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.customerBgpAsn">customer_bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.ipMtu">ip_mtu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.isBfdEnabled">is_bfd_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.isTransportMode">is_transport_mode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.oracleBgpAsn">oracle_bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.providerServiceId">provider_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.providerServiceKeyName">provider_service_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.providerState">provider_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.publicPrefixes">public_prefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList">DataOciCoreVirtualCircuitPublicPrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.referenceComment">reference_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.routingPolicy">routing_policy</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.virtualCircuitRedundancyMetadata">virtual_circuit_redundancy_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList">DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.virtualCircuitIdInput">virtual_circuit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.virtualCircuitId">virtual_circuit_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `bandwidth_shape_name`<sup>Required</sup> <a name="bandwidth_shape_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bandwidthShapeName"></a>

```python
bandwidth_shape_name: str
```

- *Type:* str

---

##### `bgp_admin_state`<sup>Required</sup> <a name="bgp_admin_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpAdminState"></a>

```python
bgp_admin_state: str
```

- *Type:* str

---

##### `bgp_ipv6_session_state`<sup>Required</sup> <a name="bgp_ipv6_session_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpIpv6SessionState"></a>

```python
bgp_ipv6_session_state: str
```

- *Type:* str

---

##### `bgp_management`<sup>Required</sup> <a name="bgp_management" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpManagement"></a>

```python
bgp_management: str
```

- *Type:* str

---

##### `bgp_session_state`<sup>Required</sup> <a name="bgp_session_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.bgpSessionState"></a>

```python
bgp_session_state: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cross_connect_mappings`<sup>Required</sup> <a name="cross_connect_mappings" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.crossConnectMappings"></a>

```python
cross_connect_mappings: DataOciCoreVirtualCircuitCrossConnectMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList">DataOciCoreVirtualCircuitCrossConnectMappingsList</a>

---

##### `customer_asn`<sup>Required</sup> <a name="customer_asn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.customerAsn"></a>

```python
customer_asn: str
```

- *Type:* str

---

##### `customer_bgp_asn`<sup>Required</sup> <a name="customer_bgp_asn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.customerBgpAsn"></a>

```python
customer_bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_mtu`<sup>Required</sup> <a name="ip_mtu" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.ipMtu"></a>

```python
ip_mtu: str
```

- *Type:* str

---

##### `is_bfd_enabled`<sup>Required</sup> <a name="is_bfd_enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.isBfdEnabled"></a>

```python
is_bfd_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_transport_mode`<sup>Required</sup> <a name="is_transport_mode" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.isTransportMode"></a>

```python
is_transport_mode: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `oracle_bgp_asn`<sup>Required</sup> <a name="oracle_bgp_asn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.oracleBgpAsn"></a>

```python
oracle_bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_service_id`<sup>Required</sup> <a name="provider_service_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.providerServiceId"></a>

```python
provider_service_id: str
```

- *Type:* str

---

##### `provider_service_key_name`<sup>Required</sup> <a name="provider_service_key_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.providerServiceKeyName"></a>

```python
provider_service_key_name: str
```

- *Type:* str

---

##### `provider_state`<sup>Required</sup> <a name="provider_state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.providerState"></a>

```python
provider_state: str
```

- *Type:* str

---

##### `public_prefixes`<sup>Required</sup> <a name="public_prefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.publicPrefixes"></a>

```python
public_prefixes: DataOciCoreVirtualCircuitPublicPrefixesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList">DataOciCoreVirtualCircuitPublicPrefixesList</a>

---

##### `reference_comment`<sup>Required</sup> <a name="reference_comment" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.referenceComment"></a>

```python
reference_comment: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `routing_policy`<sup>Required</sup> <a name="routing_policy" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.routingPolicy"></a>

```python
routing_policy: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `virtual_circuit_redundancy_metadata`<sup>Required</sup> <a name="virtual_circuit_redundancy_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.virtualCircuitRedundancyMetadata"></a>

```python
virtual_circuit_redundancy_metadata: DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList">DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList</a>

---

##### `virtual_circuit_id_input`<sup>Optional</sup> <a name="virtual_circuit_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.virtualCircuitIdInput"></a>

```python
virtual_circuit_id_input: str
```

- *Type:* str

---

##### `virtual_circuit_id`<sup>Required</sup> <a name="virtual_circuit_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.virtualCircuitId"></a>

```python
virtual_circuit_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualCircuitConfig <a name="DataOciCoreVirtualCircuitConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  virtual_circuit_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.virtualCircuitId">virtual_circuit_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit#virtual_circuit_id DataOciCoreVirtualCircuit#virtual_circuit_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `virtual_circuit_id`<sup>Required</sup> <a name="virtual_circuit_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitConfig.property.virtualCircuitId"></a>

```python
virtual_circuit_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit#virtual_circuit_id DataOciCoreVirtualCircuit#virtual_circuit_id}.

---

### DataOciCoreVirtualCircuitCrossConnectMappings <a name="DataOciCoreVirtualCircuitCrossConnectMappings" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappings()
```


### DataOciCoreVirtualCircuitPublicPrefixes <a name="DataOciCoreVirtualCircuitPublicPrefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixes()
```


### DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata <a name="DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualCircuitCrossConnectMappingsList <a name="DataOciCoreVirtualCircuitCrossConnectMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference <a name="DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKey">bgp_md5_auth_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId">cross_connect_or_cross_connect_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIp">customer_bgp_peering_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6">customer_bgp_peering_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp">oracle_bgp_peering_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6">oracle_bgp_peering_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappings">DataOciCoreVirtualCircuitCrossConnectMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp_md5_auth_key`<sup>Required</sup> <a name="bgp_md5_auth_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKey"></a>

```python
bgp_md5_auth_key: str
```

- *Type:* str

---

##### `cross_connect_or_cross_connect_group_id`<sup>Required</sup> <a name="cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId"></a>

```python
cross_connect_or_cross_connect_group_id: str
```

- *Type:* str

---

##### `customer_bgp_peering_ip`<sup>Required</sup> <a name="customer_bgp_peering_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIp"></a>

```python
customer_bgp_peering_ip: str
```

- *Type:* str

---

##### `customer_bgp_peering_ipv6`<sup>Required</sup> <a name="customer_bgp_peering_ipv6" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6"></a>

```python
customer_bgp_peering_ipv6: str
```

- *Type:* str

---

##### `oracle_bgp_peering_ip`<sup>Required</sup> <a name="oracle_bgp_peering_ip" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp"></a>

```python
oracle_bgp_peering_ip: str
```

- *Type:* str

---

##### `oracle_bgp_peering_ipv6`<sup>Required</sup> <a name="oracle_bgp_peering_ipv6" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6"></a>

```python
oracle_bgp_peering_ipv6: str
```

- *Type:* str

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVirtualCircuitCrossConnectMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitCrossConnectMappings">DataOciCoreVirtualCircuitCrossConnectMappings</a>

---


### DataOciCoreVirtualCircuitPublicPrefixesList <a name="DataOciCoreVirtualCircuitPublicPrefixesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVirtualCircuitPublicPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVirtualCircuitPublicPrefixesOutputReference <a name="DataOciCoreVirtualCircuitPublicPrefixesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixes">DataOciCoreVirtualCircuitPublicPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVirtualCircuitPublicPrefixes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitPublicPrefixes">DataOciCoreVirtualCircuitPublicPrefixes</a>

---


### DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList <a name="DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference <a name="DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_virtual_circuit

dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel">configured_redundancy_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus">ipv4_bgp_session_redundancy_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus">ipv6_bgp_session_redundancy_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata">DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configured_redundancy_level`<sup>Required</sup> <a name="configured_redundancy_level" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel"></a>

```python
configured_redundancy_level: str
```

- *Type:* str

---

##### `ipv4_bgp_session_redundancy_status`<sup>Required</sup> <a name="ipv4_bgp_session_redundancy_status" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus"></a>

```python
ipv4_bgp_session_redundancy_status: str
```

- *Type:* str

---

##### `ipv6_bgp_session_redundancy_status`<sup>Required</sup> <a name="ipv6_bgp_session_redundancy_status" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus"></a>

```python
ipv6_bgp_session_redundancy_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuit.DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata">DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata</a>

---



