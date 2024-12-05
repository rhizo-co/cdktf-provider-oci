# `fleetAppsManagementMaintenanceWindow` Submodule <a name="`fleetAppsManagementMaintenanceWindow` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementMaintenanceWindow <a name="FleetAppsManagementMaintenanceWindow" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window oci_fleet_apps_management_maintenance_window}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_maintenance_window

fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow(
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
  duration: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_outage: typing.Union[bool, IResolvable] = None,
  is_recurring: typing.Union[bool, IResolvable] = None,
  maintenance_window_type: str = None,
  recurrences: str = None,
  task_initiation_cutoff: typing.Union[int, float] = None,
  timeouts: FleetAppsManagementMaintenanceWindowTimeouts = None,
  time_schedule_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#compartment_id FleetAppsManagementMaintenanceWindow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#duration FleetAppsManagementMaintenanceWindow#duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#defined_tags FleetAppsManagementMaintenanceWindow#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#description FleetAppsManagementMaintenanceWindow#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#display_name FleetAppsManagementMaintenanceWindow#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#freeform_tags FleetAppsManagementMaintenanceWindow#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#id FleetAppsManagementMaintenanceWindow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.isOutage">is_outage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_outage FleetAppsManagementMaintenanceWindow#is_outage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.isRecurring">is_recurring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_recurring FleetAppsManagementMaintenanceWindow#is_recurring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.maintenanceWindowType">maintenance_window_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#maintenance_window_type FleetAppsManagementMaintenanceWindow#maintenance_window_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.recurrences">recurrences</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#recurrences FleetAppsManagementMaintenanceWindow#recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.taskInitiationCutoff">task_initiation_cutoff</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#task_initiation_cutoff FleetAppsManagementMaintenanceWindow#task_initiation_cutoff}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.timeScheduleStart">time_schedule_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#time_schedule_start FleetAppsManagementMaintenanceWindow#time_schedule_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#compartment_id FleetAppsManagementMaintenanceWindow#compartment_id}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.duration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#duration FleetAppsManagementMaintenanceWindow#duration}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#defined_tags FleetAppsManagementMaintenanceWindow#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#description FleetAppsManagementMaintenanceWindow#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#display_name FleetAppsManagementMaintenanceWindow#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#freeform_tags FleetAppsManagementMaintenanceWindow#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#id FleetAppsManagementMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_outage`<sup>Optional</sup> <a name="is_outage" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.isOutage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_outage FleetAppsManagementMaintenanceWindow#is_outage}.

---

##### `is_recurring`<sup>Optional</sup> <a name="is_recurring" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.isRecurring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_recurring FleetAppsManagementMaintenanceWindow#is_recurring}.

---

##### `maintenance_window_type`<sup>Optional</sup> <a name="maintenance_window_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.maintenanceWindowType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#maintenance_window_type FleetAppsManagementMaintenanceWindow#maintenance_window_type}.

---

##### `recurrences`<sup>Optional</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.recurrences"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#recurrences FleetAppsManagementMaintenanceWindow#recurrences}.

---

##### `task_initiation_cutoff`<sup>Optional</sup> <a name="task_initiation_cutoff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.taskInitiationCutoff"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#task_initiation_cutoff FleetAppsManagementMaintenanceWindow#task_initiation_cutoff}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#timeouts FleetAppsManagementMaintenanceWindow#timeouts}

---

##### `time_schedule_start`<sup>Optional</sup> <a name="time_schedule_start" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.timeScheduleStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#time_schedule_start FleetAppsManagementMaintenanceWindow#time_schedule_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsOutage">reset_is_outage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsRecurring">reset_is_recurring</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetMaintenanceWindowType">reset_maintenance_window_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetRecurrences">reset_recurrences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTaskInitiationCutoff">reset_task_initiation_cutoff</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeScheduleStart">reset_time_schedule_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#create FleetAppsManagementMaintenanceWindow#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#delete FleetAppsManagementMaintenanceWindow#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#update FleetAppsManagementMaintenanceWindow#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_outage` <a name="reset_is_outage" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsOutage"></a>

```python
def reset_is_outage() -> None
```

##### `reset_is_recurring` <a name="reset_is_recurring" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsRecurring"></a>

```python
def reset_is_recurring() -> None
```

##### `reset_maintenance_window_type` <a name="reset_maintenance_window_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetMaintenanceWindowType"></a>

```python
def reset_maintenance_window_type() -> None
```

##### `reset_recurrences` <a name="reset_recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetRecurrences"></a>

```python
def reset_recurrences() -> None
```

##### `reset_task_initiation_cutoff` <a name="reset_task_initiation_cutoff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTaskInitiationCutoff"></a>

```python
def reset_task_initiation_cutoff() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_schedule_start` <a name="reset_time_schedule_start" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeScheduleStart"></a>

```python
def reset_time_schedule_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FleetAppsManagementMaintenanceWindow resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_maintenance_window

fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_maintenance_window

fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_maintenance_window

fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_maintenance_window

fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FleetAppsManagementMaintenanceWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FleetAppsManagementMaintenanceWindow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FleetAppsManagementMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.resourceRegion">resource_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference">FleetAppsManagementMaintenanceWindowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutageInput">is_outage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurringInput">is_recurring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowTypeInput">maintenance_window_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrencesInput">recurrences_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoffInput">task_initiation_cutoff_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStartInput">time_schedule_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutage">is_outage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurring">is_recurring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowType">maintenance_window_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrences">recurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoff">task_initiation_cutoff</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStart">time_schedule_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `resource_region`<sup>Required</sup> <a name="resource_region" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.resourceRegion"></a>

```python
resource_region: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeouts"></a>

```python
timeouts: FleetAppsManagementMaintenanceWindowTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference">FleetAppsManagementMaintenanceWindowTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_outage_input`<sup>Optional</sup> <a name="is_outage_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutageInput"></a>

```python
is_outage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_recurring_input`<sup>Optional</sup> <a name="is_recurring_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurringInput"></a>

```python
is_recurring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maintenance_window_type_input`<sup>Optional</sup> <a name="maintenance_window_type_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowTypeInput"></a>

```python
maintenance_window_type_input: str
```

- *Type:* str

---

##### `recurrences_input`<sup>Optional</sup> <a name="recurrences_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrencesInput"></a>

```python
recurrences_input: str
```

- *Type:* str

---

##### `task_initiation_cutoff_input`<sup>Optional</sup> <a name="task_initiation_cutoff_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoffInput"></a>

```python
task_initiation_cutoff_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FleetAppsManagementMaintenanceWindowTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>]

---

##### `time_schedule_start_input`<sup>Optional</sup> <a name="time_schedule_start_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStartInput"></a>

```python
time_schedule_start_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_outage`<sup>Required</sup> <a name="is_outage" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutage"></a>

```python
is_outage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_recurring`<sup>Required</sup> <a name="is_recurring" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurring"></a>

```python
is_recurring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maintenance_window_type`<sup>Required</sup> <a name="maintenance_window_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowType"></a>

```python
maintenance_window_type: str
```

- *Type:* str

---

##### `recurrences`<sup>Required</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrences"></a>

```python
recurrences: str
```

- *Type:* str

---

##### `task_initiation_cutoff`<sup>Required</sup> <a name="task_initiation_cutoff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoff"></a>

```python
task_initiation_cutoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_schedule_start`<sup>Required</sup> <a name="time_schedule_start" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStart"></a>

```python
time_schedule_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementMaintenanceWindowConfig <a name="FleetAppsManagementMaintenanceWindowConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_maintenance_window

fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  duration: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_outage: typing.Union[bool, IResolvable] = None,
  is_recurring: typing.Union[bool, IResolvable] = None,
  maintenance_window_type: str = None,
  recurrences: str = None,
  task_initiation_cutoff: typing.Union[int, float] = None,
  timeouts: FleetAppsManagementMaintenanceWindowTimeouts = None,
  time_schedule_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#compartment_id FleetAppsManagementMaintenanceWindow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#duration FleetAppsManagementMaintenanceWindow#duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#defined_tags FleetAppsManagementMaintenanceWindow#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#description FleetAppsManagementMaintenanceWindow#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#display_name FleetAppsManagementMaintenanceWindow#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#freeform_tags FleetAppsManagementMaintenanceWindow#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#id FleetAppsManagementMaintenanceWindow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isOutage">is_outage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_outage FleetAppsManagementMaintenanceWindow#is_outage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isRecurring">is_recurring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_recurring FleetAppsManagementMaintenanceWindow#is_recurring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.maintenanceWindowType">maintenance_window_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#maintenance_window_type FleetAppsManagementMaintenanceWindow#maintenance_window_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.recurrences">recurrences</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#recurrences FleetAppsManagementMaintenanceWindow#recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.taskInitiationCutoff">task_initiation_cutoff</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#task_initiation_cutoff FleetAppsManagementMaintenanceWindow#task_initiation_cutoff}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeScheduleStart">time_schedule_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#time_schedule_start FleetAppsManagementMaintenanceWindow#time_schedule_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#compartment_id FleetAppsManagementMaintenanceWindow#compartment_id}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#duration FleetAppsManagementMaintenanceWindow#duration}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#defined_tags FleetAppsManagementMaintenanceWindow#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#description FleetAppsManagementMaintenanceWindow#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#display_name FleetAppsManagementMaintenanceWindow#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#freeform_tags FleetAppsManagementMaintenanceWindow#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#id FleetAppsManagementMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_outage`<sup>Optional</sup> <a name="is_outage" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isOutage"></a>

```python
is_outage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_outage FleetAppsManagementMaintenanceWindow#is_outage}.

---

##### `is_recurring`<sup>Optional</sup> <a name="is_recurring" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isRecurring"></a>

```python
is_recurring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_recurring FleetAppsManagementMaintenanceWindow#is_recurring}.

---

##### `maintenance_window_type`<sup>Optional</sup> <a name="maintenance_window_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.maintenanceWindowType"></a>

```python
maintenance_window_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#maintenance_window_type FleetAppsManagementMaintenanceWindow#maintenance_window_type}.

---

##### `recurrences`<sup>Optional</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.recurrences"></a>

```python
recurrences: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#recurrences FleetAppsManagementMaintenanceWindow#recurrences}.

---

##### `task_initiation_cutoff`<sup>Optional</sup> <a name="task_initiation_cutoff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.taskInitiationCutoff"></a>

```python
task_initiation_cutoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#task_initiation_cutoff FleetAppsManagementMaintenanceWindow#task_initiation_cutoff}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeouts"></a>

```python
timeouts: FleetAppsManagementMaintenanceWindowTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#timeouts FleetAppsManagementMaintenanceWindow#timeouts}

---

##### `time_schedule_start`<sup>Optional</sup> <a name="time_schedule_start" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeScheduleStart"></a>

```python
time_schedule_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#time_schedule_start FleetAppsManagementMaintenanceWindow#time_schedule_start}.

---

### FleetAppsManagementMaintenanceWindowTimeouts <a name="FleetAppsManagementMaintenanceWindowTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_maintenance_window

fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#create FleetAppsManagementMaintenanceWindow#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#delete FleetAppsManagementMaintenanceWindow#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#update FleetAppsManagementMaintenanceWindow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#create FleetAppsManagementMaintenanceWindow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#delete FleetAppsManagementMaintenanceWindow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#update FleetAppsManagementMaintenanceWindow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementMaintenanceWindowTimeoutsOutputReference <a name="FleetAppsManagementMaintenanceWindowTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_maintenance_window

fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FleetAppsManagementMaintenanceWindowTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>]

---



