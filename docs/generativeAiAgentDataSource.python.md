# `generativeAiAgentDataSource` Submodule <a name="`generativeAiAgentDataSource` Submodule" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenerativeAiAgentDataSource <a name="GenerativeAiAgentDataSource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source oci_generative_ai_agent_data_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_data_source

generativeAiAgentDataSource.GenerativeAiAgentDataSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  data_source_config: GenerativeAiAgentDataSourceDataSourceConfig,
  knowledge_base_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: GenerativeAiAgentDataSourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#compartment_id GenerativeAiAgentDataSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.dataSourceConfig">data_source_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a></code> | data_source_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#knowledge_base_id GenerativeAiAgentDataSource#knowledge_base_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#defined_tags GenerativeAiAgentDataSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#description GenerativeAiAgentDataSource#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#display_name GenerativeAiAgentDataSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#freeform_tags GenerativeAiAgentDataSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#id GenerativeAiAgentDataSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#compartment_id GenerativeAiAgentDataSource#compartment_id}.

---

##### `data_source_config`<sup>Required</sup> <a name="data_source_config" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.dataSourceConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a>

data_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#data_source_config GenerativeAiAgentDataSource#data_source_config}

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.knowledgeBaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#knowledge_base_id GenerativeAiAgentDataSource#knowledge_base_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#defined_tags GenerativeAiAgentDataSource#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#description GenerativeAiAgentDataSource#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#display_name GenerativeAiAgentDataSource#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#freeform_tags GenerativeAiAgentDataSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#id GenerativeAiAgentDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#timeouts GenerativeAiAgentDataSource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putDataSourceConfig">put_data_source_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_source_config` <a name="put_data_source_config" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putDataSourceConfig"></a>

```python
def put_data_source_config(
  data_source_config_type: str,
  object_storage_prefixes: typing.Union[IResolvable, typing.List[GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes]]
) -> None
```

###### `data_source_config_type`<sup>Required</sup> <a name="data_source_config_type" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putDataSourceConfig.parameter.dataSourceConfigType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#data_source_config_type GenerativeAiAgentDataSource#data_source_config_type}.

---

###### `object_storage_prefixes`<sup>Required</sup> <a name="object_storage_prefixes" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putDataSourceConfig.parameter.objectStoragePrefixes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>]]

object_storage_prefixes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#object_storage_prefixes GenerativeAiAgentDataSource#object_storage_prefixes}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#create GenerativeAiAgentDataSource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#delete GenerativeAiAgentDataSource#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#update GenerativeAiAgentDataSource#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GenerativeAiAgentDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_data_source

generativeAiAgentDataSource.GenerativeAiAgentDataSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_data_source

generativeAiAgentDataSource.GenerativeAiAgentDataSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_data_source

generativeAiAgentDataSource.GenerativeAiAgentDataSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_data_source

generativeAiAgentDataSource.GenerativeAiAgentDataSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GenerativeAiAgentDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GenerativeAiAgentDataSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GenerativeAiAgentDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenerativeAiAgentDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.dataSourceConfig">data_source_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference">GenerativeAiAgentDataSourceDataSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference">GenerativeAiAgentDataSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.dataSourceConfigInput">data_source_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.knowledgeBaseIdInput">knowledge_base_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_config`<sup>Required</sup> <a name="data_source_config" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.dataSourceConfig"></a>

```python
data_source_config: GenerativeAiAgentDataSourceDataSourceConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference">GenerativeAiAgentDataSourceDataSourceConfigOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeouts"></a>

```python
timeouts: GenerativeAiAgentDataSourceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference">GenerativeAiAgentDataSourceTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `data_source_config_input`<sup>Optional</sup> <a name="data_source_config_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.dataSourceConfigInput"></a>

```python
data_source_config_input: GenerativeAiAgentDataSourceDataSourceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `knowledge_base_id_input`<sup>Optional</sup> <a name="knowledge_base_id_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.knowledgeBaseIdInput"></a>

```python
knowledge_base_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GenerativeAiAgentDataSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GenerativeAiAgentDataSourceConfig <a name="GenerativeAiAgentDataSourceConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_data_source

generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  data_source_config: GenerativeAiAgentDataSourceDataSourceConfig,
  knowledge_base_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: GenerativeAiAgentDataSourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#compartment_id GenerativeAiAgentDataSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.dataSourceConfig">data_source_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a></code> | data_source_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#knowledge_base_id GenerativeAiAgentDataSource#knowledge_base_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#defined_tags GenerativeAiAgentDataSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#description GenerativeAiAgentDataSource#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#display_name GenerativeAiAgentDataSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#freeform_tags GenerativeAiAgentDataSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#id GenerativeAiAgentDataSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#compartment_id GenerativeAiAgentDataSource#compartment_id}.

---

##### `data_source_config`<sup>Required</sup> <a name="data_source_config" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.dataSourceConfig"></a>

```python
data_source_config: GenerativeAiAgentDataSourceDataSourceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a>

data_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#data_source_config GenerativeAiAgentDataSource#data_source_config}

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#knowledge_base_id GenerativeAiAgentDataSource#knowledge_base_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#defined_tags GenerativeAiAgentDataSource#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#description GenerativeAiAgentDataSource#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#display_name GenerativeAiAgentDataSource#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#freeform_tags GenerativeAiAgentDataSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#id GenerativeAiAgentDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.timeouts"></a>

```python
timeouts: GenerativeAiAgentDataSourceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#timeouts GenerativeAiAgentDataSource#timeouts}

---

### GenerativeAiAgentDataSourceDataSourceConfig <a name="GenerativeAiAgentDataSourceDataSourceConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_data_source

generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig(
  data_source_config_type: str,
  object_storage_prefixes: typing.Union[IResolvable, typing.List[GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig.property.dataSourceConfigType">data_source_config_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#data_source_config_type GenerativeAiAgentDataSource#data_source_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig.property.objectStoragePrefixes">object_storage_prefixes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>]]</code> | object_storage_prefixes block. |

---

##### `data_source_config_type`<sup>Required</sup> <a name="data_source_config_type" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig.property.dataSourceConfigType"></a>

```python
data_source_config_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#data_source_config_type GenerativeAiAgentDataSource#data_source_config_type}.

---

##### `object_storage_prefixes`<sup>Required</sup> <a name="object_storage_prefixes" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig.property.objectStoragePrefixes"></a>

```python
object_storage_prefixes: typing.Union[IResolvable, typing.List[GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>]]

object_storage_prefixes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#object_storage_prefixes GenerativeAiAgentDataSource#object_storage_prefixes}

---

### GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes <a name="GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_data_source

generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes(
  bucket: str,
  namespace: str,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#bucket GenerativeAiAgentDataSource#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#namespace GenerativeAiAgentDataSource#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#prefix GenerativeAiAgentDataSource#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#bucket GenerativeAiAgentDataSource#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#namespace GenerativeAiAgentDataSource#namespace}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#prefix GenerativeAiAgentDataSource#prefix}.

---

### GenerativeAiAgentDataSourceTimeouts <a name="GenerativeAiAgentDataSourceTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_data_source

generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#create GenerativeAiAgentDataSource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#delete GenerativeAiAgentDataSource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#update GenerativeAiAgentDataSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#create GenerativeAiAgentDataSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#delete GenerativeAiAgentDataSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#update GenerativeAiAgentDataSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList <a name="GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_data_source

generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>]]

---


### GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference <a name="GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_data_source

generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>]

---


### GenerativeAiAgentDataSourceDataSourceConfigOutputReference <a name="GenerativeAiAgentDataSourceDataSourceConfigOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_data_source

generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.putObjectStoragePrefixes">put_object_storage_prefixes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_object_storage_prefixes` <a name="put_object_storage_prefixes" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.putObjectStoragePrefixes"></a>

```python
def put_object_storage_prefixes(
  value: typing.Union[IResolvable, typing.List[GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.putObjectStoragePrefixes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.objectStoragePrefixes">object_storage_prefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.dataSourceConfigTypeInput">data_source_config_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.objectStoragePrefixesInput">object_storage_prefixes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.dataSourceConfigType">data_source_config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_storage_prefixes`<sup>Required</sup> <a name="object_storage_prefixes" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.objectStoragePrefixes"></a>

```python
object_storage_prefixes: GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList</a>

---

##### `data_source_config_type_input`<sup>Optional</sup> <a name="data_source_config_type_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.dataSourceConfigTypeInput"></a>

```python
data_source_config_type_input: str
```

- *Type:* str

---

##### `object_storage_prefixes_input`<sup>Optional</sup> <a name="object_storage_prefixes_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.objectStoragePrefixesInput"></a>

```python
object_storage_prefixes_input: typing.Union[IResolvable, typing.List[GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>]]

---

##### `data_source_config_type`<sup>Required</sup> <a name="data_source_config_type" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.dataSourceConfigType"></a>

```python
data_source_config_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GenerativeAiAgentDataSourceDataSourceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a>

---


### GenerativeAiAgentDataSourceTimeoutsOutputReference <a name="GenerativeAiAgentDataSourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_data_source

generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GenerativeAiAgentDataSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a>]

---



