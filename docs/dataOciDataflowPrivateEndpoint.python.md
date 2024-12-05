# `dataOciDataflowPrivateEndpoint` Submodule <a name="`dataOciDataflowPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataflowPrivateEndpoint <a name="DataOciDataflowPrivateEndpoint" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoint oci_dataflow_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoint

dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  private_endpoint_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoint#private_endpoint_id DataOciDataflowPrivateEndpoint#private_endpoint_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.Initializer.parameter.privateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoint#private_endpoint_id DataOciDataflowPrivateEndpoint#private_endpoint_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataflowPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoint

dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoint

dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoint

dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoint

dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataflowPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataflowPrivateEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataflowPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataflowPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.dnsZones">dns_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.maxHostCount">max_host_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.ownerPrincipalId">owner_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.ownerUserName">owner_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.scanDetails">scan_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList">DataOciDataflowPrivateEndpointScanDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.privateEndpointIdInput">private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns_zones`<sup>Required</sup> <a name="dns_zones" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.dnsZones"></a>

```python
dns_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `max_host_count`<sup>Required</sup> <a name="max_host_count" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.maxHostCount"></a>

```python
max_host_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `owner_principal_id`<sup>Required</sup> <a name="owner_principal_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.ownerPrincipalId"></a>

```python
owner_principal_id: str
```

- *Type:* str

---

##### `owner_user_name`<sup>Required</sup> <a name="owner_user_name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.ownerUserName"></a>

```python
owner_user_name: str
```

- *Type:* str

---

##### `scan_details`<sup>Required</sup> <a name="scan_details" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.scanDetails"></a>

```python
scan_details: DataOciDataflowPrivateEndpointScanDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList">DataOciDataflowPrivateEndpointScanDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `private_endpoint_id_input`<sup>Optional</sup> <a name="private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.privateEndpointIdInput"></a>

```python
private_endpoint_id_input: str
```

- *Type:* str

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataflowPrivateEndpointConfig <a name="DataOciDataflowPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoint

dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  private_endpoint_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoint#private_endpoint_id DataOciDataflowPrivateEndpoint#private_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointConfig.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoint#private_endpoint_id DataOciDataflowPrivateEndpoint#private_endpoint_id}.

---

### DataOciDataflowPrivateEndpointScanDetails <a name="DataOciDataflowPrivateEndpointScanDetails" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoint

dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataflowPrivateEndpointScanDetailsList <a name="DataOciDataflowPrivateEndpointScanDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoint

dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataflowPrivateEndpointScanDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataflowPrivateEndpointScanDetailsOutputReference <a name="DataOciDataflowPrivateEndpointScanDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataflow_private_endpoint

dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetails">DataOciDataflowPrivateEndpointScanDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataflowPrivateEndpointScanDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoint.DataOciDataflowPrivateEndpointScanDetails">DataOciDataflowPrivateEndpointScanDetails</a>

---


