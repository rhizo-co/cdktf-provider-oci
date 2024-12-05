# `dataOciGenerativeAiAgentKnowledgeBases` Submodule <a name="`dataOciGenerativeAiAgentKnowledgeBases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentKnowledgeBases <a name="DataOciGenerativeAiAgentKnowledgeBases" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases oci_generative_ai_agent_knowledge_bases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciGenerativeAiAgentKnowledgeBasesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#compartment_id DataOciGenerativeAiAgentKnowledgeBases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#display_name DataOciGenerativeAiAgentKnowledgeBases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#id DataOciGenerativeAiAgentKnowledgeBases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#state DataOciGenerativeAiAgentKnowledgeBases#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#compartment_id DataOciGenerativeAiAgentKnowledgeBases#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#display_name DataOciGenerativeAiAgentKnowledgeBases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#filter DataOciGenerativeAiAgentKnowledgeBases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#id DataOciGenerativeAiAgentKnowledgeBases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#state DataOciGenerativeAiAgentKnowledgeBases#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciGenerativeAiAgentKnowledgeBasesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentKnowledgeBases resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentKnowledgeBases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciGenerativeAiAgentKnowledgeBases to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciGenerativeAiAgentKnowledgeBases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentKnowledgeBases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList">DataOciGenerativeAiAgentKnowledgeBasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.knowledgeBaseCollection">knowledge_base_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filter"></a>

```python
filter: DataOciGenerativeAiAgentKnowledgeBasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList">DataOciGenerativeAiAgentKnowledgeBasesFilterList</a>

---

##### `knowledge_base_collection`<sup>Required</sup> <a name="knowledge_base_collection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.knowledgeBaseCollection"></a>

```python
knowledge_base_collection: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciGenerativeAiAgentKnowledgeBasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentKnowledgeBasesConfig <a name="DataOciGenerativeAiAgentKnowledgeBasesConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciGenerativeAiAgentKnowledgeBasesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#compartment_id DataOciGenerativeAiAgentKnowledgeBases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#display_name DataOciGenerativeAiAgentKnowledgeBases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#id DataOciGenerativeAiAgentKnowledgeBases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#state DataOciGenerativeAiAgentKnowledgeBases#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#compartment_id DataOciGenerativeAiAgentKnowledgeBases#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#display_name DataOciGenerativeAiAgentKnowledgeBases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciGenerativeAiAgentKnowledgeBasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#filter DataOciGenerativeAiAgentKnowledgeBases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#id DataOciGenerativeAiAgentKnowledgeBases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#state DataOciGenerativeAiAgentKnowledgeBases#state}.

---

### DataOciGenerativeAiAgentKnowledgeBasesFilter <a name="DataOciGenerativeAiAgentKnowledgeBasesFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#name DataOciGenerativeAiAgentKnowledgeBases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#values DataOciGenerativeAiAgentKnowledgeBases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#regex DataOciGenerativeAiAgentKnowledgeBases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#name DataOciGenerativeAiAgentKnowledgeBases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#values DataOciGenerativeAiAgentKnowledgeBases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#regex DataOciGenerativeAiAgentKnowledgeBases#regex}.

---

### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection()
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems()
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig()
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection()
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions()
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes()
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema()
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiAgentKnowledgeBasesFilterList <a name="DataOciGenerativeAiAgentKnowledgeBasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciGenerativeAiAgentKnowledgeBasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>]]

---


### DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciGenerativeAiAgentKnowledgeBasesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter">DataOciGenerativeAiAgentKnowledgeBasesFilter</a>]

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.schema">schema</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.schema"></a>

```python
schema: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.bodyKey">body_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.embeddingBodyKey">embedding_body_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.titleKey">title_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.urlKey">url_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body_key`<sup>Required</sup> <a name="body_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.bodyKey"></a>

```python
body_key: str
```

- *Type:* str

---

##### `embedding_body_key`<sup>Required</sup> <a name="embedding_body_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.embeddingBodyKey"></a>

```python
embedding_body_key: str
```

- *Type:* str

---

##### `title_key`<sup>Required</sup> <a name="title_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.titleKey"></a>

```python
title_key: str
```

- *Type:* str

---

##### `url_key`<sup>Required</sup> <a name="url_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.urlKey"></a>

```python
url_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseConnection">database_connection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseFunctions">database_functions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexConfigType">index_config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexes">indexes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.secretDetail">secret_detail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.shouldEnableHybridSearch">should_enable_hybrid_search</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `database_connection`<sup>Required</sup> <a name="database_connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseConnection"></a>

```python
database_connection: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList</a>

---

##### `database_functions`<sup>Required</sup> <a name="database_functions" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseFunctions"></a>

```python
database_functions: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList</a>

---

##### `index_config_type`<sup>Required</sup> <a name="index_config_type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexConfigType"></a>

```python
index_config_type: str
```

- *Type:* str

---

##### `indexes`<sup>Required</sup> <a name="indexes" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexes"></a>

```python
indexes: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList</a>

---

##### `secret_detail`<sup>Required</sup> <a name="secret_detail" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.secretDetail"></a>

```python
secret_detail: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList</a>

---

##### `should_enable_hybrid_search`<sup>Required</sup> <a name="should_enable_hybrid_search" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.shouldEnableHybridSearch"></a>

```python
should_enable_hybrid_search: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.idcsUrl">idcs_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.scopeUrl">scope_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `idcs_url`<sup>Required</sup> <a name="idcs_url" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.idcsUrl"></a>

```python
idcs_url: str
```

- *Type:* str

---

##### `scope_url`<sup>Required</sup> <a name="scope_url" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.scopeUrl"></a>

```python
scope_url: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vault_secret_id`<sup>Required</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.vaultSecretId"></a>

```python
vault_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.indexConfig">index_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_config`<sup>Required</sup> <a name="index_config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.indexConfig"></a>

```python
index_config: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_knowledge_bases

dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.items"></a>

```python
items: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection</a>

---



