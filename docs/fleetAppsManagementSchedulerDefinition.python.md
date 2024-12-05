# `fleetAppsManagementSchedulerDefinition` Submodule <a name="`fleetAppsManagementSchedulerDefinition` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementSchedulerDefinition <a name="FleetAppsManagementSchedulerDefinition" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition oci_fleet_apps_management_scheduler_definition}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_groups: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionActionGroups]],
  compartment_id: str,
  schedule: FleetAppsManagementSchedulerDefinitionSchedule,
  activity_initiation_cut_off: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  run_books: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooks]] = None,
  timeouts: FleetAppsManagementSchedulerDefinitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.actionGroups">action_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>]]</code> | action_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#compartment_id FleetAppsManagementSchedulerDefinition#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a></code> | schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.activityInitiationCutOff">activity_initiation_cut_off</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#activity_initiation_cut_off FleetAppsManagementSchedulerDefinition#activity_initiation_cut_off}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#defined_tags FleetAppsManagementSchedulerDefinition#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#description FleetAppsManagementSchedulerDefinition#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#display_name FleetAppsManagementSchedulerDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#freeform_tags FleetAppsManagementSchedulerDefinition#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.runBooks">run_books</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>]]</code> | run_books block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_groups`<sup>Required</sup> <a name="action_groups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.actionGroups"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>]]

action_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#action_groups FleetAppsManagementSchedulerDefinition#action_groups}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#compartment_id FleetAppsManagementSchedulerDefinition#compartment_id}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.schedule"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#schedule FleetAppsManagementSchedulerDefinition#schedule}

---

##### `activity_initiation_cut_off`<sup>Optional</sup> <a name="activity_initiation_cut_off" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.activityInitiationCutOff"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#activity_initiation_cut_off FleetAppsManagementSchedulerDefinition#activity_initiation_cut_off}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#defined_tags FleetAppsManagementSchedulerDefinition#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#description FleetAppsManagementSchedulerDefinition#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#display_name FleetAppsManagementSchedulerDefinition#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#freeform_tags FleetAppsManagementSchedulerDefinition#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `run_books`<sup>Optional</sup> <a name="run_books" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.runBooks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>]]

run_books block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#run_books FleetAppsManagementSchedulerDefinition#run_books}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#timeouts FleetAppsManagementSchedulerDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putActionGroups">put_action_groups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putRunBooks">put_run_books</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetActivityInitiationCutOff">reset_activity_initiation_cut_off</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetRunBooks">reset_run_books</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action_groups` <a name="put_action_groups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putActionGroups"></a>

```python
def put_action_groups(
  value: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionActionGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putActionGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>]]

---

##### `put_run_books` <a name="put_run_books" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putRunBooks"></a>

```python
def put_run_books(
  value: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putRunBooks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>]]

---

##### `put_schedule` <a name="put_schedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putSchedule"></a>

```python
def put_schedule(
  execution_startdate: str,
  type: str,
  duration: str = None,
  maintenance_window_id: str = None,
  recurrences: str = None
) -> None
```

###### `execution_startdate`<sup>Required</sup> <a name="execution_startdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putSchedule.parameter.executionStartdate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#execution_startdate FleetAppsManagementSchedulerDefinition#execution_startdate}.

---

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putSchedule.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#type FleetAppsManagementSchedulerDefinition#type}.

---

###### `duration`<sup>Optional</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putSchedule.parameter.duration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#duration FleetAppsManagementSchedulerDefinition#duration}.

---

###### `maintenance_window_id`<sup>Optional</sup> <a name="maintenance_window_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putSchedule.parameter.maintenanceWindowId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#maintenance_window_id FleetAppsManagementSchedulerDefinition#maintenance_window_id}.

---

###### `recurrences`<sup>Optional</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putSchedule.parameter.recurrences"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#recurrences FleetAppsManagementSchedulerDefinition#recurrences}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#create FleetAppsManagementSchedulerDefinition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#delete FleetAppsManagementSchedulerDefinition#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#update FleetAppsManagementSchedulerDefinition#update}.

---

##### `reset_activity_initiation_cut_off` <a name="reset_activity_initiation_cut_off" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetActivityInitiationCutOff"></a>

```python
def reset_activity_initiation_cut_off() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_run_books` <a name="reset_run_books" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetRunBooks"></a>

```python
def reset_run_books() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FleetAppsManagementSchedulerDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FleetAppsManagementSchedulerDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FleetAppsManagementSchedulerDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FleetAppsManagementSchedulerDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementSchedulerDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroups">action_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList">FleetAppsManagementSchedulerDefinitionActionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroupTypes">action_group_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.applicationTypes">application_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedActionGroups">count_of_affected_action_groups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedResources">count_of_affected_resources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedTargets">count_of_affected_targets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycleOperations">lifecycle_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.products">products</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.resourceRegion">resource_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.runBooks">run_books</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList">FleetAppsManagementSchedulerDefinitionRunBooksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference">FleetAppsManagementSchedulerDefinitionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeOfNextRun">time_of_next_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference">FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroupsInput">action_groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.activityInitiationCutOffInput">activity_initiation_cut_off_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.runBooksInput">run_books_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.scheduleInput">schedule_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.activityInitiationCutOff">activity_initiation_cut_off</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_groups`<sup>Required</sup> <a name="action_groups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroups"></a>

```python
action_groups: FleetAppsManagementSchedulerDefinitionActionGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList">FleetAppsManagementSchedulerDefinitionActionGroupsList</a>

---

##### `action_group_types`<sup>Required</sup> <a name="action_group_types" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroupTypes"></a>

```python
action_group_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `application_types`<sup>Required</sup> <a name="application_types" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.applicationTypes"></a>

```python
application_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `count_of_affected_action_groups`<sup>Required</sup> <a name="count_of_affected_action_groups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedActionGroups"></a>

```python
count_of_affected_action_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count_of_affected_resources`<sup>Required</sup> <a name="count_of_affected_resources" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedResources"></a>

```python
count_of_affected_resources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count_of_affected_targets`<sup>Required</sup> <a name="count_of_affected_targets" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedTargets"></a>

```python
count_of_affected_targets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lifecycle_operations`<sup>Required</sup> <a name="lifecycle_operations" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycleOperations"></a>

```python
lifecycle_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `products`<sup>Required</sup> <a name="products" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.products"></a>

```python
products: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_region`<sup>Required</sup> <a name="resource_region" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.resourceRegion"></a>

```python
resource_region: str
```

- *Type:* str

---

##### `run_books`<sup>Required</sup> <a name="run_books" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.runBooks"></a>

```python
run_books: FleetAppsManagementSchedulerDefinitionRunBooksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList">FleetAppsManagementSchedulerDefinitionRunBooksList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.schedule"></a>

```python
schedule: FleetAppsManagementSchedulerDefinitionScheduleOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference">FleetAppsManagementSchedulerDefinitionScheduleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_next_run`<sup>Required</sup> <a name="time_of_next_run" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeOfNextRun"></a>

```python
time_of_next_run: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeouts"></a>

```python
timeouts: FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference">FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `action_groups_input`<sup>Optional</sup> <a name="action_groups_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroupsInput"></a>

```python
action_groups_input: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionActionGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>]]

---

##### `activity_initiation_cut_off_input`<sup>Optional</sup> <a name="activity_initiation_cut_off_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.activityInitiationCutOffInput"></a>

```python
activity_initiation_cut_off_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `run_books_input`<sup>Optional</sup> <a name="run_books_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.runBooksInput"></a>

```python
run_books_input: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>]]

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.scheduleInput"></a>

```python
schedule_input: FleetAppsManagementSchedulerDefinitionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FleetAppsManagementSchedulerDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a>]

---

##### `activity_initiation_cut_off`<sup>Required</sup> <a name="activity_initiation_cut_off" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.activityInitiationCutOff"></a>

```python
activity_initiation_cut_off: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementSchedulerDefinitionActionGroups <a name="FleetAppsManagementSchedulerDefinitionActionGroups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups(
  resource_id: str,
  runbook_id: str,
  application_type: str = None,
  lifecycle_operation: str = None,
  product: str = None,
  subjects: typing.List[str] = None,
  target_id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#resource_id FleetAppsManagementSchedulerDefinition#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.runbookId">runbook_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#runbook_id FleetAppsManagementSchedulerDefinition#runbook_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.applicationType">application_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#application_type FleetAppsManagementSchedulerDefinition#application_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.lifecycleOperation">lifecycle_operation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#lifecycle_operation FleetAppsManagementSchedulerDefinition#lifecycle_operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.product">product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#product FleetAppsManagementSchedulerDefinition#product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.subjects">subjects</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#subjects FleetAppsManagementSchedulerDefinition#subjects}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#target_id FleetAppsManagementSchedulerDefinition#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#type FleetAppsManagementSchedulerDefinition#type}. |

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#resource_id FleetAppsManagementSchedulerDefinition#resource_id}.

---

##### `runbook_id`<sup>Required</sup> <a name="runbook_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.runbookId"></a>

```python
runbook_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#runbook_id FleetAppsManagementSchedulerDefinition#runbook_id}.

---

##### `application_type`<sup>Optional</sup> <a name="application_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#application_type FleetAppsManagementSchedulerDefinition#application_type}.

---

##### `lifecycle_operation`<sup>Optional</sup> <a name="lifecycle_operation" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.lifecycleOperation"></a>

```python
lifecycle_operation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#lifecycle_operation FleetAppsManagementSchedulerDefinition#lifecycle_operation}.

---

##### `product`<sup>Optional</sup> <a name="product" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.product"></a>

```python
product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#product FleetAppsManagementSchedulerDefinition#product}.

---

##### `subjects`<sup>Optional</sup> <a name="subjects" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.subjects"></a>

```python
subjects: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#subjects FleetAppsManagementSchedulerDefinition#subjects}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#target_id FleetAppsManagementSchedulerDefinition#target_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#type FleetAppsManagementSchedulerDefinition#type}.

---

### FleetAppsManagementSchedulerDefinitionConfig <a name="FleetAppsManagementSchedulerDefinitionConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_groups: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionActionGroups]],
  compartment_id: str,
  schedule: FleetAppsManagementSchedulerDefinitionSchedule,
  activity_initiation_cut_off: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  run_books: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooks]] = None,
  timeouts: FleetAppsManagementSchedulerDefinitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.actionGroups">action_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>]]</code> | action_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#compartment_id FleetAppsManagementSchedulerDefinition#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a></code> | schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.activityInitiationCutOff">activity_initiation_cut_off</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#activity_initiation_cut_off FleetAppsManagementSchedulerDefinition#activity_initiation_cut_off}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#defined_tags FleetAppsManagementSchedulerDefinition#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#description FleetAppsManagementSchedulerDefinition#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#display_name FleetAppsManagementSchedulerDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#freeform_tags FleetAppsManagementSchedulerDefinition#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.runBooks">run_books</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>]]</code> | run_books block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_groups`<sup>Required</sup> <a name="action_groups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.actionGroups"></a>

```python
action_groups: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionActionGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>]]

action_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#action_groups FleetAppsManagementSchedulerDefinition#action_groups}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#compartment_id FleetAppsManagementSchedulerDefinition#compartment_id}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.schedule"></a>

```python
schedule: FleetAppsManagementSchedulerDefinitionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#schedule FleetAppsManagementSchedulerDefinition#schedule}

---

##### `activity_initiation_cut_off`<sup>Optional</sup> <a name="activity_initiation_cut_off" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.activityInitiationCutOff"></a>

```python
activity_initiation_cut_off: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#activity_initiation_cut_off FleetAppsManagementSchedulerDefinition#activity_initiation_cut_off}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#defined_tags FleetAppsManagementSchedulerDefinition#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#description FleetAppsManagementSchedulerDefinition#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#display_name FleetAppsManagementSchedulerDefinition#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#freeform_tags FleetAppsManagementSchedulerDefinition#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `run_books`<sup>Optional</sup> <a name="run_books" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.runBooks"></a>

```python
run_books: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>]]

run_books block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#run_books FleetAppsManagementSchedulerDefinition#run_books}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.timeouts"></a>

```python
timeouts: FleetAppsManagementSchedulerDefinitionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#timeouts FleetAppsManagementSchedulerDefinition#timeouts}

---

### FleetAppsManagementSchedulerDefinitionRunBooks <a name="FleetAppsManagementSchedulerDefinitionRunBooks" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks(
  id: str,
  input_parameters: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooksInputParameters]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.property.inputParameters">input_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>]]</code> | input_parameters block. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_parameters`<sup>Optional</sup> <a name="input_parameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.property.inputParameters"></a>

```python
input_parameters: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooksInputParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>]]

input_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#input_parameters FleetAppsManagementSchedulerDefinition#input_parameters}

---

### FleetAppsManagementSchedulerDefinitionRunBooksInputParameters <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters(
  step_name: str,
  arguments: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.property.stepName">step_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#step_name FleetAppsManagementSchedulerDefinition#step_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.property.arguments">arguments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>]]</code> | arguments block. |

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#step_name FleetAppsManagementSchedulerDefinition#step_name}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.property.arguments"></a>

```python
arguments: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>]]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#arguments FleetAppsManagementSchedulerDefinition#arguments}

---

### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments(
  name: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#name FleetAppsManagementSchedulerDefinition#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#value FleetAppsManagementSchedulerDefinition#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#name FleetAppsManagementSchedulerDefinition#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#value FleetAppsManagementSchedulerDefinition#value}.

---

### FleetAppsManagementSchedulerDefinitionSchedule <a name="FleetAppsManagementSchedulerDefinitionSchedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule(
  execution_startdate: str,
  type: str,
  duration: str = None,
  maintenance_window_id: str = None,
  recurrences: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.executionStartdate">execution_startdate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#execution_startdate FleetAppsManagementSchedulerDefinition#execution_startdate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#type FleetAppsManagementSchedulerDefinition#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#duration FleetAppsManagementSchedulerDefinition#duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.maintenanceWindowId">maintenance_window_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#maintenance_window_id FleetAppsManagementSchedulerDefinition#maintenance_window_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.recurrences">recurrences</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#recurrences FleetAppsManagementSchedulerDefinition#recurrences}. |

---

##### `execution_startdate`<sup>Required</sup> <a name="execution_startdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.executionStartdate"></a>

```python
execution_startdate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#execution_startdate FleetAppsManagementSchedulerDefinition#execution_startdate}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#type FleetAppsManagementSchedulerDefinition#type}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#duration FleetAppsManagementSchedulerDefinition#duration}.

---

##### `maintenance_window_id`<sup>Optional</sup> <a name="maintenance_window_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.maintenanceWindowId"></a>

```python
maintenance_window_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#maintenance_window_id FleetAppsManagementSchedulerDefinition#maintenance_window_id}.

---

##### `recurrences`<sup>Optional</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.recurrences"></a>

```python
recurrences: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#recurrences FleetAppsManagementSchedulerDefinition#recurrences}.

---

### FleetAppsManagementSchedulerDefinitionTimeouts <a name="FleetAppsManagementSchedulerDefinitionTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#create FleetAppsManagementSchedulerDefinition#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#delete FleetAppsManagementSchedulerDefinition#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#update FleetAppsManagementSchedulerDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#create FleetAppsManagementSchedulerDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#delete FleetAppsManagementSchedulerDefinition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#update FleetAppsManagementSchedulerDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementSchedulerDefinitionActionGroupsList <a name="FleetAppsManagementSchedulerDefinitionActionGroupsList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionActionGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>]]

---


### FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference <a name="FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetApplicationType">reset_application_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetLifecycleOperation">reset_lifecycle_operation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetProduct">reset_product</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetSubjects">reset_subjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetTargetId">reset_target_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_type` <a name="reset_application_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetApplicationType"></a>

```python
def reset_application_type() -> None
```

##### `reset_lifecycle_operation` <a name="reset_lifecycle_operation" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetLifecycleOperation"></a>

```python
def reset_lifecycle_operation() -> None
```

##### `reset_product` <a name="reset_product" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetProduct"></a>

```python
def reset_product() -> None
```

##### `reset_subjects` <a name="reset_subjects" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetSubjects"></a>

```python
def reset_subjects() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetTargetId"></a>

```python
def reset_target_id() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationTypeInput">application_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperationInput">lifecycle_operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookIdInput">runbook_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjectsInput">subjects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationType">application_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperation">lifecycle_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookId">runbook_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjects">subjects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_type_input`<sup>Optional</sup> <a name="application_type_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationTypeInput"></a>

```python
application_type_input: str
```

- *Type:* str

---

##### `lifecycle_operation_input`<sup>Optional</sup> <a name="lifecycle_operation_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperationInput"></a>

```python
lifecycle_operation_input: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `runbook_id_input`<sup>Optional</sup> <a name="runbook_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookIdInput"></a>

```python
runbook_id_input: str
```

- *Type:* str

---

##### `subjects_input`<sup>Optional</sup> <a name="subjects_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjectsInput"></a>

```python
subjects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

---

##### `lifecycle_operation`<sup>Required</sup> <a name="lifecycle_operation" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperation"></a>

```python
lifecycle_operation: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `runbook_id`<sup>Required</sup> <a name="runbook_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookId"></a>

```python
runbook_id: str
```

- *Type:* str

---

##### `subjects`<sup>Required</sup> <a name="subjects" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjects"></a>

```python
subjects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FleetAppsManagementSchedulerDefinitionActionGroups]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>]

---


### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>]]

---


### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>]

---


### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooksInputParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>]]

---


### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.putArguments">put_arguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resetArguments">reset_arguments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_arguments` <a name="put_arguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.putArguments"></a>

```python
def put_arguments(
  value: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.putArguments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>]]

---

##### `reset_arguments` <a name="reset_arguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resetArguments"></a>

```python
def reset_arguments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.arguments">arguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.argumentsInput">arguments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepNameInput">step_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepName">step_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.arguments"></a>

```python
arguments: FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList</a>

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.argumentsInput"></a>

```python
arguments_input: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>]]

---

##### `step_name_input`<sup>Optional</sup> <a name="step_name_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepNameInput"></a>

```python
step_name_input: str
```

- *Type:* str

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FleetAppsManagementSchedulerDefinitionRunBooksInputParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>]

---


### FleetAppsManagementSchedulerDefinitionRunBooksList <a name="FleetAppsManagementSchedulerDefinitionRunBooksList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FleetAppsManagementSchedulerDefinitionRunBooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>]]

---


### FleetAppsManagementSchedulerDefinitionRunBooksOutputReference <a name="FleetAppsManagementSchedulerDefinitionRunBooksOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.putInputParameters">put_input_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resetInputParameters">reset_input_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input_parameters` <a name="put_input_parameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.putInputParameters"></a>

```python
def put_input_parameters(
  value: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooksInputParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.putInputParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>]]

---

##### `reset_input_parameters` <a name="reset_input_parameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resetInputParameters"></a>

```python
def reset_input_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParameters">input_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParametersInput">input_parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_parameters`<sup>Required</sup> <a name="input_parameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParameters"></a>

```python
input_parameters: FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_parameters_input`<sup>Optional</sup> <a name="input_parameters_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParametersInput"></a>

```python
input_parameters_input: typing.Union[IResolvable, typing.List[FleetAppsManagementSchedulerDefinitionRunBooksInputParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FleetAppsManagementSchedulerDefinitionRunBooks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>]

---


### FleetAppsManagementSchedulerDefinitionScheduleOutputReference <a name="FleetAppsManagementSchedulerDefinitionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetMaintenanceWindowId">reset_maintenance_window_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetRecurrences">reset_recurrences</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration` <a name="reset_duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_maintenance_window_id` <a name="reset_maintenance_window_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetMaintenanceWindowId"></a>

```python
def reset_maintenance_window_id() -> None
```

##### `reset_recurrences` <a name="reset_recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetRecurrences"></a>

```python
def reset_recurrences() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdateInput">execution_startdate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowIdInput">maintenance_window_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrencesInput">recurrences_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdate">execution_startdate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowId">maintenance_window_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrences">recurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `execution_startdate_input`<sup>Optional</sup> <a name="execution_startdate_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdateInput"></a>

```python
execution_startdate_input: str
```

- *Type:* str

---

##### `maintenance_window_id_input`<sup>Optional</sup> <a name="maintenance_window_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowIdInput"></a>

```python
maintenance_window_id_input: str
```

- *Type:* str

---

##### `recurrences_input`<sup>Optional</sup> <a name="recurrences_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrencesInput"></a>

```python
recurrences_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `execution_startdate`<sup>Required</sup> <a name="execution_startdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdate"></a>

```python
execution_startdate: str
```

- *Type:* str

---

##### `maintenance_window_id`<sup>Required</sup> <a name="maintenance_window_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowId"></a>

```python
maintenance_window_id: str
```

- *Type:* str

---

##### `recurrences`<sup>Required</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrences"></a>

```python
recurrences: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.internalValue"></a>

```python
internal_value: FleetAppsManagementSchedulerDefinitionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a>

---


### FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference <a name="FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_scheduler_definition

fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FleetAppsManagementSchedulerDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a>]

---



