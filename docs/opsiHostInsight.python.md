# `opsiHostInsight` Submodule <a name="`opsiHostInsight` Submodule" id="rhizo-co-terraform-provider-oci.opsiHostInsight"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiHostInsight <a name="OpsiHostInsight" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight oci_opsi_host_insight}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_host_insight

opsiHostInsight.OpsiHostInsight(
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
  entity_source: str,
  compute_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  enterprise_manager_bridge_id: str = None,
  enterprise_manager_entity_identifier: str = None,
  enterprise_manager_identifier: str = None,
  exadata_insight_id: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  management_agent_id: str = None,
  status: str = None,
  timeouts: OpsiHostInsightTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compartment_id OpsiHostInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.entitySource">entity_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#entity_source OpsiHostInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.computeId">compute_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compute_id OpsiHostInsight#compute_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#defined_tags OpsiHostInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.enterpriseManagerBridgeId">enterprise_manager_bridge_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_bridge_id OpsiHostInsight#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.enterpriseManagerEntityIdentifier">enterprise_manager_entity_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_entity_identifier OpsiHostInsight#enterprise_manager_entity_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.enterpriseManagerIdentifier">enterprise_manager_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_identifier OpsiHostInsight#enterprise_manager_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.exadataInsightId">exadata_insight_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#exadata_insight_id OpsiHostInsight#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#freeform_tags OpsiHostInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#id OpsiHostInsight#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#management_agent_id OpsiHostInsight#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#status OpsiHostInsight#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compartment_id OpsiHostInsight#compartment_id}.

---

##### `entity_source`<sup>Required</sup> <a name="entity_source" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.entitySource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#entity_source OpsiHostInsight#entity_source}.

---

##### `compute_id`<sup>Optional</sup> <a name="compute_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.computeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compute_id OpsiHostInsight#compute_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#defined_tags OpsiHostInsight#defined_tags}.

---

##### `enterprise_manager_bridge_id`<sup>Optional</sup> <a name="enterprise_manager_bridge_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.enterpriseManagerBridgeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_bridge_id OpsiHostInsight#enterprise_manager_bridge_id}.

---

##### `enterprise_manager_entity_identifier`<sup>Optional</sup> <a name="enterprise_manager_entity_identifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.enterpriseManagerEntityIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_entity_identifier OpsiHostInsight#enterprise_manager_entity_identifier}.

---

##### `enterprise_manager_identifier`<sup>Optional</sup> <a name="enterprise_manager_identifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.enterpriseManagerIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_identifier OpsiHostInsight#enterprise_manager_identifier}.

---

##### `exadata_insight_id`<sup>Optional</sup> <a name="exadata_insight_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.exadataInsightId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#exadata_insight_id OpsiHostInsight#exadata_insight_id}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#freeform_tags OpsiHostInsight#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#id OpsiHostInsight#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_agent_id`<sup>Optional</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.managementAgentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#management_agent_id OpsiHostInsight#management_agent_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#status OpsiHostInsight#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#timeouts OpsiHostInsight#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetComputeId">reset_compute_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerBridgeId">reset_enterprise_manager_bridge_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerEntityIdentifier">reset_enterprise_manager_entity_identifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerIdentifier">reset_enterprise_manager_identifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetExadataInsightId">reset_exadata_insight_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetManagementAgentId">reset_management_agent_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#create OpsiHostInsight#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#delete OpsiHostInsight#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#update OpsiHostInsight#update}.

---

##### `reset_compute_id` <a name="reset_compute_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetComputeId"></a>

```python
def reset_compute_id() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_enterprise_manager_bridge_id` <a name="reset_enterprise_manager_bridge_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerBridgeId"></a>

```python
def reset_enterprise_manager_bridge_id() -> None
```

##### `reset_enterprise_manager_entity_identifier` <a name="reset_enterprise_manager_entity_identifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerEntityIdentifier"></a>

```python
def reset_enterprise_manager_entity_identifier() -> None
```

##### `reset_enterprise_manager_identifier` <a name="reset_enterprise_manager_identifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerIdentifier"></a>

```python
def reset_enterprise_manager_identifier() -> None
```

##### `reset_exadata_insight_id` <a name="reset_exadata_insight_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetExadataInsightId"></a>

```python
def reset_exadata_insight_id() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_management_agent_id` <a name="reset_management_agent_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetManagementAgentId"></a>

```python
def reset_management_agent_id() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OpsiHostInsight resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_host_insight

opsiHostInsight.OpsiHostInsight.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_host_insight

opsiHostInsight.OpsiHostInsight.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_host_insight

opsiHostInsight.OpsiHostInsight.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_host_insight

opsiHostInsight.OpsiHostInsight.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OpsiHostInsight resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpsiHostInsight to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpsiHostInsight that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsiHostInsight to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityDisplayName">enterprise_manager_entity_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityName">enterprise_manager_entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityType">enterprise_manager_entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostDisplayName">host_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostType">host_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformName">platform_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformType">platform_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.processorCount">processor_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference">OpsiHostInsightTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.computeIdInput">compute_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerBridgeIdInput">enterprise_manager_bridge_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityIdentifierInput">enterprise_manager_entity_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerIdentifierInput">enterprise_manager_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.entitySourceInput">entity_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.exadataInsightIdInput">exadata_insight_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.managementAgentIdInput">management_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.computeId">compute_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerBridgeId">enterprise_manager_bridge_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityIdentifier">enterprise_manager_entity_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerIdentifier">enterprise_manager_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.entitySource">entity_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.exadataInsightId">exadata_insight_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enterprise_manager_entity_display_name`<sup>Required</sup> <a name="enterprise_manager_entity_display_name" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityDisplayName"></a>

```python
enterprise_manager_entity_display_name: str
```

- *Type:* str

---

##### `enterprise_manager_entity_name`<sup>Required</sup> <a name="enterprise_manager_entity_name" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityName"></a>

```python
enterprise_manager_entity_name: str
```

- *Type:* str

---

##### `enterprise_manager_entity_type`<sup>Required</sup> <a name="enterprise_manager_entity_type" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityType"></a>

```python
enterprise_manager_entity_type: str
```

- *Type:* str

---

##### `host_display_name`<sup>Required</sup> <a name="host_display_name" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostDisplayName"></a>

```python
host_display_name: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `host_type`<sup>Required</sup> <a name="host_type" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostType"></a>

```python
host_type: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `platform_name`<sup>Required</sup> <a name="platform_name" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformName"></a>

```python
platform_name: str
```

- *Type:* str

---

##### `platform_type`<sup>Required</sup> <a name="platform_type" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformType"></a>

```python
platform_type: str
```

- *Type:* str

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `processor_count`<sup>Required</sup> <a name="processor_count" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.processorCount"></a>

```python
processor_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeouts"></a>

```python
timeouts: OpsiHostInsightTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference">OpsiHostInsightTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compute_id_input`<sup>Optional</sup> <a name="compute_id_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.computeIdInput"></a>

```python
compute_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `enterprise_manager_bridge_id_input`<sup>Optional</sup> <a name="enterprise_manager_bridge_id_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerBridgeIdInput"></a>

```python
enterprise_manager_bridge_id_input: str
```

- *Type:* str

---

##### `enterprise_manager_entity_identifier_input`<sup>Optional</sup> <a name="enterprise_manager_entity_identifier_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityIdentifierInput"></a>

```python
enterprise_manager_entity_identifier_input: str
```

- *Type:* str

---

##### `enterprise_manager_identifier_input`<sup>Optional</sup> <a name="enterprise_manager_identifier_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerIdentifierInput"></a>

```python
enterprise_manager_identifier_input: str
```

- *Type:* str

---

##### `entity_source_input`<sup>Optional</sup> <a name="entity_source_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.entitySourceInput"></a>

```python
entity_source_input: str
```

- *Type:* str

---

##### `exadata_insight_id_input`<sup>Optional</sup> <a name="exadata_insight_id_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.exadataInsightIdInput"></a>

```python
exadata_insight_id_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `management_agent_id_input`<sup>Optional</sup> <a name="management_agent_id_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.managementAgentIdInput"></a>

```python
management_agent_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OpsiHostInsightTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_id`<sup>Required</sup> <a name="compute_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.computeId"></a>

```python
compute_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `enterprise_manager_bridge_id`<sup>Required</sup> <a name="enterprise_manager_bridge_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerBridgeId"></a>

```python
enterprise_manager_bridge_id: str
```

- *Type:* str

---

##### `enterprise_manager_entity_identifier`<sup>Required</sup> <a name="enterprise_manager_entity_identifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityIdentifier"></a>

```python
enterprise_manager_entity_identifier: str
```

- *Type:* str

---

##### `enterprise_manager_identifier`<sup>Required</sup> <a name="enterprise_manager_identifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerIdentifier"></a>

```python
enterprise_manager_identifier: str
```

- *Type:* str

---

##### `entity_source`<sup>Required</sup> <a name="entity_source" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.entitySource"></a>

```python
entity_source: str
```

- *Type:* str

---

##### `exadata_insight_id`<sup>Required</sup> <a name="exadata_insight_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.exadataInsightId"></a>

```python
exadata_insight_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiHostInsightConfig <a name="OpsiHostInsightConfig" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_host_insight

opsiHostInsight.OpsiHostInsightConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  entity_source: str,
  compute_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  enterprise_manager_bridge_id: str = None,
  enterprise_manager_entity_identifier: str = None,
  enterprise_manager_identifier: str = None,
  exadata_insight_id: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  management_agent_id: str = None,
  status: str = None,
  timeouts: OpsiHostInsightTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compartment_id OpsiHostInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.entitySource">entity_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#entity_source OpsiHostInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.computeId">compute_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compute_id OpsiHostInsight#compute_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#defined_tags OpsiHostInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerBridgeId">enterprise_manager_bridge_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_bridge_id OpsiHostInsight#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerEntityIdentifier">enterprise_manager_entity_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_entity_identifier OpsiHostInsight#enterprise_manager_entity_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerIdentifier">enterprise_manager_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_identifier OpsiHostInsight#enterprise_manager_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.exadataInsightId">exadata_insight_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#exadata_insight_id OpsiHostInsight#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#freeform_tags OpsiHostInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#id OpsiHostInsight#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#management_agent_id OpsiHostInsight#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#status OpsiHostInsight#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compartment_id OpsiHostInsight#compartment_id}.

---

##### `entity_source`<sup>Required</sup> <a name="entity_source" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.entitySource"></a>

```python
entity_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#entity_source OpsiHostInsight#entity_source}.

---

##### `compute_id`<sup>Optional</sup> <a name="compute_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.computeId"></a>

```python
compute_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compute_id OpsiHostInsight#compute_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#defined_tags OpsiHostInsight#defined_tags}.

---

##### `enterprise_manager_bridge_id`<sup>Optional</sup> <a name="enterprise_manager_bridge_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerBridgeId"></a>

```python
enterprise_manager_bridge_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_bridge_id OpsiHostInsight#enterprise_manager_bridge_id}.

---

##### `enterprise_manager_entity_identifier`<sup>Optional</sup> <a name="enterprise_manager_entity_identifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerEntityIdentifier"></a>

```python
enterprise_manager_entity_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_entity_identifier OpsiHostInsight#enterprise_manager_entity_identifier}.

---

##### `enterprise_manager_identifier`<sup>Optional</sup> <a name="enterprise_manager_identifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerIdentifier"></a>

```python
enterprise_manager_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_identifier OpsiHostInsight#enterprise_manager_identifier}.

---

##### `exadata_insight_id`<sup>Optional</sup> <a name="exadata_insight_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.exadataInsightId"></a>

```python
exadata_insight_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#exadata_insight_id OpsiHostInsight#exadata_insight_id}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#freeform_tags OpsiHostInsight#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#id OpsiHostInsight#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_agent_id`<sup>Optional</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#management_agent_id OpsiHostInsight#management_agent_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#status OpsiHostInsight#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.timeouts"></a>

```python
timeouts: OpsiHostInsightTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#timeouts OpsiHostInsight#timeouts}

---

### OpsiHostInsightTimeouts <a name="OpsiHostInsightTimeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_host_insight

opsiHostInsight.OpsiHostInsightTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#create OpsiHostInsight#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#delete OpsiHostInsight#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#update OpsiHostInsight#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#create OpsiHostInsight#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#delete OpsiHostInsight#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#update OpsiHostInsight#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiHostInsightTimeoutsOutputReference <a name="OpsiHostInsightTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_host_insight

opsiHostInsight.OpsiHostInsightTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OpsiHostInsightTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a>]

---



