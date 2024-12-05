# `resourceSchedulerSchedule` Submodule <a name="`resourceSchedulerSchedule` Submodule" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceSchedulerSchedule <a name="ResourceSchedulerSchedule" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule oci_resource_scheduler_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  compartment_id: str,
  recurrence_details: str,
  recurrence_type: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  resource_filters: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResourceFilters]] = None,
  resources: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResources]] = None,
  state: str = None,
  time_ends: str = None,
  timeouts: ResourceSchedulerScheduleTimeouts = None,
  time_starts: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.recurrenceDetails">recurrence_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.recurrenceType">recurrence_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.resourceFilters">resource_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>]]</code> | resource_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.resources">resources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>]]</code> | resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.timeEnds">time_ends</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.timeStarts">time_starts</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}.

---

##### `recurrence_details`<sup>Required</sup> <a name="recurrence_details" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.recurrenceDetails"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}.

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.recurrenceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_filters`<sup>Optional</sup> <a name="resource_filters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.resourceFilters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>]]

resource_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#resource_filters ResourceSchedulerSchedule#resource_filters}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.resources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>]]

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#resources ResourceSchedulerSchedule#resources}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}.

---

##### `time_ends`<sup>Optional</sup> <a name="time_ends" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.timeEnds"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#timeouts ResourceSchedulerSchedule#timeouts}

---

##### `time_starts`<sup>Optional</sup> <a name="time_starts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.timeStarts"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters">put_resource_filters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResourceFilters">reset_resource_filters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeEnds">reset_time_ends</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeStarts">reset_time_starts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_resource_filters` <a name="put_resource_filters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters"></a>

```python
def put_resource_filters(
  value: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResourceFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>]]

---

##### `put_resources` <a name="put_resources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources"></a>

```python
def put_resources(
  value: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#create ResourceSchedulerSchedule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#delete ResourceSchedulerSchedule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#update ResourceSchedulerSchedule#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_filters` <a name="reset_resource_filters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResourceFilters"></a>

```python
def reset_resource_filters() -> None
```

##### `reset_resources` <a name="reset_resources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_time_ends` <a name="reset_time_ends" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeEnds"></a>

```python
def reset_time_ends() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_starts` <a name="reset_time_starts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeStarts"></a>

```python
def reset_time_starts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ResourceSchedulerSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ResourceSchedulerSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourceSchedulerSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourceSchedulerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourceSchedulerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFilters">resource_filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList">ResourceSchedulerScheduleResourceFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resources">resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList">ResourceSchedulerScheduleResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeLastRun">time_last_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeNextRun">time_next_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference">ResourceSchedulerScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetailsInput">recurrence_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceTypeInput">recurrence_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFiltersInput">resource_filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourcesInput">resources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEndsInput">time_ends_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStartsInput">time_starts_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetails">recurrence_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEnds">time_ends</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStarts">time_starts</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_filters`<sup>Required</sup> <a name="resource_filters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFilters"></a>

```python
resource_filters: ResourceSchedulerScheduleResourceFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList">ResourceSchedulerScheduleResourceFiltersList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resources"></a>

```python
resources: ResourceSchedulerScheduleResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList">ResourceSchedulerScheduleResourcesList</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_run`<sup>Required</sup> <a name="time_last_run" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeLastRun"></a>

```python
time_last_run: str
```

- *Type:* str

---

##### `time_next_run`<sup>Required</sup> <a name="time_next_run" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeNextRun"></a>

```python
time_next_run: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeouts"></a>

```python
timeouts: ResourceSchedulerScheduleTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference">ResourceSchedulerScheduleTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `recurrence_details_input`<sup>Optional</sup> <a name="recurrence_details_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetailsInput"></a>

```python
recurrence_details_input: str
```

- *Type:* str

---

##### `recurrence_type_input`<sup>Optional</sup> <a name="recurrence_type_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceTypeInput"></a>

```python
recurrence_type_input: str
```

- *Type:* str

---

##### `resource_filters_input`<sup>Optional</sup> <a name="resource_filters_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFiltersInput"></a>

```python
resource_filters_input: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResourceFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>]]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourcesInput"></a>

```python
resources_input: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>]]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `time_ends_input`<sup>Optional</sup> <a name="time_ends_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEndsInput"></a>

```python
time_ends_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ResourceSchedulerScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>]

---

##### `time_starts_input`<sup>Optional</sup> <a name="time_starts_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStartsInput"></a>

```python
time_starts_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `recurrence_details`<sup>Required</sup> <a name="recurrence_details" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetails"></a>

```python
recurrence_details: str
```

- *Type:* str

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_ends`<sup>Required</sup> <a name="time_ends" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEnds"></a>

```python
time_ends: str
```

- *Type:* str

---

##### `time_starts`<sup>Required</sup> <a name="time_starts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStarts"></a>

```python
time_starts: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceSchedulerScheduleConfig <a name="ResourceSchedulerScheduleConfig" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  compartment_id: str,
  recurrence_details: str,
  recurrence_type: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  resource_filters: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResourceFilters]] = None,
  resources: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResources]] = None,
  state: str = None,
  time_ends: str = None,
  timeouts: ResourceSchedulerScheduleTimeouts = None,
  time_starts: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceDetails">recurrence_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resourceFilters">resource_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>]]</code> | resource_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resources">resources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>]]</code> | resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeEnds">time_ends</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeStarts">time_starts</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}.

---

##### `recurrence_details`<sup>Required</sup> <a name="recurrence_details" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceDetails"></a>

```python
recurrence_details: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}.

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_filters`<sup>Optional</sup> <a name="resource_filters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resourceFilters"></a>

```python
resource_filters: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResourceFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>]]

resource_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#resource_filters ResourceSchedulerSchedule#resource_filters}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resources"></a>

```python
resources: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>]]

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#resources ResourceSchedulerSchedule#resources}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}.

---

##### `time_ends`<sup>Optional</sup> <a name="time_ends" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeEnds"></a>

```python
time_ends: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeouts"></a>

```python
timeouts: ResourceSchedulerScheduleTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#timeouts ResourceSchedulerSchedule#timeouts}

---

##### `time_starts`<sup>Optional</sup> <a name="time_starts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeStarts"></a>

```python
time_starts: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}.

---

### ResourceSchedulerScheduleResourceFilters <a name="ResourceSchedulerScheduleResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters(
  attribute: str,
  condition: str = None,
  should_include_child_compartments: typing.Union[bool, IResolvable] = None,
  value: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResourceFiltersValue]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#attribute ResourceSchedulerSchedule#attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#condition ResourceSchedulerSchedule#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.shouldIncludeChildCompartments">should_include_child_compartments</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#should_include_child_compartments ResourceSchedulerSchedule#should_include_child_compartments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.value">value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>]]</code> | value block. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#attribute ResourceSchedulerSchedule#attribute}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#condition ResourceSchedulerSchedule#condition}.

---

##### `should_include_child_compartments`<sup>Optional</sup> <a name="should_include_child_compartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.shouldIncludeChildCompartments"></a>

```python
should_include_child_compartments: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#should_include_child_compartments ResourceSchedulerSchedule#should_include_child_compartments}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.value"></a>

```python
value: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResourceFiltersValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>]]

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}

---

### ResourceSchedulerScheduleResourceFiltersValue <a name="ResourceSchedulerScheduleResourceFiltersValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue(
  namespace: str = None,
  tag_key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#namespace ResourceSchedulerSchedule#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#tag_key ResourceSchedulerSchedule#tag_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#namespace ResourceSchedulerSchedule#namespace}.

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#tag_key ResourceSchedulerSchedule#tag_key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}.

---

### ResourceSchedulerScheduleResources <a name="ResourceSchedulerScheduleResources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerScheduleResources(
  id: str,
  metadata: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#metadata ResourceSchedulerSchedule#metadata}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#metadata ResourceSchedulerSchedule#metadata}.

---

### ResourceSchedulerScheduleTimeouts <a name="ResourceSchedulerScheduleTimeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#create ResourceSchedulerSchedule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#delete ResourceSchedulerSchedule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#update ResourceSchedulerSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#create ResourceSchedulerSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#delete ResourceSchedulerSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#update ResourceSchedulerSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceSchedulerScheduleResourceFiltersList <a name="ResourceSchedulerScheduleResourceFiltersList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourceSchedulerScheduleResourceFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResourceFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>]]

---


### ResourceSchedulerScheduleResourceFiltersOutputReference <a name="ResourceSchedulerScheduleResourceFiltersOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetShouldIncludeChildCompartments">reset_should_include_child_compartments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue"></a>

```python
def put_value(
  value: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResourceFiltersValue]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>]]

---

##### `reset_condition` <a name="reset_condition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_should_include_child_compartments` <a name="reset_should_include_child_compartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetShouldIncludeChildCompartments"></a>

```python
def reset_should_include_child_compartments() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.value">value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList">ResourceSchedulerScheduleResourceFiltersValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartmentsInput">should_include_child_compartments_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartments">should_include_child_compartments</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.value"></a>

```python
value: ResourceSchedulerScheduleResourceFiltersValueList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList">ResourceSchedulerScheduleResourceFiltersValueList</a>

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `should_include_child_compartments_input`<sup>Optional</sup> <a name="should_include_child_compartments_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartmentsInput"></a>

```python
should_include_child_compartments_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResourceFiltersValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>]]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `should_include_child_compartments`<sup>Required</sup> <a name="should_include_child_compartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartments"></a>

```python
should_include_child_compartments: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceSchedulerScheduleResourceFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>]

---


### ResourceSchedulerScheduleResourceFiltersValueList <a name="ResourceSchedulerScheduleResourceFiltersValueList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourceSchedulerScheduleResourceFiltersValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResourceFiltersValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>]]

---


### ResourceSchedulerScheduleResourceFiltersValueOutputReference <a name="ResourceSchedulerScheduleResourceFiltersValueOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceSchedulerScheduleResourceFiltersValue]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>]

---


### ResourceSchedulerScheduleResourcesList <a name="ResourceSchedulerScheduleResourcesList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourceSchedulerScheduleResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourceSchedulerScheduleResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>]]

---


### ResourceSchedulerScheduleResourcesOutputReference <a name="ResourceSchedulerScheduleResourcesOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metadata` <a name="reset_metadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceSchedulerScheduleResources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>]

---


### ResourceSchedulerScheduleTimeoutsOutputReference <a name="ResourceSchedulerScheduleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import resource_scheduler_schedule

resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceSchedulerScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>]

---



