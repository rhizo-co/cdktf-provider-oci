# `coreInstanceMaintenanceEvent` Submodule <a name="`coreInstanceMaintenanceEvent` Submodule" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreInstanceMaintenanceEvent <a name="CoreInstanceMaintenanceEvent" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event oci_core_instance_maintenance_event}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance_maintenance_event

coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_maintenance_event_id: str,
  alternative_resolution_action: str = None,
  can_delete_local_storage: typing.Union[bool, IResolvable] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: CoreInstanceMaintenanceEventTimeouts = None,
  time_window_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.instanceMaintenanceEventId">instance_maintenance_event_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#instance_maintenance_event_id CoreInstanceMaintenanceEvent#instance_maintenance_event_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.alternativeResolutionAction">alternative_resolution_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#alternative_resolution_action CoreInstanceMaintenanceEvent#alternative_resolution_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.canDeleteLocalStorage">can_delete_local_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#can_delete_local_storage CoreInstanceMaintenanceEvent#can_delete_local_storage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#defined_tags CoreInstanceMaintenanceEvent#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#display_name CoreInstanceMaintenanceEvent#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#freeform_tags CoreInstanceMaintenanceEvent#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#id CoreInstanceMaintenanceEvent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.timeWindowStart">time_window_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#time_window_start CoreInstanceMaintenanceEvent#time_window_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_maintenance_event_id`<sup>Required</sup> <a name="instance_maintenance_event_id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.instanceMaintenanceEventId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#instance_maintenance_event_id CoreInstanceMaintenanceEvent#instance_maintenance_event_id}.

---

##### `alternative_resolution_action`<sup>Optional</sup> <a name="alternative_resolution_action" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.alternativeResolutionAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#alternative_resolution_action CoreInstanceMaintenanceEvent#alternative_resolution_action}.

---

##### `can_delete_local_storage`<sup>Optional</sup> <a name="can_delete_local_storage" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.canDeleteLocalStorage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#can_delete_local_storage CoreInstanceMaintenanceEvent#can_delete_local_storage}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#defined_tags CoreInstanceMaintenanceEvent#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#display_name CoreInstanceMaintenanceEvent#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#freeform_tags CoreInstanceMaintenanceEvent#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#id CoreInstanceMaintenanceEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#timeouts CoreInstanceMaintenanceEvent#timeouts}

---

##### `time_window_start`<sup>Optional</sup> <a name="time_window_start" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.timeWindowStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#time_window_start CoreInstanceMaintenanceEvent#time_window_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetAlternativeResolutionAction">reset_alternative_resolution_action</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetCanDeleteLocalStorage">reset_can_delete_local_storage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeWindowStart">reset_time_window_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#create CoreInstanceMaintenanceEvent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#delete CoreInstanceMaintenanceEvent#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#update CoreInstanceMaintenanceEvent#update}.

---

##### `reset_alternative_resolution_action` <a name="reset_alternative_resolution_action" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetAlternativeResolutionAction"></a>

```python
def reset_alternative_resolution_action() -> None
```

##### `reset_can_delete_local_storage` <a name="reset_can_delete_local_storage" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetCanDeleteLocalStorage"></a>

```python
def reset_can_delete_local_storage() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_window_start` <a name="reset_time_window_start" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeWindowStart"></a>

```python
def reset_time_window_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance_maintenance_event

coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance_maintenance_event

coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance_maintenance_event

coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance_maintenance_event

coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreInstanceMaintenanceEvent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreInstanceMaintenanceEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreInstanceMaintenanceEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.additionalDetails">additional_details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActions">alternative_resolution_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canReschedule">can_reschedule</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.correlationToken">correlation_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.estimatedDuration">estimated_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceAction">instance_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceCategory">maintenance_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceReason">maintenance_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.startWindowDuration">start_window_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeHardDueDate">time_hard_due_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference">CoreInstanceMaintenanceEventTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActionInput">alternative_resolution_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorageInput">can_delete_local_storage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventIdInput">instance_maintenance_event_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStartInput">time_window_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionAction">alternative_resolution_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorage">can_delete_local_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventId">instance_maintenance_event_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStart">time_window_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_details`<sup>Required</sup> <a name="additional_details" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.additionalDetails"></a>

```python
additional_details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `alternative_resolution_actions`<sup>Required</sup> <a name="alternative_resolution_actions" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActions"></a>

```python
alternative_resolution_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `can_reschedule`<sup>Required</sup> <a name="can_reschedule" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canReschedule"></a>

```python
can_reschedule: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `correlation_token`<sup>Required</sup> <a name="correlation_token" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.correlationToken"></a>

```python
correlation_token: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `estimated_duration`<sup>Required</sup> <a name="estimated_duration" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.estimatedDuration"></a>

```python
estimated_duration: str
```

- *Type:* str

---

##### `instance_action`<sup>Required</sup> <a name="instance_action" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceAction"></a>

```python
instance_action: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `maintenance_category`<sup>Required</sup> <a name="maintenance_category" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceCategory"></a>

```python
maintenance_category: str
```

- *Type:* str

---

##### `maintenance_reason`<sup>Required</sup> <a name="maintenance_reason" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceReason"></a>

```python
maintenance_reason: str
```

- *Type:* str

---

##### `start_window_duration`<sup>Required</sup> <a name="start_window_duration" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.startWindowDuration"></a>

```python
start_window_duration: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_hard_due_date`<sup>Required</sup> <a name="time_hard_due_date" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeHardDueDate"></a>

```python
time_hard_due_date: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeouts"></a>

```python
timeouts: CoreInstanceMaintenanceEventTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference">CoreInstanceMaintenanceEventTimeoutsOutputReference</a>

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `alternative_resolution_action_input`<sup>Optional</sup> <a name="alternative_resolution_action_input" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActionInput"></a>

```python
alternative_resolution_action_input: str
```

- *Type:* str

---

##### `can_delete_local_storage_input`<sup>Optional</sup> <a name="can_delete_local_storage_input" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorageInput"></a>

```python
can_delete_local_storage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_maintenance_event_id_input`<sup>Optional</sup> <a name="instance_maintenance_event_id_input" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventIdInput"></a>

```python
instance_maintenance_event_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreInstanceMaintenanceEventTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a>]

---

##### `time_window_start_input`<sup>Optional</sup> <a name="time_window_start_input" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStartInput"></a>

```python
time_window_start_input: str
```

- *Type:* str

---

##### `alternative_resolution_action`<sup>Required</sup> <a name="alternative_resolution_action" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionAction"></a>

```python
alternative_resolution_action: str
```

- *Type:* str

---

##### `can_delete_local_storage`<sup>Required</sup> <a name="can_delete_local_storage" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorage"></a>

```python
can_delete_local_storage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_maintenance_event_id`<sup>Required</sup> <a name="instance_maintenance_event_id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventId"></a>

```python
instance_maintenance_event_id: str
```

- *Type:* str

---

##### `time_window_start`<sup>Required</sup> <a name="time_window_start" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStart"></a>

```python
time_window_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreInstanceMaintenanceEventConfig <a name="CoreInstanceMaintenanceEventConfig" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance_maintenance_event

coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_maintenance_event_id: str,
  alternative_resolution_action: str = None,
  can_delete_local_storage: typing.Union[bool, IResolvable] = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: CoreInstanceMaintenanceEventTimeouts = None,
  time_window_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.instanceMaintenanceEventId">instance_maintenance_event_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#instance_maintenance_event_id CoreInstanceMaintenanceEvent#instance_maintenance_event_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.alternativeResolutionAction">alternative_resolution_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#alternative_resolution_action CoreInstanceMaintenanceEvent#alternative_resolution_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.canDeleteLocalStorage">can_delete_local_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#can_delete_local_storage CoreInstanceMaintenanceEvent#can_delete_local_storage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#defined_tags CoreInstanceMaintenanceEvent#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#display_name CoreInstanceMaintenanceEvent#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#freeform_tags CoreInstanceMaintenanceEvent#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#id CoreInstanceMaintenanceEvent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeWindowStart">time_window_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#time_window_start CoreInstanceMaintenanceEvent#time_window_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_maintenance_event_id`<sup>Required</sup> <a name="instance_maintenance_event_id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.instanceMaintenanceEventId"></a>

```python
instance_maintenance_event_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#instance_maintenance_event_id CoreInstanceMaintenanceEvent#instance_maintenance_event_id}.

---

##### `alternative_resolution_action`<sup>Optional</sup> <a name="alternative_resolution_action" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.alternativeResolutionAction"></a>

```python
alternative_resolution_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#alternative_resolution_action CoreInstanceMaintenanceEvent#alternative_resolution_action}.

---

##### `can_delete_local_storage`<sup>Optional</sup> <a name="can_delete_local_storage" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.canDeleteLocalStorage"></a>

```python
can_delete_local_storage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#can_delete_local_storage CoreInstanceMaintenanceEvent#can_delete_local_storage}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#defined_tags CoreInstanceMaintenanceEvent#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#display_name CoreInstanceMaintenanceEvent#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#freeform_tags CoreInstanceMaintenanceEvent#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#id CoreInstanceMaintenanceEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeouts"></a>

```python
timeouts: CoreInstanceMaintenanceEventTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#timeouts CoreInstanceMaintenanceEvent#timeouts}

---

##### `time_window_start`<sup>Optional</sup> <a name="time_window_start" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeWindowStart"></a>

```python
time_window_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#time_window_start CoreInstanceMaintenanceEvent#time_window_start}.

---

### CoreInstanceMaintenanceEventTimeouts <a name="CoreInstanceMaintenanceEventTimeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance_maintenance_event

coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#create CoreInstanceMaintenanceEvent#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#delete CoreInstanceMaintenanceEvent#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#update CoreInstanceMaintenanceEvent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#create CoreInstanceMaintenanceEvent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#delete CoreInstanceMaintenanceEvent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#update CoreInstanceMaintenanceEvent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreInstanceMaintenanceEventTimeoutsOutputReference <a name="CoreInstanceMaintenanceEventTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_instance_maintenance_event

coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreInstanceMaintenanceEventTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a>]

---



