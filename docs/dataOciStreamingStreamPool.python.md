# `dataOciStreamingStreamPool` Submodule <a name="`dataOciStreamingStreamPool` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStreamingStreamPool <a name="DataOciStreamingStreamPool" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_stream_pool oci_streaming_stream_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stream_pool_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.streamPoolId">stream_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_stream_pool#stream_pool_id DataOciStreamingStreamPool#stream_pool_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stream_pool_id`<sup>Required</sup> <a name="stream_pool_id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.Initializer.parameter.streamPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_stream_pool#stream_pool_id DataOciStreamingStreamPool#stream_pool_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciStreamingStreamPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPool.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciStreamingStreamPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciStreamingStreamPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciStreamingStreamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_stream_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStreamingStreamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.customEncryptionKey">custom_encryption_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList">DataOciStreamingStreamPoolCustomEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.endpointFqdn">endpoint_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.isPrivate">is_private</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.kafkaSettings">kafka_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList">DataOciStreamingStreamPoolKafkaSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.lifecycleStateDetails">lifecycle_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.privateEndpointSettings">private_endpoint_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList">DataOciStreamingStreamPoolPrivateEndpointSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.streamPoolIdInput">stream_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.streamPoolId">stream_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `custom_encryption_key`<sup>Required</sup> <a name="custom_encryption_key" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.customEncryptionKey"></a>

```python
custom_encryption_key: DataOciStreamingStreamPoolCustomEncryptionKeyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList">DataOciStreamingStreamPoolCustomEncryptionKeyList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `endpoint_fqdn`<sup>Required</sup> <a name="endpoint_fqdn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.endpointFqdn"></a>

```python
endpoint_fqdn: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_private`<sup>Required</sup> <a name="is_private" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.isPrivate"></a>

```python
is_private: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kafka_settings`<sup>Required</sup> <a name="kafka_settings" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.kafkaSettings"></a>

```python
kafka_settings: DataOciStreamingStreamPoolKafkaSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList">DataOciStreamingStreamPoolKafkaSettingsList</a>

---

##### `lifecycle_state_details`<sup>Required</sup> <a name="lifecycle_state_details" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.lifecycleStateDetails"></a>

```python
lifecycle_state_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_endpoint_settings`<sup>Required</sup> <a name="private_endpoint_settings" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.privateEndpointSettings"></a>

```python
private_endpoint_settings: DataOciStreamingStreamPoolPrivateEndpointSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList">DataOciStreamingStreamPoolPrivateEndpointSettingsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `stream_pool_id_input`<sup>Optional</sup> <a name="stream_pool_id_input" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.streamPoolIdInput"></a>

```python
stream_pool_id_input: str
```

- *Type:* str

---

##### `stream_pool_id`<sup>Required</sup> <a name="stream_pool_id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.streamPoolId"></a>

```python
stream_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStreamingStreamPoolConfig <a name="DataOciStreamingStreamPoolConfig" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stream_pool_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.streamPoolId">stream_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_stream_pool#stream_pool_id DataOciStreamingStreamPool#stream_pool_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stream_pool_id`<sup>Required</sup> <a name="stream_pool_id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolConfig.property.streamPoolId"></a>

```python
stream_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/streaming_stream_pool#stream_pool_id DataOciStreamingStreamPool#stream_pool_id}.

---

### DataOciStreamingStreamPoolCustomEncryptionKey <a name="DataOciStreamingStreamPoolCustomEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKey()
```


### DataOciStreamingStreamPoolKafkaSettings <a name="DataOciStreamingStreamPoolKafkaSettings" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettings()
```


### DataOciStreamingStreamPoolPrivateEndpointSettings <a name="DataOciStreamingStreamPoolPrivateEndpointSettings" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStreamingStreamPoolCustomEncryptionKeyList <a name="DataOciStreamingStreamPoolCustomEncryptionKeyList" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference <a name="DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.keyState">key_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKey">DataOciStreamingStreamPoolCustomEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_state`<sup>Required</sup> <a name="key_state" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.keyState"></a>

```python
key_state: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStreamingStreamPoolCustomEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolCustomEncryptionKey">DataOciStreamingStreamPoolCustomEncryptionKey</a>

---


### DataOciStreamingStreamPoolKafkaSettingsList <a name="DataOciStreamingStreamPoolKafkaSettingsList" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStreamingStreamPoolKafkaSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStreamingStreamPoolKafkaSettingsOutputReference <a name="DataOciStreamingStreamPoolKafkaSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnable">auto_create_topics_enable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.bootstrapServers">bootstrap_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHours">log_retention_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.numPartitions">num_partitions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettings">DataOciStreamingStreamPoolKafkaSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_create_topics_enable`<sup>Required</sup> <a name="auto_create_topics_enable" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnable"></a>

```python
auto_create_topics_enable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.bootstrapServers"></a>

```python
bootstrap_servers: str
```

- *Type:* str

---

##### `log_retention_hours`<sup>Required</sup> <a name="log_retention_hours" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHours"></a>

```python
log_retention_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_partitions`<sup>Required</sup> <a name="num_partitions" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.numPartitions"></a>

```python
num_partitions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStreamingStreamPoolKafkaSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolKafkaSettings">DataOciStreamingStreamPoolKafkaSettings</a>

---


### DataOciStreamingStreamPoolPrivateEndpointSettingsList <a name="DataOciStreamingStreamPoolPrivateEndpointSettingsList" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference <a name="DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_streaming_stream_pool

dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettings">DataOciStreamingStreamPoolPrivateEndpointSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStreamingStreamPoolPrivateEndpointSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStreamingStreamPool.DataOciStreamingStreamPoolPrivateEndpointSettings">DataOciStreamingStreamPoolPrivateEndpointSettings</a>

---



