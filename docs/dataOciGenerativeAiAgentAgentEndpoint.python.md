# `dataOciGenerativeAiAgentAgentEndpoint` Submodule <a name="`dataOciGenerativeAiAgentAgentEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentAgentEndpoint <a name="DataOciGenerativeAiAgentAgentEndpoint" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoint oci_generative_ai_agent_agent_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoint

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_endpoint_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.agentEndpointId">agent_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoint#agent_endpoint_id DataOciGenerativeAiAgentAgentEndpoint#agent_endpoint_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_endpoint_id`<sup>Required</sup> <a name="agent_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.Initializer.parameter.agentEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoint#agent_endpoint_id DataOciGenerativeAiAgentAgentEndpoint#agent_endpoint_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentAgentEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoint

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoint

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoint

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoint

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentAgentEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciGenerativeAiAgentAgentEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciGenerativeAiAgentAgentEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentAgentEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.contentModerationConfig">content_moderation_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList">DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.sessionConfig">session_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList">DataOciGenerativeAiAgentAgentEndpointSessionConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.shouldEnableCitation">should_enable_citation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.shouldEnableSession">should_enable_session</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.shouldEnableTrace">should_enable_trace</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.agentEndpointIdInput">agent_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.agentEndpointId">agent_endpoint_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `content_moderation_config`<sup>Required</sup> <a name="content_moderation_config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.contentModerationConfig"></a>

```python
content_moderation_config: DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList">DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `session_config`<sup>Required</sup> <a name="session_config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.sessionConfig"></a>

```python
session_config: DataOciGenerativeAiAgentAgentEndpointSessionConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList">DataOciGenerativeAiAgentAgentEndpointSessionConfigList</a>

---

##### `should_enable_citation`<sup>Required</sup> <a name="should_enable_citation" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.shouldEnableCitation"></a>

```python
should_enable_citation: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `should_enable_session`<sup>Required</sup> <a name="should_enable_session" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.shouldEnableSession"></a>

```python
should_enable_session: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `should_enable_trace`<sup>Required</sup> <a name="should_enable_trace" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.shouldEnableTrace"></a>

```python
should_enable_trace: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `agent_endpoint_id_input`<sup>Optional</sup> <a name="agent_endpoint_id_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.agentEndpointIdInput"></a>

```python
agent_endpoint_id_input: str
```

- *Type:* str

---

##### `agent_endpoint_id`<sup>Required</sup> <a name="agent_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.agentEndpointId"></a>

```python
agent_endpoint_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentAgentEndpointConfig <a name="DataOciGenerativeAiAgentAgentEndpointConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoint

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_endpoint_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.agentEndpointId">agent_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoint#agent_endpoint_id DataOciGenerativeAiAgentAgentEndpoint#agent_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_endpoint_id`<sup>Required</sup> <a name="agent_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointConfig.property.agentEndpointId"></a>

```python
agent_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoint#agent_endpoint_id DataOciGenerativeAiAgentAgentEndpoint#agent_endpoint_id}.

---

### DataOciGenerativeAiAgentAgentEndpointContentModerationConfig <a name="DataOciGenerativeAiAgentAgentEndpointContentModerationConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoint

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfig()
```


### DataOciGenerativeAiAgentAgentEndpointSessionConfig <a name="DataOciGenerativeAiAgentAgentEndpointSessionConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoint

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList <a name="DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoint

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference <a name="DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoint

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInput">should_enable_on_input</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutput">should_enable_on_output</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfig">DataOciGenerativeAiAgentAgentEndpointContentModerationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `should_enable_on_input`<sup>Required</sup> <a name="should_enable_on_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInput"></a>

```python
should_enable_on_input: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `should_enable_on_output`<sup>Required</sup> <a name="should_enable_on_output" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutput"></a>

```python
should_enable_on_output: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGenerativeAiAgentAgentEndpointContentModerationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointContentModerationConfig">DataOciGenerativeAiAgentAgentEndpointContentModerationConfig</a>

---


### DataOciGenerativeAiAgentAgentEndpointSessionConfigList <a name="DataOciGenerativeAiAgentAgentEndpointSessionConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoint

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference <a name="DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoint

dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSeconds">idle_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfig">DataOciGenerativeAiAgentAgentEndpointSessionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_timeout_in_seconds`<sup>Required</sup> <a name="idle_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSeconds"></a>

```python
idle_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGenerativeAiAgentAgentEndpointSessionConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoint.DataOciGenerativeAiAgentAgentEndpointSessionConfig">DataOciGenerativeAiAgentAgentEndpointSessionConfig</a>

---



