# `dataOciGenerativeAiAgentAgentEndpoints` Submodule <a name="`dataOciGenerativeAiAgentAgentEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentAgentEndpoints <a name="DataOciGenerativeAiAgentAgentEndpoints" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints oci_generative_ai_agent_agent_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_id: str = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciGenerativeAiAgentAgentEndpointsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#agent_id DataOciGenerativeAiAgentAgentEndpoints#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#compartment_id DataOciGenerativeAiAgentAgentEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#display_name DataOciGenerativeAiAgentAgentEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter">DataOciGenerativeAiAgentAgentEndpointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#id DataOciGenerativeAiAgentAgentEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#state DataOciGenerativeAiAgentAgentEndpoints#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_id`<sup>Optional</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.agentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#agent_id DataOciGenerativeAiAgentAgentEndpoints#agent_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#compartment_id DataOciGenerativeAiAgentAgentEndpoints#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#display_name DataOciGenerativeAiAgentAgentEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter">DataOciGenerativeAiAgentAgentEndpointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#filter DataOciGenerativeAiAgentAgentEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#id DataOciGenerativeAiAgentAgentEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#state DataOciGenerativeAiAgentAgentEndpoints#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetAgentId">reset_agent_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciGenerativeAiAgentAgentEndpointsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter">DataOciGenerativeAiAgentAgentEndpointsFilter</a>]]

---

##### `reset_agent_id` <a name="reset_agent_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetAgentId"></a>

```python
def reset_agent_id() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentAgentEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentAgentEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciGenerativeAiAgentAgentEndpoints to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciGenerativeAiAgentAgentEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentAgentEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.agentEndpointCollection">agent_endpoint_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList">DataOciGenerativeAiAgentAgentEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter">DataOciGenerativeAiAgentAgentEndpointsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `agent_endpoint_collection`<sup>Required</sup> <a name="agent_endpoint_collection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.agentEndpointCollection"></a>

```python
agent_endpoint_collection: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.filter"></a>

```python
filter: DataOciGenerativeAiAgentAgentEndpointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList">DataOciGenerativeAiAgentAgentEndpointsFilterList</a>

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciGenerativeAiAgentAgentEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter">DataOciGenerativeAiAgentAgentEndpointsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpoints.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection()
```


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems()
```


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig()
```


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig()
```


### DataOciGenerativeAiAgentAgentEndpointsConfig <a name="DataOciGenerativeAiAgentAgentEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_id: str = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciGenerativeAiAgentAgentEndpointsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#agent_id DataOciGenerativeAiAgentAgentEndpoints#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#compartment_id DataOciGenerativeAiAgentAgentEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#display_name DataOciGenerativeAiAgentAgentEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter">DataOciGenerativeAiAgentAgentEndpointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#id DataOciGenerativeAiAgentAgentEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#state DataOciGenerativeAiAgentAgentEndpoints#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_id`<sup>Optional</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#agent_id DataOciGenerativeAiAgentAgentEndpoints#agent_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#compartment_id DataOciGenerativeAiAgentAgentEndpoints#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#display_name DataOciGenerativeAiAgentAgentEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciGenerativeAiAgentAgentEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter">DataOciGenerativeAiAgentAgentEndpointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#filter DataOciGenerativeAiAgentAgentEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#id DataOciGenerativeAiAgentAgentEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#state DataOciGenerativeAiAgentAgentEndpoints#state}.

---

### DataOciGenerativeAiAgentAgentEndpointsFilter <a name="DataOciGenerativeAiAgentAgentEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#name DataOciGenerativeAiAgentAgentEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#values DataOciGenerativeAiAgentAgentEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#regex DataOciGenerativeAiAgentAgentEndpoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#name DataOciGenerativeAiAgentAgentEndpoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#values DataOciGenerativeAiAgentAgentEndpoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_agent_endpoints#regex DataOciGenerativeAiAgentAgentEndpoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.shouldEnableOnInput">should_enable_on_input</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.shouldEnableOnOutput">should_enable_on_output</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `should_enable_on_input`<sup>Required</sup> <a name="should_enable_on_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.shouldEnableOnInput"></a>

```python
should_enable_on_input: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `should_enable_on_output`<sup>Required</sup> <a name="should_enable_on_output" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.shouldEnableOnOutput"></a>

```python
should_enable_on_output: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig</a>

---


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.contentModerationConfig">content_moderation_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.sessionConfig">session_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.shouldEnableCitation">should_enable_citation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.shouldEnableSession">should_enable_session</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.shouldEnableTrace">should_enable_trace</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `content_moderation_config`<sup>Required</sup> <a name="content_moderation_config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.contentModerationConfig"></a>

```python
content_moderation_config: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `session_config`<sup>Required</sup> <a name="session_config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.sessionConfig"></a>

```python
session_config: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList</a>

---

##### `should_enable_citation`<sup>Required</sup> <a name="should_enable_citation" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.shouldEnableCitation"></a>

```python
should_enable_citation: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `should_enable_session`<sup>Required</sup> <a name="should_enable_session" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.shouldEnableSession"></a>

```python
should_enable_session: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `should_enable_trace`<sup>Required</sup> <a name="should_enable_trace" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.shouldEnableTrace"></a>

```python
should_enable_trace: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems</a>

---


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.idleTimeoutInSeconds">idle_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_timeout_in_seconds`<sup>Required</sup> <a name="idle_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.idleTimeoutInSeconds"></a>

```python
idle_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig</a>

---


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference <a name="DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.items"></a>

```python
items: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection">DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection</a>

---


### DataOciGenerativeAiAgentAgentEndpointsFilterList <a name="DataOciGenerativeAiAgentAgentEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter">DataOciGenerativeAiAgentAgentEndpointsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciGenerativeAiAgentAgentEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter">DataOciGenerativeAiAgentAgentEndpointsFilter</a>]]

---


### DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference <a name="DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_agent_endpoints

dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter">DataOciGenerativeAiAgentAgentEndpointsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciGenerativeAiAgentAgentEndpointsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentAgentEndpoints.DataOciGenerativeAiAgentAgentEndpointsFilter">DataOciGenerativeAiAgentAgentEndpointsFilter</a>]

---



