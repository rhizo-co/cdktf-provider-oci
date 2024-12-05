# `mediaServicesMediaWorkflow` Submodule <a name="`mediaServicesMediaWorkflow` Submodule" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesMediaWorkflow <a name="MediaServicesMediaWorkflow" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow oci_media_services_media_workflow}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_media_workflow

mediaServicesMediaWorkflow.MediaServicesMediaWorkflow(
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
  display_name: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  locks: typing.Union[IResolvable, typing.List[MediaServicesMediaWorkflowLocks]] = None,
  media_workflow_configuration_ids: typing.List[str] = None,
  parameters: str = None,
  tasks: typing.Union[IResolvable, typing.List[MediaServicesMediaWorkflowTasks]] = None,
  timeouts: MediaServicesMediaWorkflowTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#display_name MediaServicesMediaWorkflow#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#defined_tags MediaServicesMediaWorkflow#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#freeform_tags MediaServicesMediaWorkflow#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#id MediaServicesMediaWorkflow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#is_lock_override MediaServicesMediaWorkflow#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.mediaWorkflowConfigurationIds">media_workflow_configuration_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#media_workflow_configuration_ids MediaServicesMediaWorkflow#media_workflow_configuration_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.tasks">tasks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>]]</code> | tasks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#display_name MediaServicesMediaWorkflow#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#defined_tags MediaServicesMediaWorkflow#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#freeform_tags MediaServicesMediaWorkflow#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#id MediaServicesMediaWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.isLockOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#is_lock_override MediaServicesMediaWorkflow#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.locks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#locks MediaServicesMediaWorkflow#locks}

---

##### `media_workflow_configuration_ids`<sup>Optional</sup> <a name="media_workflow_configuration_ids" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.mediaWorkflowConfigurationIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#media_workflow_configuration_ids MediaServicesMediaWorkflow#media_workflow_configuration_ids}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.parameters"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.tasks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>]]

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#tasks MediaServicesMediaWorkflow#tasks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#timeouts MediaServicesMediaWorkflow#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putLocks">put_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTasks">put_tasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetIsLockOverride">reset_is_lock_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetLocks">reset_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetMediaWorkflowConfigurationIds">reset_media_workflow_configuration_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTasks">reset_tasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_locks` <a name="put_locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putLocks"></a>

```python
def put_locks(
  value: typing.Union[IResolvable, typing.List[MediaServicesMediaWorkflowLocks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putLocks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>]]

---

##### `put_tasks` <a name="put_tasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTasks"></a>

```python
def put_tasks(
  value: typing.Union[IResolvable, typing.List[MediaServicesMediaWorkflowTasks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTasks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#create MediaServicesMediaWorkflow#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#delete MediaServicesMediaWorkflow#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#update MediaServicesMediaWorkflow#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_lock_override` <a name="reset_is_lock_override" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetIsLockOverride"></a>

```python
def reset_is_lock_override() -> None
```

##### `reset_locks` <a name="reset_locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetLocks"></a>

```python
def reset_locks() -> None
```

##### `reset_media_workflow_configuration_ids` <a name="reset_media_workflow_configuration_ids" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetMediaWorkflowConfigurationIds"></a>

```python
def reset_media_workflow_configuration_ids() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_tasks` <a name="reset_tasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTasks"></a>

```python
def reset_tasks() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MediaServicesMediaWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_media_workflow

mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_media_workflow

mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_media_workflow

mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_media_workflow

mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MediaServicesMediaWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaServicesMediaWorkflow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaServicesMediaWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesMediaWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecyleDetails">lifecyle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList">MediaServicesMediaWorkflowLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList">MediaServicesMediaWorkflowTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference">MediaServicesMediaWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverrideInput">is_lock_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locksInput">locks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIdsInput">media_workflow_configuration_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasksInput">tasks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIds">media_workflow_configuration_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecyle_details`<sup>Required</sup> <a name="lifecyle_details" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecyleDetails"></a>

```python
lifecyle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locks"></a>

```python
locks: MediaServicesMediaWorkflowLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList">MediaServicesMediaWorkflowLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasks"></a>

```python
tasks: MediaServicesMediaWorkflowTasksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList">MediaServicesMediaWorkflowTasksList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeouts"></a>

```python
timeouts: MediaServicesMediaWorkflowTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference">MediaServicesMediaWorkflowTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_lock_override_input`<sup>Optional</sup> <a name="is_lock_override_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverrideInput"></a>

```python
is_lock_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locks_input`<sup>Optional</sup> <a name="locks_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locksInput"></a>

```python
locks_input: typing.Union[IResolvable, typing.List[MediaServicesMediaWorkflowLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>]]

---

##### `media_workflow_configuration_ids_input`<sup>Optional</sup> <a name="media_workflow_configuration_ids_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIdsInput"></a>

```python
media_workflow_configuration_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `tasks_input`<sup>Optional</sup> <a name="tasks_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasksInput"></a>

```python
tasks_input: typing.Union[IResolvable, typing.List[MediaServicesMediaWorkflowTasks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MediaServicesMediaWorkflowTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `media_workflow_configuration_ids`<sup>Required</sup> <a name="media_workflow_configuration_ids" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIds"></a>

```python
media_workflow_configuration_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesMediaWorkflowConfig <a name="MediaServicesMediaWorkflowConfig" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_media_workflow

mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  locks: typing.Union[IResolvable, typing.List[MediaServicesMediaWorkflowLocks]] = None,
  media_workflow_configuration_ids: typing.List[str] = None,
  parameters: str = None,
  tasks: typing.Union[IResolvable, typing.List[MediaServicesMediaWorkflowTasks]] = None,
  timeouts: MediaServicesMediaWorkflowTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#display_name MediaServicesMediaWorkflow#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#defined_tags MediaServicesMediaWorkflow#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#freeform_tags MediaServicesMediaWorkflow#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#id MediaServicesMediaWorkflow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#is_lock_override MediaServicesMediaWorkflow#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.mediaWorkflowConfigurationIds">media_workflow_configuration_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#media_workflow_configuration_ids MediaServicesMediaWorkflow#media_workflow_configuration_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.tasks">tasks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>]]</code> | tasks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#display_name MediaServicesMediaWorkflow#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#defined_tags MediaServicesMediaWorkflow#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#freeform_tags MediaServicesMediaWorkflow#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#id MediaServicesMediaWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#is_lock_override MediaServicesMediaWorkflow#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.locks"></a>

```python
locks: typing.Union[IResolvable, typing.List[MediaServicesMediaWorkflowLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#locks MediaServicesMediaWorkflow#locks}

---

##### `media_workflow_configuration_ids`<sup>Optional</sup> <a name="media_workflow_configuration_ids" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.mediaWorkflowConfigurationIds"></a>

```python
media_workflow_configuration_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#media_workflow_configuration_ids MediaServicesMediaWorkflow#media_workflow_configuration_ids}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.tasks"></a>

```python
tasks: typing.Union[IResolvable, typing.List[MediaServicesMediaWorkflowTasks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>]]

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#tasks MediaServicesMediaWorkflow#tasks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.timeouts"></a>

```python
timeouts: MediaServicesMediaWorkflowTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#timeouts MediaServicesMediaWorkflow#timeouts}

---

### MediaServicesMediaWorkflowLocks <a name="MediaServicesMediaWorkflowLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_media_workflow

mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks(
  compartment_id: str,
  type: str,
  message: str = None,
  related_resource_id: str = None,
  time_created: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#message MediaServicesMediaWorkflow#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#related_resource_id MediaServicesMediaWorkflow#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.timeCreated">time_created</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#time_created MediaServicesMediaWorkflow#time_created}. |

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#message MediaServicesMediaWorkflow#message}.

---

##### `related_resource_id`<sup>Optional</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#related_resource_id MediaServicesMediaWorkflow#related_resource_id}.

---

##### `time_created`<sup>Optional</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#time_created MediaServicesMediaWorkflow#time_created}.

---

### MediaServicesMediaWorkflowTasks <a name="MediaServicesMediaWorkflowTasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_media_workflow

mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks(
  key: str,
  parameters: str,
  type: str,
  version: str,
  enable_parameter_reference: str = None,
  enable_when_referenced_parameter_equals: typing.Mapping[str] = None,
  prerequisites: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#key MediaServicesMediaWorkflow#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#version MediaServicesMediaWorkflow#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableParameterReference">enable_parameter_reference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_parameter_reference MediaServicesMediaWorkflow#enable_parameter_reference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableWhenReferencedParameterEquals">enable_when_referenced_parameter_equals</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_when_referenced_parameter_equals MediaServicesMediaWorkflow#enable_when_referenced_parameter_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.prerequisites">prerequisites</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#prerequisites MediaServicesMediaWorkflow#prerequisites}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#key MediaServicesMediaWorkflow#key}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#version MediaServicesMediaWorkflow#version}.

---

##### `enable_parameter_reference`<sup>Optional</sup> <a name="enable_parameter_reference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableParameterReference"></a>

```python
enable_parameter_reference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_parameter_reference MediaServicesMediaWorkflow#enable_parameter_reference}.

---

##### `enable_when_referenced_parameter_equals`<sup>Optional</sup> <a name="enable_when_referenced_parameter_equals" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableWhenReferencedParameterEquals"></a>

```python
enable_when_referenced_parameter_equals: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_when_referenced_parameter_equals MediaServicesMediaWorkflow#enable_when_referenced_parameter_equals}.

---

##### `prerequisites`<sup>Optional</sup> <a name="prerequisites" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.prerequisites"></a>

```python
prerequisites: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#prerequisites MediaServicesMediaWorkflow#prerequisites}.

---

### MediaServicesMediaWorkflowTimeouts <a name="MediaServicesMediaWorkflowTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_media_workflow

mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#create MediaServicesMediaWorkflow#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#delete MediaServicesMediaWorkflow#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#update MediaServicesMediaWorkflow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#create MediaServicesMediaWorkflow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#delete MediaServicesMediaWorkflow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#update MediaServicesMediaWorkflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesMediaWorkflowLocksList <a name="MediaServicesMediaWorkflowLocksList" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_media_workflow

mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaServicesMediaWorkflowLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaServicesMediaWorkflowLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>]]

---


### MediaServicesMediaWorkflowLocksOutputReference <a name="MediaServicesMediaWorkflowLocksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_media_workflow

mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetRelatedResourceId">reset_related_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetTimeCreated">reset_time_created</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_related_resource_id` <a name="reset_related_resource_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetRelatedResourceId"></a>

```python
def reset_related_resource_id() -> None
```

##### `reset_time_created` <a name="reset_time_created" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetTimeCreated"></a>

```python
def reset_time_created() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceIdInput">related_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreatedInput">time_created_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `related_resource_id_input`<sup>Optional</sup> <a name="related_resource_id_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceIdInput"></a>

```python
related_resource_id_input: str
```

- *Type:* str

---

##### `time_created_input`<sup>Optional</sup> <a name="time_created_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreatedInput"></a>

```python
time_created_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaServicesMediaWorkflowLocks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>]

---


### MediaServicesMediaWorkflowTasksList <a name="MediaServicesMediaWorkflowTasksList" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_media_workflow

mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaServicesMediaWorkflowTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaServicesMediaWorkflowTasks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>]]

---


### MediaServicesMediaWorkflowTasksOutputReference <a name="MediaServicesMediaWorkflowTasksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_media_workflow

mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableParameterReference">reset_enable_parameter_reference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableWhenReferencedParameterEquals">reset_enable_when_referenced_parameter_equals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetPrerequisites">reset_prerequisites</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_parameter_reference` <a name="reset_enable_parameter_reference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableParameterReference"></a>

```python
def reset_enable_parameter_reference() -> None
```

##### `reset_enable_when_referenced_parameter_equals` <a name="reset_enable_when_referenced_parameter_equals" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableWhenReferencedParameterEquals"></a>

```python
def reset_enable_when_referenced_parameter_equals() -> None
```

##### `reset_prerequisites` <a name="reset_prerequisites" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetPrerequisites"></a>

```python
def reset_prerequisites() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReferenceInput">enable_parameter_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEqualsInput">enable_when_referenced_parameter_equals_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisitesInput">prerequisites_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReference">enable_parameter_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEquals">enable_when_referenced_parameter_equals</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisites">prerequisites</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_parameter_reference_input`<sup>Optional</sup> <a name="enable_parameter_reference_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReferenceInput"></a>

```python
enable_parameter_reference_input: str
```

- *Type:* str

---

##### `enable_when_referenced_parameter_equals_input`<sup>Optional</sup> <a name="enable_when_referenced_parameter_equals_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEqualsInput"></a>

```python
enable_when_referenced_parameter_equals_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `prerequisites_input`<sup>Optional</sup> <a name="prerequisites_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisitesInput"></a>

```python
prerequisites_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `enable_parameter_reference`<sup>Required</sup> <a name="enable_parameter_reference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReference"></a>

```python
enable_parameter_reference: str
```

- *Type:* str

---

##### `enable_when_referenced_parameter_equals`<sup>Required</sup> <a name="enable_when_referenced_parameter_equals" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEquals"></a>

```python
enable_when_referenced_parameter_equals: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `prerequisites`<sup>Required</sup> <a name="prerequisites" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisites"></a>

```python
prerequisites: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaServicesMediaWorkflowTasks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>]

---


### MediaServicesMediaWorkflowTimeoutsOutputReference <a name="MediaServicesMediaWorkflowTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import media_services_media_workflow

mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaServicesMediaWorkflowTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>]

---



