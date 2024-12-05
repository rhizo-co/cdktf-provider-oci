# `logAnalyticsLogAnalyticsEntity` Submodule <a name="`logAnalyticsLogAnalyticsEntity` Submodule" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsLogAnalyticsEntity <a name="LogAnalyticsLogAnalyticsEntity" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity oci_log_analytics_log_analytics_entity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_entity

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity(
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
  entity_type_name: str,
  name: str,
  namespace: str,
  cloud_resource_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  hostname: str = None,
  id: str = None,
  management_agent_id: str = None,
  metadata: LogAnalyticsLogAnalyticsEntityMetadata = None,
  properties: typing.Mapping[str] = None,
  source_id: str = None,
  time_last_discovered: str = None,
  timeouts: LogAnalyticsLogAnalyticsEntityTimeouts = None,
  timezone_region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#compartment_id LogAnalyticsLogAnalyticsEntity#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.entityTypeName">entity_type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#entity_type_name LogAnalyticsLogAnalyticsEntity#entity_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#namespace LogAnalyticsLogAnalyticsEntity#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.cloudResourceId">cloud_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#cloud_resource_id LogAnalyticsLogAnalyticsEntity#cloud_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#defined_tags LogAnalyticsLogAnalyticsEntity#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#freeform_tags LogAnalyticsLogAnalyticsEntity#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#hostname LogAnalyticsLogAnalyticsEntity#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#id LogAnalyticsLogAnalyticsEntity#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#management_agent_id LogAnalyticsLogAnalyticsEntity#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a></code> | metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#properties LogAnalyticsLogAnalyticsEntity#properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.sourceId">source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#source_id LogAnalyticsLogAnalyticsEntity#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.timeLastDiscovered">time_last_discovered</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#time_last_discovered LogAnalyticsLogAnalyticsEntity#time_last_discovered}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.timezoneRegion">timezone_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timezone_region LogAnalyticsLogAnalyticsEntity#timezone_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#compartment_id LogAnalyticsLogAnalyticsEntity#compartment_id}.

---

##### `entity_type_name`<sup>Required</sup> <a name="entity_type_name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.entityTypeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#entity_type_name LogAnalyticsLogAnalyticsEntity#entity_type_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#namespace LogAnalyticsLogAnalyticsEntity#namespace}.

---

##### `cloud_resource_id`<sup>Optional</sup> <a name="cloud_resource_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.cloudResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#cloud_resource_id LogAnalyticsLogAnalyticsEntity#cloud_resource_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#defined_tags LogAnalyticsLogAnalyticsEntity#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#freeform_tags LogAnalyticsLogAnalyticsEntity#freeform_tags}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#hostname LogAnalyticsLogAnalyticsEntity#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#id LogAnalyticsLogAnalyticsEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_agent_id`<sup>Optional</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.managementAgentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#management_agent_id LogAnalyticsLogAnalyticsEntity#management_agent_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.metadata"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#metadata LogAnalyticsLogAnalyticsEntity#metadata}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#properties LogAnalyticsLogAnalyticsEntity#properties}.

---

##### `source_id`<sup>Optional</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.sourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#source_id LogAnalyticsLogAnalyticsEntity#source_id}.

---

##### `time_last_discovered`<sup>Optional</sup> <a name="time_last_discovered" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.timeLastDiscovered"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#time_last_discovered LogAnalyticsLogAnalyticsEntity#time_last_discovered}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timeouts LogAnalyticsLogAnalyticsEntity#timeouts}

---

##### `timezone_region`<sup>Optional</sup> <a name="timezone_region" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.timezoneRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timezone_region LogAnalyticsLogAnalyticsEntity#timezone_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetCloudResourceId">reset_cloud_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetManagementAgentId">reset_management_agent_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetSourceId">reset_source_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeLastDiscovered">reset_time_last_discovered</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimezoneRegion">reset_timezone_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata` <a name="put_metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putMetadata"></a>

```python
def put_metadata(
  items: typing.Union[IResolvable, typing.List[LogAnalyticsLogAnalyticsEntityMetadataItems]] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putMetadata.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#items LogAnalyticsLogAnalyticsEntity#items}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#create LogAnalyticsLogAnalyticsEntity#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#delete LogAnalyticsLogAnalyticsEntity#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#update LogAnalyticsLogAnalyticsEntity#update}.

---

##### `reset_cloud_resource_id` <a name="reset_cloud_resource_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetCloudResourceId"></a>

```python
def reset_cloud_resource_id() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_management_agent_id` <a name="reset_management_agent_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetManagementAgentId"></a>

```python
def reset_management_agent_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_properties` <a name="reset_properties" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_source_id` <a name="reset_source_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetSourceId"></a>

```python
def reset_source_id() -> None
```

##### `reset_time_last_discovered` <a name="reset_time_last_discovered" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeLastDiscovered"></a>

```python
def reset_time_last_discovered() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timezone_region` <a name="reset_timezone_region" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimezoneRegion"></a>

```python
def reset_timezone_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogAnalyticsLogAnalyticsEntity resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_entity

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_entity

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_entity

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_entity

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogAnalyticsLogAnalyticsEntity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogAnalyticsLogAnalyticsEntity to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogAnalyticsLogAnalyticsEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsLogAnalyticsEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.areLogsCollected">are_logs_collected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeInternalName">entity_type_internal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentCompartmentId">management_agent_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentDisplayName">management_agent_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference">LogAnalyticsLogAnalyticsEntityMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference">LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceIdInput">cloud_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeNameInput">entity_type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentIdInput">management_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadataInput">metadata_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceIdInput">source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscoveredInput">time_last_discovered_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegionInput">timezone_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceId">cloud_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeName">entity_type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscovered">time_last_discovered</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegion">timezone_region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `are_logs_collected`<sup>Required</sup> <a name="are_logs_collected" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.areLogsCollected"></a>

```python
are_logs_collected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `entity_type_internal_name`<sup>Required</sup> <a name="entity_type_internal_name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeInternalName"></a>

```python
entity_type_internal_name: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `management_agent_compartment_id`<sup>Required</sup> <a name="management_agent_compartment_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentCompartmentId"></a>

```python
management_agent_compartment_id: str
```

- *Type:* str

---

##### `management_agent_display_name`<sup>Required</sup> <a name="management_agent_display_name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentDisplayName"></a>

```python
management_agent_display_name: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadata"></a>

```python
metadata: LogAnalyticsLogAnalyticsEntityMetadataOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference">LogAnalyticsLogAnalyticsEntityMetadataOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeouts"></a>

```python
timeouts: LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference">LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `cloud_resource_id_input`<sup>Optional</sup> <a name="cloud_resource_id_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceIdInput"></a>

```python
cloud_resource_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `entity_type_name_input`<sup>Optional</sup> <a name="entity_type_name_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeNameInput"></a>

```python
entity_type_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `management_agent_id_input`<sup>Optional</sup> <a name="management_agent_id_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentIdInput"></a>

```python
management_agent_id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadataInput"></a>

```python
metadata_input: LogAnalyticsLogAnalyticsEntityMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceIdInput"></a>

```python
source_id_input: str
```

- *Type:* str

---

##### `time_last_discovered_input`<sup>Optional</sup> <a name="time_last_discovered_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscoveredInput"></a>

```python
time_last_discovered_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LogAnalyticsLogAnalyticsEntityTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>]

---

##### `timezone_region_input`<sup>Optional</sup> <a name="timezone_region_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegionInput"></a>

```python
timezone_region_input: str
```

- *Type:* str

---

##### `cloud_resource_id`<sup>Required</sup> <a name="cloud_resource_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceId"></a>

```python
cloud_resource_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `entity_type_name`<sup>Required</sup> <a name="entity_type_name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeName"></a>

```python
entity_type_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `time_last_discovered`<sup>Required</sup> <a name="time_last_discovered" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscovered"></a>

```python
time_last_discovered: str
```

- *Type:* str

---

##### `timezone_region`<sup>Required</sup> <a name="timezone_region" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegion"></a>

```python
timezone_region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsLogAnalyticsEntityConfig <a name="LogAnalyticsLogAnalyticsEntityConfig" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_entity

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  entity_type_name: str,
  name: str,
  namespace: str,
  cloud_resource_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  hostname: str = None,
  id: str = None,
  management_agent_id: str = None,
  metadata: LogAnalyticsLogAnalyticsEntityMetadata = None,
  properties: typing.Mapping[str] = None,
  source_id: str = None,
  time_last_discovered: str = None,
  timeouts: LogAnalyticsLogAnalyticsEntityTimeouts = None,
  timezone_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#compartment_id LogAnalyticsLogAnalyticsEntity#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.entityTypeName">entity_type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#entity_type_name LogAnalyticsLogAnalyticsEntity#entity_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#namespace LogAnalyticsLogAnalyticsEntity#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.cloudResourceId">cloud_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#cloud_resource_id LogAnalyticsLogAnalyticsEntity#cloud_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#defined_tags LogAnalyticsLogAnalyticsEntity#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#freeform_tags LogAnalyticsLogAnalyticsEntity#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#hostname LogAnalyticsLogAnalyticsEntity#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#id LogAnalyticsLogAnalyticsEntity#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#management_agent_id LogAnalyticsLogAnalyticsEntity#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a></code> | metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#properties LogAnalyticsLogAnalyticsEntity#properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.sourceId">source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#source_id LogAnalyticsLogAnalyticsEntity#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeLastDiscovered">time_last_discovered</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#time_last_discovered LogAnalyticsLogAnalyticsEntity#time_last_discovered}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timezoneRegion">timezone_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timezone_region LogAnalyticsLogAnalyticsEntity#timezone_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#compartment_id LogAnalyticsLogAnalyticsEntity#compartment_id}.

---

##### `entity_type_name`<sup>Required</sup> <a name="entity_type_name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.entityTypeName"></a>

```python
entity_type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#entity_type_name LogAnalyticsLogAnalyticsEntity#entity_type_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#namespace LogAnalyticsLogAnalyticsEntity#namespace}.

---

##### `cloud_resource_id`<sup>Optional</sup> <a name="cloud_resource_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.cloudResourceId"></a>

```python
cloud_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#cloud_resource_id LogAnalyticsLogAnalyticsEntity#cloud_resource_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#defined_tags LogAnalyticsLogAnalyticsEntity#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#freeform_tags LogAnalyticsLogAnalyticsEntity#freeform_tags}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#hostname LogAnalyticsLogAnalyticsEntity#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#id LogAnalyticsLogAnalyticsEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_agent_id`<sup>Optional</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#management_agent_id LogAnalyticsLogAnalyticsEntity#management_agent_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.metadata"></a>

```python
metadata: LogAnalyticsLogAnalyticsEntityMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#metadata LogAnalyticsLogAnalyticsEntity#metadata}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#properties LogAnalyticsLogAnalyticsEntity#properties}.

---

##### `source_id`<sup>Optional</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#source_id LogAnalyticsLogAnalyticsEntity#source_id}.

---

##### `time_last_discovered`<sup>Optional</sup> <a name="time_last_discovered" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeLastDiscovered"></a>

```python
time_last_discovered: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#time_last_discovered LogAnalyticsLogAnalyticsEntity#time_last_discovered}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeouts"></a>

```python
timeouts: LogAnalyticsLogAnalyticsEntityTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timeouts LogAnalyticsLogAnalyticsEntity#timeouts}

---

##### `timezone_region`<sup>Optional</sup> <a name="timezone_region" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timezoneRegion"></a>

```python
timezone_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timezone_region LogAnalyticsLogAnalyticsEntity#timezone_region}.

---

### LogAnalyticsLogAnalyticsEntityMetadata <a name="LogAnalyticsLogAnalyticsEntityMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_entity

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata(
  items: typing.Union[IResolvable, typing.List[LogAnalyticsLogAnalyticsEntityMetadataItems]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>]]</code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[LogAnalyticsLogAnalyticsEntityMetadataItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#items LogAnalyticsLogAnalyticsEntity#items}

---

### LogAnalyticsLogAnalyticsEntityMetadataItems <a name="LogAnalyticsLogAnalyticsEntityMetadataItems" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_entity

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems(
  name: str = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#type LogAnalyticsLogAnalyticsEntity#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#value LogAnalyticsLogAnalyticsEntity#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#type LogAnalyticsLogAnalyticsEntity#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#value LogAnalyticsLogAnalyticsEntity#value}.

---

### LogAnalyticsLogAnalyticsEntityTimeouts <a name="LogAnalyticsLogAnalyticsEntityTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_entity

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#create LogAnalyticsLogAnalyticsEntity#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#delete LogAnalyticsLogAnalyticsEntity#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#update LogAnalyticsLogAnalyticsEntity#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#create LogAnalyticsLogAnalyticsEntity#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#delete LogAnalyticsLogAnalyticsEntity#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#update LogAnalyticsLogAnalyticsEntity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsLogAnalyticsEntityMetadataItemsList <a name="LogAnalyticsLogAnalyticsEntityMetadataItemsList" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_entity

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogAnalyticsLogAnalyticsEntityMetadataItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>]]

---


### LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference <a name="LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_entity

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogAnalyticsLogAnalyticsEntityMetadataItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>]

---


### LogAnalyticsLogAnalyticsEntityMetadataOutputReference <a name="LogAnalyticsLogAnalyticsEntityMetadataOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_entity

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.putItems">put_items</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[LogAnalyticsLogAnalyticsEntityMetadataItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>]]

---

##### `reset_items` <a name="reset_items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList">LogAnalyticsLogAnalyticsEntityMetadataItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.items"></a>

```python
items: LogAnalyticsLogAnalyticsEntityMetadataItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList">LogAnalyticsLogAnalyticsEntityMetadataItemsList</a>

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[LogAnalyticsLogAnalyticsEntityMetadataItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.internalValue"></a>

```python
internal_value: LogAnalyticsLogAnalyticsEntityMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

---


### LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference <a name="LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_entity

logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogAnalyticsLogAnalyticsEntityTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>]

---



