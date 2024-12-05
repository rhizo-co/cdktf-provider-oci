# `dataOciGoldenGateConnection` Submodule <a name="`dataOciGoldenGateConnection` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateConnection <a name="DataOciGoldenGateConnection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection oci_golden_gate_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection#connection_id DataOciGoldenGateConnection#connection_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.Initializer.parameter.connectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection#connection_id DataOciGoldenGateConnection#connection_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciGoldenGateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnection.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciGoldenGateConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciGoldenGateConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciGoldenGateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accountKey">account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accountKeySecretId">account_key_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.additionalAttributes">additional_attributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList">DataOciGoldenGateConnectionAdditionalAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.authenticationMode">authentication_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.bootstrapServers">bootstrap_servers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList">DataOciGoldenGateConnectionBootstrapServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.clientSecretSecretId">client_secret_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionFactory">connection_factory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionUrl">connection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.consumerProperties">consumer_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.coreSiteXml">core_site_xml</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.doesUseSecretIds">does_use_secret_ids</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.ingressIps">ingress_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList">DataOciGoldenGateConnectionIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.isLockOverride">is_lock_override</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiConnectionFactory">jndi_connection_factory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiInitialContextFactory">jndi_initial_context_factory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiProviderUrl">jndi_provider_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiSecurityCredentials">jndi_security_credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiSecurityCredentialsSecretId">jndi_security_credentials_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiSecurityPrincipal">jndi_security_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStore">key_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStorePassword">key_store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStorePasswordSecretId">key_store_password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStoreSecretId">key_store_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList">DataOciGoldenGateConnectionLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyFile">private_key_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyFileSecretId">private_key_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyPassphrase">private_key_passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyPassphraseSecretId">private_key_passphrase_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.producerProperties">producer_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.publicKeyFingerprint">public_key_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.redisClusterId">redis_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.routingMethod">routing_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sasToken">sas_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sasTokenSecretId">sas_token_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.secretAccessKeySecretId">secret_access_key_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.securityProtocol">security_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.servers">servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.serviceAccountKeyFile">service_account_key_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.serviceAccountKeyFileSecretId">service_account_key_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sessionMode">session_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.shouldUseJndi">should_use_jndi</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.shouldValidateServerCertificate">should_validate_server_certificate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslCa">ssl_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslCert">ssl_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystash">ssl_client_keystash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystashSecretId">ssl_client_keystash_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystoredb">ssl_client_keystoredb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystoredbSecretId">ssl_client_keystoredb_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslCrl">ssl_crl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKey">ssl_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKeyPassword">ssl_key_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKeyPasswordSecretId">ssl_key_password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKeySecretId">ssl_key_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslServerCertificate">ssl_server_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.streamPoolId">stream_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.technologyType">technology_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.triggerRefresh">trigger_refresh</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStore">trust_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStorePassword">trust_store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStorePasswordSecretId">trust_store_password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStoreSecretId">trust_store_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.wallet">wallet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.walletSecretId">wallet_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `account_key`<sup>Required</sup> <a name="account_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accountKey"></a>

```python
account_key: str
```

- *Type:* str

---

##### `account_key_secret_id`<sup>Required</sup> <a name="account_key_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accountKeySecretId"></a>

```python
account_key_secret_id: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `additional_attributes`<sup>Required</sup> <a name="additional_attributes" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.additionalAttributes"></a>

```python
additional_attributes: DataOciGoldenGateConnectionAdditionalAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList">DataOciGoldenGateConnectionAdditionalAttributesList</a>

---

##### `authentication_mode`<sup>Required</sup> <a name="authentication_mode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.authenticationMode"></a>

```python
authentication_mode: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `azure_tenant_id`<sup>Required</sup> <a name="azure_tenant_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.bootstrapServers"></a>

```python
bootstrap_servers: DataOciGoldenGateConnectionBootstrapServersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList">DataOciGoldenGateConnectionBootstrapServersList</a>

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_secret_id`<sup>Required</sup> <a name="client_secret_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.clientSecretSecretId"></a>

```python
client_secret_secret_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_factory`<sup>Required</sup> <a name="connection_factory" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionFactory"></a>

```python
connection_factory: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `connection_url`<sup>Required</sup> <a name="connection_url" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

---

##### `consumer_properties`<sup>Required</sup> <a name="consumer_properties" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.consumerProperties"></a>

```python
consumer_properties: str
```

- *Type:* str

---

##### `core_site_xml`<sup>Required</sup> <a name="core_site_xml" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.coreSiteXml"></a>

```python
core_site_xml: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `does_use_secret_ids`<sup>Required</sup> <a name="does_use_secret_ids" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.doesUseSecretIds"></a>

```python
does_use_secret_ids: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_ips`<sup>Required</sup> <a name="ingress_ips" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.ingressIps"></a>

```python
ingress_ips: DataOciGoldenGateConnectionIngressIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList">DataOciGoldenGateConnectionIngressIpsList</a>

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.isLockOverride"></a>

```python
is_lock_override: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `jndi_connection_factory`<sup>Required</sup> <a name="jndi_connection_factory" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiConnectionFactory"></a>

```python
jndi_connection_factory: str
```

- *Type:* str

---

##### `jndi_initial_context_factory`<sup>Required</sup> <a name="jndi_initial_context_factory" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiInitialContextFactory"></a>

```python
jndi_initial_context_factory: str
```

- *Type:* str

---

##### `jndi_provider_url`<sup>Required</sup> <a name="jndi_provider_url" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiProviderUrl"></a>

```python
jndi_provider_url: str
```

- *Type:* str

---

##### `jndi_security_credentials`<sup>Required</sup> <a name="jndi_security_credentials" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiSecurityCredentials"></a>

```python
jndi_security_credentials: str
```

- *Type:* str

---

##### `jndi_security_credentials_secret_id`<sup>Required</sup> <a name="jndi_security_credentials_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiSecurityCredentialsSecretId"></a>

```python
jndi_security_credentials_secret_id: str
```

- *Type:* str

---

##### `jndi_security_principal`<sup>Required</sup> <a name="jndi_security_principal" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.jndiSecurityPrincipal"></a>

```python
jndi_security_principal: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_store`<sup>Required</sup> <a name="key_store" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStore"></a>

```python
key_store: str
```

- *Type:* str

---

##### `key_store_password`<sup>Required</sup> <a name="key_store_password" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStorePassword"></a>

```python
key_store_password: str
```

- *Type:* str

---

##### `key_store_password_secret_id`<sup>Required</sup> <a name="key_store_password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStorePasswordSecretId"></a>

```python
key_store_password_secret_id: str
```

- *Type:* str

---

##### `key_store_secret_id`<sup>Required</sup> <a name="key_store_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.keyStoreSecretId"></a>

```python
key_store_secret_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.locks"></a>

```python
locks: DataOciGoldenGateConnectionLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList">DataOciGoldenGateConnectionLocksList</a>

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `private_key_file`<sup>Required</sup> <a name="private_key_file" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyFile"></a>

```python
private_key_file: str
```

- *Type:* str

---

##### `private_key_file_secret_id`<sup>Required</sup> <a name="private_key_file_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyFileSecretId"></a>

```python
private_key_file_secret_id: str
```

- *Type:* str

---

##### `private_key_passphrase`<sup>Required</sup> <a name="private_key_passphrase" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyPassphrase"></a>

```python
private_key_passphrase: str
```

- *Type:* str

---

##### `private_key_passphrase_secret_id`<sup>Required</sup> <a name="private_key_passphrase_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.privateKeyPassphraseSecretId"></a>

```python
private_key_passphrase_secret_id: str
```

- *Type:* str

---

##### `producer_properties`<sup>Required</sup> <a name="producer_properties" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.producerProperties"></a>

```python
producer_properties: str
```

- *Type:* str

---

##### `public_key_fingerprint`<sup>Required</sup> <a name="public_key_fingerprint" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.publicKeyFingerprint"></a>

```python
public_key_fingerprint: str
```

- *Type:* str

---

##### `redis_cluster_id`<sup>Required</sup> <a name="redis_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.redisClusterId"></a>

```python
redis_cluster_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `routing_method`<sup>Required</sup> <a name="routing_method" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.routingMethod"></a>

```python
routing_method: str
```

- *Type:* str

---

##### `sas_token`<sup>Required</sup> <a name="sas_token" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sasToken"></a>

```python
sas_token: str
```

- *Type:* str

---

##### `sas_token_secret_id`<sup>Required</sup> <a name="sas_token_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sasTokenSecretId"></a>

```python
sas_token_secret_id: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `secret_access_key_secret_id`<sup>Required</sup> <a name="secret_access_key_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.secretAccessKeySecretId"></a>

```python
secret_access_key_secret_id: str
```

- *Type:* str

---

##### `security_protocol`<sup>Required</sup> <a name="security_protocol" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.securityProtocol"></a>

```python
security_protocol: str
```

- *Type:* str

---

##### `servers`<sup>Required</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.servers"></a>

```python
servers: str
```

- *Type:* str

---

##### `service_account_key_file`<sup>Required</sup> <a name="service_account_key_file" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.serviceAccountKeyFile"></a>

```python
service_account_key_file: str
```

- *Type:* str

---

##### `service_account_key_file_secret_id`<sup>Required</sup> <a name="service_account_key_file_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.serviceAccountKeyFileSecretId"></a>

```python
service_account_key_file_secret_id: str
```

- *Type:* str

---

##### `session_mode`<sup>Required</sup> <a name="session_mode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sessionMode"></a>

```python
session_mode: str
```

- *Type:* str

---

##### `should_use_jndi`<sup>Required</sup> <a name="should_use_jndi" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.shouldUseJndi"></a>

```python
should_use_jndi: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `should_validate_server_certificate`<sup>Required</sup> <a name="should_validate_server_certificate" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.shouldValidateServerCertificate"></a>

```python
should_validate_server_certificate: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ssl_ca`<sup>Required</sup> <a name="ssl_ca" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslCa"></a>

```python
ssl_ca: str
```

- *Type:* str

---

##### `ssl_cert`<sup>Required</sup> <a name="ssl_cert" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslCert"></a>

```python
ssl_cert: str
```

- *Type:* str

---

##### `ssl_client_keystash`<sup>Required</sup> <a name="ssl_client_keystash" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystash"></a>

```python
ssl_client_keystash: str
```

- *Type:* str

---

##### `ssl_client_keystash_secret_id`<sup>Required</sup> <a name="ssl_client_keystash_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystashSecretId"></a>

```python
ssl_client_keystash_secret_id: str
```

- *Type:* str

---

##### `ssl_client_keystoredb`<sup>Required</sup> <a name="ssl_client_keystoredb" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystoredb"></a>

```python
ssl_client_keystoredb: str
```

- *Type:* str

---

##### `ssl_client_keystoredb_secret_id`<sup>Required</sup> <a name="ssl_client_keystoredb_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslClientKeystoredbSecretId"></a>

```python
ssl_client_keystoredb_secret_id: str
```

- *Type:* str

---

##### `ssl_crl`<sup>Required</sup> <a name="ssl_crl" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslCrl"></a>

```python
ssl_crl: str
```

- *Type:* str

---

##### `ssl_key`<sup>Required</sup> <a name="ssl_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKey"></a>

```python
ssl_key: str
```

- *Type:* str

---

##### `ssl_key_password`<sup>Required</sup> <a name="ssl_key_password" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKeyPassword"></a>

```python
ssl_key_password: str
```

- *Type:* str

---

##### `ssl_key_password_secret_id`<sup>Required</sup> <a name="ssl_key_password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKeyPasswordSecretId"></a>

```python
ssl_key_password_secret_id: str
```

- *Type:* str

---

##### `ssl_key_secret_id`<sup>Required</sup> <a name="ssl_key_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslKeySecretId"></a>

```python
ssl_key_secret_id: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `ssl_server_certificate`<sup>Required</sup> <a name="ssl_server_certificate" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.sslServerCertificate"></a>

```python
ssl_server_certificate: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `stream_pool_id`<sup>Required</sup> <a name="stream_pool_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.streamPoolId"></a>

```python
stream_pool_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `technology_type`<sup>Required</sup> <a name="technology_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.technologyType"></a>

```python
technology_type: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `trigger_refresh`<sup>Required</sup> <a name="trigger_refresh" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.triggerRefresh"></a>

```python
trigger_refresh: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `trust_store`<sup>Required</sup> <a name="trust_store" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStore"></a>

```python
trust_store: str
```

- *Type:* str

---

##### `trust_store_password`<sup>Required</sup> <a name="trust_store_password" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStorePassword"></a>

```python
trust_store_password: str
```

- *Type:* str

---

##### `trust_store_password_secret_id`<sup>Required</sup> <a name="trust_store_password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStorePasswordSecretId"></a>

```python
trust_store_password_secret_id: str
```

- *Type:* str

---

##### `trust_store_secret_id`<sup>Required</sup> <a name="trust_store_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.trustStoreSecretId"></a>

```python
trust_store_secret_id: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `wallet`<sup>Required</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.wallet"></a>

```python
wallet: str
```

- *Type:* str

---

##### `wallet_secret_id`<sup>Required</sup> <a name="wallet_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.walletSecretId"></a>

```python
wallet_secret_id: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateConnectionAdditionalAttributes <a name="DataOciGoldenGateConnectionAdditionalAttributes" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributes()
```


### DataOciGoldenGateConnectionBootstrapServers <a name="DataOciGoldenGateConnectionBootstrapServers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServers()
```


### DataOciGoldenGateConnectionConfig <a name="DataOciGoldenGateConnectionConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection#connection_id DataOciGoldenGateConnection#connection_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connection#connection_id DataOciGoldenGateConnection#connection_id}.

---

### DataOciGoldenGateConnectionIngressIps <a name="DataOciGoldenGateConnectionIngressIps" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIps()
```


### DataOciGoldenGateConnectionLocks <a name="DataOciGoldenGateConnectionLocks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateConnectionAdditionalAttributesList <a name="DataOciGoldenGateConnectionAdditionalAttributesList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateConnectionAdditionalAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateConnectionAdditionalAttributesOutputReference <a name="DataOciGoldenGateConnectionAdditionalAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributes">DataOciGoldenGateConnectionAdditionalAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateConnectionAdditionalAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionAdditionalAttributes">DataOciGoldenGateConnectionAdditionalAttributes</a>

---


### DataOciGoldenGateConnectionBootstrapServersList <a name="DataOciGoldenGateConnectionBootstrapServersList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateConnectionBootstrapServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateConnectionBootstrapServersOutputReference <a name="DataOciGoldenGateConnectionBootstrapServersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServers">DataOciGoldenGateConnectionBootstrapServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateConnectionBootstrapServers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionBootstrapServers">DataOciGoldenGateConnectionBootstrapServers</a>

---


### DataOciGoldenGateConnectionIngressIpsList <a name="DataOciGoldenGateConnectionIngressIpsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateConnectionIngressIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateConnectionIngressIpsOutputReference <a name="DataOciGoldenGateConnectionIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.ingressIp">ingress_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIps">DataOciGoldenGateConnectionIngressIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_ip`<sup>Required</sup> <a name="ingress_ip" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.ingressIp"></a>

```python
ingress_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIpsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateConnectionIngressIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionIngressIps">DataOciGoldenGateConnectionIngressIps</a>

---


### DataOciGoldenGateConnectionLocksList <a name="DataOciGoldenGateConnectionLocksList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateConnectionLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateConnectionLocksOutputReference <a name="DataOciGoldenGateConnectionLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_connection

dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocks">DataOciGoldenGateConnectionLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateConnectionLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnection.DataOciGoldenGateConnectionLocks">DataOciGoldenGateConnectionLocks</a>

---



