# `generativeAiAgentAgentEndpoint` Submodule <a name="`generativeAiAgentAgentEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenerativeAiAgentAgentEndpoint <a name="GenerativeAiAgentAgentEndpoint" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint oci_generative_ai_agent_agent_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_agent_endpoint

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_id: str,
  compartment_id: str,
  content_moderation_config: GenerativeAiAgentAgentEndpointContentModerationConfig = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  session_config: GenerativeAiAgentAgentEndpointSessionConfig = None,
  should_enable_citation: typing.Union[bool, IResolvable] = None,
  should_enable_session: typing.Union[bool, IResolvable] = None,
  should_enable_trace: typing.Union[bool, IResolvable] = None,
  timeouts: GenerativeAiAgentAgentEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#agent_id GenerativeAiAgentAgentEndpoint#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#compartment_id GenerativeAiAgentAgentEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.contentModerationConfig">content_moderation_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a></code> | content_moderation_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#defined_tags GenerativeAiAgentAgentEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#description GenerativeAiAgentAgentEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#display_name GenerativeAiAgentAgentEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#freeform_tags GenerativeAiAgentAgentEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#id GenerativeAiAgentAgentEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.sessionConfig">session_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a></code> | session_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.shouldEnableCitation">should_enable_citation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_citation GenerativeAiAgentAgentEndpoint#should_enable_citation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.shouldEnableSession">should_enable_session</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_session GenerativeAiAgentAgentEndpoint#should_enable_session}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.shouldEnableTrace">should_enable_trace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_trace GenerativeAiAgentAgentEndpoint#should_enable_trace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.agentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#agent_id GenerativeAiAgentAgentEndpoint#agent_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#compartment_id GenerativeAiAgentAgentEndpoint#compartment_id}.

---

##### `content_moderation_config`<sup>Optional</sup> <a name="content_moderation_config" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.contentModerationConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a>

content_moderation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#content_moderation_config GenerativeAiAgentAgentEndpoint#content_moderation_config}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#defined_tags GenerativeAiAgentAgentEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#description GenerativeAiAgentAgentEndpoint#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#display_name GenerativeAiAgentAgentEndpoint#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#freeform_tags GenerativeAiAgentAgentEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#id GenerativeAiAgentAgentEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `session_config`<sup>Optional</sup> <a name="session_config" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.sessionConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a>

session_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#session_config GenerativeAiAgentAgentEndpoint#session_config}

---

##### `should_enable_citation`<sup>Optional</sup> <a name="should_enable_citation" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.shouldEnableCitation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_citation GenerativeAiAgentAgentEndpoint#should_enable_citation}.

---

##### `should_enable_session`<sup>Optional</sup> <a name="should_enable_session" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.shouldEnableSession"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_session GenerativeAiAgentAgentEndpoint#should_enable_session}.

---

##### `should_enable_trace`<sup>Optional</sup> <a name="should_enable_trace" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.shouldEnableTrace"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_trace GenerativeAiAgentAgentEndpoint#should_enable_trace}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#timeouts GenerativeAiAgentAgentEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putContentModerationConfig">put_content_moderation_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putSessionConfig">put_session_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetContentModerationConfig">reset_content_moderation_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetSessionConfig">reset_session_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableCitation">reset_should_enable_citation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableSession">reset_should_enable_session</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableTrace">reset_should_enable_trace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_content_moderation_config` <a name="put_content_moderation_config" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putContentModerationConfig"></a>

```python
def put_content_moderation_config(
  should_enable_on_input: typing.Union[bool, IResolvable] = None,
  should_enable_on_output: typing.Union[bool, IResolvable] = None
) -> None
```

###### `should_enable_on_input`<sup>Optional</sup> <a name="should_enable_on_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putContentModerationConfig.parameter.shouldEnableOnInput"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_input GenerativeAiAgentAgentEndpoint#should_enable_on_input}.

---

###### `should_enable_on_output`<sup>Optional</sup> <a name="should_enable_on_output" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putContentModerationConfig.parameter.shouldEnableOnOutput"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_output GenerativeAiAgentAgentEndpoint#should_enable_on_output}.

---

##### `put_session_config` <a name="put_session_config" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putSessionConfig"></a>

```python
def put_session_config(
  idle_timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `idle_timeout_in_seconds`<sup>Optional</sup> <a name="idle_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putSessionConfig.parameter.idleTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#idle_timeout_in_seconds GenerativeAiAgentAgentEndpoint#idle_timeout_in_seconds}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#create GenerativeAiAgentAgentEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#delete GenerativeAiAgentAgentEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#update GenerativeAiAgentAgentEndpoint#update}.

---

##### `reset_content_moderation_config` <a name="reset_content_moderation_config" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetContentModerationConfig"></a>

```python
def reset_content_moderation_config() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_session_config` <a name="reset_session_config" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetSessionConfig"></a>

```python
def reset_session_config() -> None
```

##### `reset_should_enable_citation` <a name="reset_should_enable_citation" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableCitation"></a>

```python
def reset_should_enable_citation() -> None
```

##### `reset_should_enable_session` <a name="reset_should_enable_session" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableSession"></a>

```python
def reset_should_enable_session() -> None
```

##### `reset_should_enable_trace` <a name="reset_should_enable_trace" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableTrace"></a>

```python
def reset_should_enable_trace() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GenerativeAiAgentAgentEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_agent_endpoint

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_agent_endpoint

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_agent_endpoint

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_agent_endpoint

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GenerativeAiAgentAgentEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GenerativeAiAgentAgentEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GenerativeAiAgentAgentEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenerativeAiAgentAgentEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.contentModerationConfig">content_moderation_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference">GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.sessionConfig">session_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference">GenerativeAiAgentAgentEndpointSessionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference">GenerativeAiAgentAgentEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.contentModerationConfigInput">content_moderation_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.sessionConfigInput">session_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableCitationInput">should_enable_citation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableSessionInput">should_enable_session_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableTraceInput">should_enable_trace_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableCitation">should_enable_citation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableSession">should_enable_session</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableTrace">should_enable_trace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_moderation_config`<sup>Required</sup> <a name="content_moderation_config" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.contentModerationConfig"></a>

```python
content_moderation_config: GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference">GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `session_config`<sup>Required</sup> <a name="session_config" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.sessionConfig"></a>

```python
session_config: GenerativeAiAgentAgentEndpointSessionConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference">GenerativeAiAgentAgentEndpointSessionConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeouts"></a>

```python
timeouts: GenerativeAiAgentAgentEndpointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference">GenerativeAiAgentAgentEndpointTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `content_moderation_config_input`<sup>Optional</sup> <a name="content_moderation_config_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.contentModerationConfigInput"></a>

```python
content_moderation_config_input: GenerativeAiAgentAgentEndpointContentModerationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `session_config_input`<sup>Optional</sup> <a name="session_config_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.sessionConfigInput"></a>

```python
session_config_input: GenerativeAiAgentAgentEndpointSessionConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a>

---

##### `should_enable_citation_input`<sup>Optional</sup> <a name="should_enable_citation_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableCitationInput"></a>

```python
should_enable_citation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_enable_session_input`<sup>Optional</sup> <a name="should_enable_session_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableSessionInput"></a>

```python
should_enable_session_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_enable_trace_input`<sup>Optional</sup> <a name="should_enable_trace_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableTraceInput"></a>

```python
should_enable_trace_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GenerativeAiAgentAgentEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a>]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `should_enable_citation`<sup>Required</sup> <a name="should_enable_citation" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableCitation"></a>

```python
should_enable_citation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_enable_session`<sup>Required</sup> <a name="should_enable_session" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableSession"></a>

```python
should_enable_session: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_enable_trace`<sup>Required</sup> <a name="should_enable_trace" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableTrace"></a>

```python
should_enable_trace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GenerativeAiAgentAgentEndpointConfig <a name="GenerativeAiAgentAgentEndpointConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_agent_endpoint

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_id: str,
  compartment_id: str,
  content_moderation_config: GenerativeAiAgentAgentEndpointContentModerationConfig = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  session_config: GenerativeAiAgentAgentEndpointSessionConfig = None,
  should_enable_citation: typing.Union[bool, IResolvable] = None,
  should_enable_session: typing.Union[bool, IResolvable] = None,
  should_enable_trace: typing.Union[bool, IResolvable] = None,
  timeouts: GenerativeAiAgentAgentEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#agent_id GenerativeAiAgentAgentEndpoint#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#compartment_id GenerativeAiAgentAgentEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.contentModerationConfig">content_moderation_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a></code> | content_moderation_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#defined_tags GenerativeAiAgentAgentEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#description GenerativeAiAgentAgentEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#display_name GenerativeAiAgentAgentEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#freeform_tags GenerativeAiAgentAgentEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#id GenerativeAiAgentAgentEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.sessionConfig">session_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a></code> | session_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableCitation">should_enable_citation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_citation GenerativeAiAgentAgentEndpoint#should_enable_citation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableSession">should_enable_session</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_session GenerativeAiAgentAgentEndpoint#should_enable_session}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableTrace">should_enable_trace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_trace GenerativeAiAgentAgentEndpoint#should_enable_trace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#agent_id GenerativeAiAgentAgentEndpoint#agent_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#compartment_id GenerativeAiAgentAgentEndpoint#compartment_id}.

---

##### `content_moderation_config`<sup>Optional</sup> <a name="content_moderation_config" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.contentModerationConfig"></a>

```python
content_moderation_config: GenerativeAiAgentAgentEndpointContentModerationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a>

content_moderation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#content_moderation_config GenerativeAiAgentAgentEndpoint#content_moderation_config}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#defined_tags GenerativeAiAgentAgentEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#description GenerativeAiAgentAgentEndpoint#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#display_name GenerativeAiAgentAgentEndpoint#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#freeform_tags GenerativeAiAgentAgentEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#id GenerativeAiAgentAgentEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `session_config`<sup>Optional</sup> <a name="session_config" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.sessionConfig"></a>

```python
session_config: GenerativeAiAgentAgentEndpointSessionConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a>

session_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#session_config GenerativeAiAgentAgentEndpoint#session_config}

---

##### `should_enable_citation`<sup>Optional</sup> <a name="should_enable_citation" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableCitation"></a>

```python
should_enable_citation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_citation GenerativeAiAgentAgentEndpoint#should_enable_citation}.

---

##### `should_enable_session`<sup>Optional</sup> <a name="should_enable_session" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableSession"></a>

```python
should_enable_session: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_session GenerativeAiAgentAgentEndpoint#should_enable_session}.

---

##### `should_enable_trace`<sup>Optional</sup> <a name="should_enable_trace" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableTrace"></a>

```python
should_enable_trace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_trace GenerativeAiAgentAgentEndpoint#should_enable_trace}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.timeouts"></a>

```python
timeouts: GenerativeAiAgentAgentEndpointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#timeouts GenerativeAiAgentAgentEndpoint#timeouts}

---

### GenerativeAiAgentAgentEndpointContentModerationConfig <a name="GenerativeAiAgentAgentEndpointContentModerationConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_agent_endpoint

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig(
  should_enable_on_input: typing.Union[bool, IResolvable] = None,
  should_enable_on_output: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.property.shouldEnableOnInput">should_enable_on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_input GenerativeAiAgentAgentEndpoint#should_enable_on_input}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.property.shouldEnableOnOutput">should_enable_on_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_output GenerativeAiAgentAgentEndpoint#should_enable_on_output}. |

---

##### `should_enable_on_input`<sup>Optional</sup> <a name="should_enable_on_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.property.shouldEnableOnInput"></a>

```python
should_enable_on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_input GenerativeAiAgentAgentEndpoint#should_enable_on_input}.

---

##### `should_enable_on_output`<sup>Optional</sup> <a name="should_enable_on_output" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.property.shouldEnableOnOutput"></a>

```python
should_enable_on_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_output GenerativeAiAgentAgentEndpoint#should_enable_on_output}.

---

### GenerativeAiAgentAgentEndpointSessionConfig <a name="GenerativeAiAgentAgentEndpointSessionConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_agent_endpoint

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig(
  idle_timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig.property.idleTimeoutInSeconds">idle_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#idle_timeout_in_seconds GenerativeAiAgentAgentEndpoint#idle_timeout_in_seconds}. |

---

##### `idle_timeout_in_seconds`<sup>Optional</sup> <a name="idle_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig.property.idleTimeoutInSeconds"></a>

```python
idle_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#idle_timeout_in_seconds GenerativeAiAgentAgentEndpoint#idle_timeout_in_seconds}.

---

### GenerativeAiAgentAgentEndpointTimeouts <a name="GenerativeAiAgentAgentEndpointTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_agent_endpoint

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#create GenerativeAiAgentAgentEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#delete GenerativeAiAgentAgentEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#update GenerativeAiAgentAgentEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#create GenerativeAiAgentAgentEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#delete GenerativeAiAgentAgentEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#update GenerativeAiAgentAgentEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference <a name="GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_agent_endpoint

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resetShouldEnableOnInput">reset_should_enable_on_input</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resetShouldEnableOnOutput">reset_should_enable_on_output</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_should_enable_on_input` <a name="reset_should_enable_on_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resetShouldEnableOnInput"></a>

```python
def reset_should_enable_on_input() -> None
```

##### `reset_should_enable_on_output` <a name="reset_should_enable_on_output" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resetShouldEnableOnOutput"></a>

```python
def reset_should_enable_on_output() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInputInput">should_enable_on_input_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutputInput">should_enable_on_output_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInput">should_enable_on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutput">should_enable_on_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `should_enable_on_input_input`<sup>Optional</sup> <a name="should_enable_on_input_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInputInput"></a>

```python
should_enable_on_input_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_enable_on_output_input`<sup>Optional</sup> <a name="should_enable_on_output_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutputInput"></a>

```python
should_enable_on_output_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_enable_on_input`<sup>Required</sup> <a name="should_enable_on_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInput"></a>

```python
should_enable_on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_enable_on_output`<sup>Required</sup> <a name="should_enable_on_output" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutput"></a>

```python
should_enable_on_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GenerativeAiAgentAgentEndpointContentModerationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a>

---


### GenerativeAiAgentAgentEndpointSessionConfigOutputReference <a name="GenerativeAiAgentAgentEndpointSessionConfigOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_agent_endpoint

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resetIdleTimeoutInSeconds">reset_idle_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_idle_timeout_in_seconds` <a name="reset_idle_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resetIdleTimeoutInSeconds"></a>

```python
def reset_idle_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSecondsInput">idle_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSeconds">idle_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_timeout_in_seconds_input`<sup>Optional</sup> <a name="idle_timeout_in_seconds_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSecondsInput"></a>

```python
idle_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_timeout_in_seconds`<sup>Required</sup> <a name="idle_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSeconds"></a>

```python
idle_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GenerativeAiAgentAgentEndpointSessionConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a>

---


### GenerativeAiAgentAgentEndpointTimeoutsOutputReference <a name="GenerativeAiAgentAgentEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_agent_agent_endpoint

generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GenerativeAiAgentAgentEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a>]

---



