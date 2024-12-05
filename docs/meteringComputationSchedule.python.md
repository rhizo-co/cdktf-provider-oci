# `meteringComputationSchedule` Submodule <a name="`meteringComputationSchedule` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationSchedule <a name="MeteringComputationSchedule" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule oci_metering_computation_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationSchedule(
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
  name: str,
  result_location: MeteringComputationScheduleResultLocation,
  schedule_recurrences: str,
  time_scheduled: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  output_file_format: str = None,
  query_properties: MeteringComputationScheduleQueryProperties = None,
  saved_report_id: str = None,
  timeouts: MeteringComputationScheduleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_id MeteringComputationSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#name MeteringComputationSchedule#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.resultLocation">result_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a></code> | result_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.scheduleRecurrences">schedule_recurrences</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#schedule_recurrences MeteringComputationSchedule#schedule_recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.timeScheduled">time_scheduled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_scheduled MeteringComputationSchedule#time_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#defined_tags MeteringComputationSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#description MeteringComputationSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#freeform_tags MeteringComputationSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#id MeteringComputationSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.outputFileFormat">output_file_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#output_file_format MeteringComputationSchedule#output_file_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.queryProperties">query_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a></code> | query_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.savedReportId">saved_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#saved_report_id MeteringComputationSchedule#saved_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_id MeteringComputationSchedule#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#name MeteringComputationSchedule#name}.

---

##### `result_location`<sup>Required</sup> <a name="result_location" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.resultLocation"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a>

result_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#result_location MeteringComputationSchedule#result_location}

---

##### `schedule_recurrences`<sup>Required</sup> <a name="schedule_recurrences" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.scheduleRecurrences"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#schedule_recurrences MeteringComputationSchedule#schedule_recurrences}.

---

##### `time_scheduled`<sup>Required</sup> <a name="time_scheduled" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.timeScheduled"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_scheduled MeteringComputationSchedule#time_scheduled}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#defined_tags MeteringComputationSchedule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#description MeteringComputationSchedule#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#freeform_tags MeteringComputationSchedule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#id MeteringComputationSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `output_file_format`<sup>Optional</sup> <a name="output_file_format" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.outputFileFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#output_file_format MeteringComputationSchedule#output_file_format}.

---

##### `query_properties`<sup>Optional</sup> <a name="query_properties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.queryProperties"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a>

query_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#query_properties MeteringComputationSchedule#query_properties}

---

##### `saved_report_id`<sup>Optional</sup> <a name="saved_report_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.savedReportId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#saved_report_id MeteringComputationSchedule#saved_report_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#timeouts MeteringComputationSchedule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties">put_query_properties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putResultLocation">put_result_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetOutputFileFormat">reset_output_file_format</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetQueryProperties">reset_query_properties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetSavedReportId">reset_saved_report_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_query_properties` <a name="put_query_properties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties"></a>

```python
def put_query_properties(
  date_range: MeteringComputationScheduleQueryPropertiesDateRange,
  granularity: str,
  compartment_depth: typing.Union[int, float] = None,
  filter: str = None,
  group_by: typing.List[str] = None,
  group_by_tag: typing.Union[IResolvable, typing.List[MeteringComputationScheduleQueryPropertiesGroupByTag]] = None,
  is_aggregate_by_time: typing.Union[bool, IResolvable] = None,
  query_type: str = None
) -> None
```

###### `date_range`<sup>Required</sup> <a name="date_range" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties.parameter.dateRange"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a>

date_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#date_range MeteringComputationSchedule#date_range}

---

###### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties.parameter.granularity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#granularity MeteringComputationSchedule#granularity}.

---

###### `compartment_depth`<sup>Optional</sup> <a name="compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties.parameter.compartmentDepth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_depth MeteringComputationSchedule#compartment_depth}.

---

###### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#filter MeteringComputationSchedule#filter}.

---

###### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties.parameter.groupBy"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#group_by MeteringComputationSchedule#group_by}.

---

###### `group_by_tag`<sup>Optional</sup> <a name="group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties.parameter.groupByTag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>]]

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#group_by_tag MeteringComputationSchedule#group_by_tag}

---

###### `is_aggregate_by_time`<sup>Optional</sup> <a name="is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties.parameter.isAggregateByTime"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#is_aggregate_by_time MeteringComputationSchedule#is_aggregate_by_time}.

---

###### `query_type`<sup>Optional</sup> <a name="query_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties.parameter.queryType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#query_type MeteringComputationSchedule#query_type}.

---

##### `put_result_location` <a name="put_result_location" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putResultLocation"></a>

```python
def put_result_location(
  bucket: str,
  location_type: str,
  namespace: str,
  region: str
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putResultLocation.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#bucket MeteringComputationSchedule#bucket}.

---

###### `location_type`<sup>Required</sup> <a name="location_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putResultLocation.parameter.locationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#location_type MeteringComputationSchedule#location_type}.

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putResultLocation.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}.

---

###### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putResultLocation.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#region MeteringComputationSchedule#region}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#create MeteringComputationSchedule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#delete MeteringComputationSchedule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#update MeteringComputationSchedule#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_output_file_format` <a name="reset_output_file_format" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetOutputFileFormat"></a>

```python
def reset_output_file_format() -> None
```

##### `reset_query_properties` <a name="reset_query_properties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetQueryProperties"></a>

```python
def reset_query_properties() -> None
```

##### `reset_saved_report_id` <a name="reset_saved_report_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetSavedReportId"></a>

```python
def reset_saved_report_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MeteringComputationSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MeteringComputationSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MeteringComputationSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MeteringComputationSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.queryProperties">query_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference">MeteringComputationScheduleQueryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.resultLocation">result_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference">MeteringComputationScheduleResultLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeNextRun">time_next_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference">MeteringComputationScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.outputFileFormatInput">output_file_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.queryPropertiesInput">query_properties_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.resultLocationInput">result_location_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.savedReportIdInput">saved_report_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.scheduleRecurrencesInput">schedule_recurrences_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeScheduledInput">time_scheduled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.outputFileFormat">output_file_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.savedReportId">saved_report_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.scheduleRecurrences">schedule_recurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeScheduled">time_scheduled</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `query_properties`<sup>Required</sup> <a name="query_properties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.queryProperties"></a>

```python
query_properties: MeteringComputationScheduleQueryPropertiesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference">MeteringComputationScheduleQueryPropertiesOutputReference</a>

---

##### `result_location`<sup>Required</sup> <a name="result_location" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.resultLocation"></a>

```python
result_location: MeteringComputationScheduleResultLocationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference">MeteringComputationScheduleResultLocationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_next_run`<sup>Required</sup> <a name="time_next_run" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeNextRun"></a>

```python
time_next_run: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeouts"></a>

```python
timeouts: MeteringComputationScheduleTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference">MeteringComputationScheduleTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_file_format_input`<sup>Optional</sup> <a name="output_file_format_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.outputFileFormatInput"></a>

```python
output_file_format_input: str
```

- *Type:* str

---

##### `query_properties_input`<sup>Optional</sup> <a name="query_properties_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.queryPropertiesInput"></a>

```python
query_properties_input: MeteringComputationScheduleQueryProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a>

---

##### `result_location_input`<sup>Optional</sup> <a name="result_location_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.resultLocationInput"></a>

```python
result_location_input: MeteringComputationScheduleResultLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a>

---

##### `saved_report_id_input`<sup>Optional</sup> <a name="saved_report_id_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.savedReportIdInput"></a>

```python
saved_report_id_input: str
```

- *Type:* str

---

##### `schedule_recurrences_input`<sup>Optional</sup> <a name="schedule_recurrences_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.scheduleRecurrencesInput"></a>

```python
schedule_recurrences_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MeteringComputationScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>]

---

##### `time_scheduled_input`<sup>Optional</sup> <a name="time_scheduled_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeScheduledInput"></a>

```python
time_scheduled_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_file_format`<sup>Required</sup> <a name="output_file_format" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.outputFileFormat"></a>

```python
output_file_format: str
```

- *Type:* str

---

##### `saved_report_id`<sup>Required</sup> <a name="saved_report_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.savedReportId"></a>

```python
saved_report_id: str
```

- *Type:* str

---

##### `schedule_recurrences`<sup>Required</sup> <a name="schedule_recurrences" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.scheduleRecurrences"></a>

```python
schedule_recurrences: str
```

- *Type:* str

---

##### `time_scheduled`<sup>Required</sup> <a name="time_scheduled" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeScheduled"></a>

```python
time_scheduled: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationScheduleConfig <a name="MeteringComputationScheduleConfig" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  name: str,
  result_location: MeteringComputationScheduleResultLocation,
  schedule_recurrences: str,
  time_scheduled: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  output_file_format: str = None,
  query_properties: MeteringComputationScheduleQueryProperties = None,
  saved_report_id: str = None,
  timeouts: MeteringComputationScheduleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_id MeteringComputationSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#name MeteringComputationSchedule#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.resultLocation">result_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a></code> | result_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.scheduleRecurrences">schedule_recurrences</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#schedule_recurrences MeteringComputationSchedule#schedule_recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.timeScheduled">time_scheduled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_scheduled MeteringComputationSchedule#time_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#defined_tags MeteringComputationSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#description MeteringComputationSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#freeform_tags MeteringComputationSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#id MeteringComputationSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.outputFileFormat">output_file_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#output_file_format MeteringComputationSchedule#output_file_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.queryProperties">query_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a></code> | query_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.savedReportId">saved_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#saved_report_id MeteringComputationSchedule#saved_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_id MeteringComputationSchedule#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#name MeteringComputationSchedule#name}.

---

##### `result_location`<sup>Required</sup> <a name="result_location" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.resultLocation"></a>

```python
result_location: MeteringComputationScheduleResultLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a>

result_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#result_location MeteringComputationSchedule#result_location}

---

##### `schedule_recurrences`<sup>Required</sup> <a name="schedule_recurrences" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.scheduleRecurrences"></a>

```python
schedule_recurrences: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#schedule_recurrences MeteringComputationSchedule#schedule_recurrences}.

---

##### `time_scheduled`<sup>Required</sup> <a name="time_scheduled" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.timeScheduled"></a>

```python
time_scheduled: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_scheduled MeteringComputationSchedule#time_scheduled}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#defined_tags MeteringComputationSchedule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#description MeteringComputationSchedule#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#freeform_tags MeteringComputationSchedule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#id MeteringComputationSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `output_file_format`<sup>Optional</sup> <a name="output_file_format" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.outputFileFormat"></a>

```python
output_file_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#output_file_format MeteringComputationSchedule#output_file_format}.

---

##### `query_properties`<sup>Optional</sup> <a name="query_properties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.queryProperties"></a>

```python
query_properties: MeteringComputationScheduleQueryProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a>

query_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#query_properties MeteringComputationSchedule#query_properties}

---

##### `saved_report_id`<sup>Optional</sup> <a name="saved_report_id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.savedReportId"></a>

```python
saved_report_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#saved_report_id MeteringComputationSchedule#saved_report_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.timeouts"></a>

```python
timeouts: MeteringComputationScheduleTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#timeouts MeteringComputationSchedule#timeouts}

---

### MeteringComputationScheduleQueryProperties <a name="MeteringComputationScheduleQueryProperties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationScheduleQueryProperties(
  date_range: MeteringComputationScheduleQueryPropertiesDateRange,
  granularity: str,
  compartment_depth: typing.Union[int, float] = None,
  filter: str = None,
  group_by: typing.List[str] = None,
  group_by_tag: typing.Union[IResolvable, typing.List[MeteringComputationScheduleQueryPropertiesGroupByTag]] = None,
  is_aggregate_by_time: typing.Union[bool, IResolvable] = None,
  query_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.dateRange">date_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a></code> | date_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.granularity">granularity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#granularity MeteringComputationSchedule#granularity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.compartmentDepth">compartment_depth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_depth MeteringComputationSchedule#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#filter MeteringComputationSchedule#filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#group_by MeteringComputationSchedule#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.groupByTag">group_by_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>]]</code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.isAggregateByTime">is_aggregate_by_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#is_aggregate_by_time MeteringComputationSchedule#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.queryType">query_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#query_type MeteringComputationSchedule#query_type}. |

---

##### `date_range`<sup>Required</sup> <a name="date_range" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.dateRange"></a>

```python
date_range: MeteringComputationScheduleQueryPropertiesDateRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a>

date_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#date_range MeteringComputationSchedule#date_range}

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#granularity MeteringComputationSchedule#granularity}.

---

##### `compartment_depth`<sup>Optional</sup> <a name="compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.compartmentDepth"></a>

```python
compartment_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_depth MeteringComputationSchedule#compartment_depth}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#filter MeteringComputationSchedule#filter}.

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#group_by MeteringComputationSchedule#group_by}.

---

##### `group_by_tag`<sup>Optional</sup> <a name="group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.groupByTag"></a>

```python
group_by_tag: typing.Union[IResolvable, typing.List[MeteringComputationScheduleQueryPropertiesGroupByTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>]]

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#group_by_tag MeteringComputationSchedule#group_by_tag}

---

##### `is_aggregate_by_time`<sup>Optional</sup> <a name="is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.isAggregateByTime"></a>

```python
is_aggregate_by_time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#is_aggregate_by_time MeteringComputationSchedule#is_aggregate_by_time}.

---

##### `query_type`<sup>Optional</sup> <a name="query_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.queryType"></a>

```python
query_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#query_type MeteringComputationSchedule#query_type}.

---

### MeteringComputationScheduleQueryPropertiesDateRange <a name="MeteringComputationScheduleQueryPropertiesDateRange" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange(
  date_range_type: str,
  dynamic_date_range_type: str = None,
  time_usage_ended: str = None,
  time_usage_started: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.dateRangeType">date_range_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#date_range_type MeteringComputationSchedule#date_range_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.dynamicDateRangeType">dynamic_date_range_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#dynamic_date_range_type MeteringComputationSchedule#dynamic_date_range_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.timeUsageEnded">time_usage_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_usage_ended MeteringComputationSchedule#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.timeUsageStarted">time_usage_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_usage_started MeteringComputationSchedule#time_usage_started}. |

---

##### `date_range_type`<sup>Required</sup> <a name="date_range_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.dateRangeType"></a>

```python
date_range_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#date_range_type MeteringComputationSchedule#date_range_type}.

---

##### `dynamic_date_range_type`<sup>Optional</sup> <a name="dynamic_date_range_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.dynamicDateRangeType"></a>

```python
dynamic_date_range_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#dynamic_date_range_type MeteringComputationSchedule#dynamic_date_range_type}.

---

##### `time_usage_ended`<sup>Optional</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.timeUsageEnded"></a>

```python
time_usage_ended: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_usage_ended MeteringComputationSchedule#time_usage_ended}.

---

##### `time_usage_started`<sup>Optional</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.timeUsageStarted"></a>

```python
time_usage_started: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_usage_started MeteringComputationSchedule#time_usage_started}.

---

### MeteringComputationScheduleQueryPropertiesGroupByTag <a name="MeteringComputationScheduleQueryPropertiesGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag(
  key: str = None,
  namespace: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#key MeteringComputationSchedule#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#value MeteringComputationSchedule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#key MeteringComputationSchedule#key}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#value MeteringComputationSchedule#value}.

---

### MeteringComputationScheduleResultLocation <a name="MeteringComputationScheduleResultLocation" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationScheduleResultLocation(
  bucket: str,
  location_type: str,
  namespace: str,
  region: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#bucket MeteringComputationSchedule#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.locationType">location_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#location_type MeteringComputationSchedule#location_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#region MeteringComputationSchedule#region}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#bucket MeteringComputationSchedule#bucket}.

---

##### `location_type`<sup>Required</sup> <a name="location_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#location_type MeteringComputationSchedule#location_type}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}.

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#region MeteringComputationSchedule#region}.

---

### MeteringComputationScheduleTimeouts <a name="MeteringComputationScheduleTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationScheduleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#create MeteringComputationSchedule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#delete MeteringComputationSchedule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#update MeteringComputationSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#create MeteringComputationSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#delete MeteringComputationSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#update MeteringComputationSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationScheduleQueryPropertiesDateRangeOutputReference <a name="MeteringComputationScheduleQueryPropertiesDateRangeOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetDynamicDateRangeType">reset_dynamic_date_range_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetTimeUsageEnded">reset_time_usage_ended</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetTimeUsageStarted">reset_time_usage_started</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dynamic_date_range_type` <a name="reset_dynamic_date_range_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetDynamicDateRangeType"></a>

```python
def reset_dynamic_date_range_type() -> None
```

##### `reset_time_usage_ended` <a name="reset_time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetTimeUsageEnded"></a>

```python
def reset_time_usage_ended() -> None
```

##### `reset_time_usage_started` <a name="reset_time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetTimeUsageStarted"></a>

```python
def reset_time_usage_started() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dateRangeTypeInput">date_range_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeTypeInput">dynamic_date_range_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageEndedInput">time_usage_ended_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageStartedInput">time_usage_started_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dateRangeType">date_range_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeType">dynamic_date_range_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageEnded">time_usage_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageStarted">time_usage_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_range_type_input`<sup>Optional</sup> <a name="date_range_type_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dateRangeTypeInput"></a>

```python
date_range_type_input: str
```

- *Type:* str

---

##### `dynamic_date_range_type_input`<sup>Optional</sup> <a name="dynamic_date_range_type_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeTypeInput"></a>

```python
dynamic_date_range_type_input: str
```

- *Type:* str

---

##### `time_usage_ended_input`<sup>Optional</sup> <a name="time_usage_ended_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageEndedInput"></a>

```python
time_usage_ended_input: str
```

- *Type:* str

---

##### `time_usage_started_input`<sup>Optional</sup> <a name="time_usage_started_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageStartedInput"></a>

```python
time_usage_started_input: str
```

- *Type:* str

---

##### `date_range_type`<sup>Required</sup> <a name="date_range_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dateRangeType"></a>

```python
date_range_type: str
```

- *Type:* str

---

##### `dynamic_date_range_type`<sup>Required</sup> <a name="dynamic_date_range_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeType"></a>

```python
dynamic_date_range_type: str
```

- *Type:* str

---

##### `time_usage_ended`<sup>Required</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageEnded"></a>

```python
time_usage_ended: str
```

- *Type:* str

---

##### `time_usage_started`<sup>Required</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageStarted"></a>

```python
time_usage_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.internalValue"></a>

```python
internal_value: MeteringComputationScheduleQueryPropertiesDateRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a>

---


### MeteringComputationScheduleQueryPropertiesGroupByTagList <a name="MeteringComputationScheduleQueryPropertiesGroupByTagList" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MeteringComputationScheduleQueryPropertiesGroupByTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>]]

---


### MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference <a name="MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MeteringComputationScheduleQueryPropertiesGroupByTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>]

---


### MeteringComputationScheduleQueryPropertiesOutputReference <a name="MeteringComputationScheduleQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putDateRange">put_date_range</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putGroupByTag">put_group_by_tag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetCompartmentDepth">reset_compartment_depth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetGroupBy">reset_group_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetGroupByTag">reset_group_by_tag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetIsAggregateByTime">reset_is_aggregate_by_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetQueryType">reset_query_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_date_range` <a name="put_date_range" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putDateRange"></a>

```python
def put_date_range(
  date_range_type: str,
  dynamic_date_range_type: str = None,
  time_usage_ended: str = None,
  time_usage_started: str = None
) -> None
```

###### `date_range_type`<sup>Required</sup> <a name="date_range_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putDateRange.parameter.dateRangeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#date_range_type MeteringComputationSchedule#date_range_type}.

---

###### `dynamic_date_range_type`<sup>Optional</sup> <a name="dynamic_date_range_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putDateRange.parameter.dynamicDateRangeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#dynamic_date_range_type MeteringComputationSchedule#dynamic_date_range_type}.

---

###### `time_usage_ended`<sup>Optional</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putDateRange.parameter.timeUsageEnded"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_usage_ended MeteringComputationSchedule#time_usage_ended}.

---

###### `time_usage_started`<sup>Optional</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putDateRange.parameter.timeUsageStarted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_usage_started MeteringComputationSchedule#time_usage_started}.

---

##### `put_group_by_tag` <a name="put_group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putGroupByTag"></a>

```python
def put_group_by_tag(
  value: typing.Union[IResolvable, typing.List[MeteringComputationScheduleQueryPropertiesGroupByTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putGroupByTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>]]

---

##### `reset_compartment_depth` <a name="reset_compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetCompartmentDepth"></a>

```python
def reset_compartment_depth() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_group_by` <a name="reset_group_by" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetGroupBy"></a>

```python
def reset_group_by() -> None
```

##### `reset_group_by_tag` <a name="reset_group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetGroupByTag"></a>

```python
def reset_group_by_tag() -> None
```

##### `reset_is_aggregate_by_time` <a name="reset_is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetIsAggregateByTime"></a>

```python
def reset_is_aggregate_by_time() -> None
```

##### `reset_query_type` <a name="reset_query_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetQueryType"></a>

```python
def reset_query_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.dateRange">date_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference">MeteringComputationScheduleQueryPropertiesDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByTag">group_by_tag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList">MeteringComputationScheduleQueryPropertiesGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.compartmentDepthInput">compartment_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.dateRangeInput">date_range_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.granularityInput">granularity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByInput">group_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByTagInput">group_by_tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.isAggregateByTimeInput">is_aggregate_by_time_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.queryTypeInput">query_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.compartmentDepth">compartment_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.granularity">granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.isAggregateByTime">is_aggregate_by_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.queryType">query_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_range`<sup>Required</sup> <a name="date_range" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.dateRange"></a>

```python
date_range: MeteringComputationScheduleQueryPropertiesDateRangeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference">MeteringComputationScheduleQueryPropertiesDateRangeOutputReference</a>

---

##### `group_by_tag`<sup>Required</sup> <a name="group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByTag"></a>

```python
group_by_tag: MeteringComputationScheduleQueryPropertiesGroupByTagList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList">MeteringComputationScheduleQueryPropertiesGroupByTagList</a>

---

##### `compartment_depth_input`<sup>Optional</sup> <a name="compartment_depth_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.compartmentDepthInput"></a>

```python
compartment_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_range_input`<sup>Optional</sup> <a name="date_range_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.dateRangeInput"></a>

```python
date_range_input: MeteringComputationScheduleQueryPropertiesDateRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `granularity_input`<sup>Optional</sup> <a name="granularity_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.granularityInput"></a>

```python
granularity_input: str
```

- *Type:* str

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByInput"></a>

```python
group_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_by_tag_input`<sup>Optional</sup> <a name="group_by_tag_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByTagInput"></a>

```python
group_by_tag_input: typing.Union[IResolvable, typing.List[MeteringComputationScheduleQueryPropertiesGroupByTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>]]

---

##### `is_aggregate_by_time_input`<sup>Optional</sup> <a name="is_aggregate_by_time_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.isAggregateByTimeInput"></a>

```python
is_aggregate_by_time_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_type_input`<sup>Optional</sup> <a name="query_type_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.queryTypeInput"></a>

```python
query_type_input: str
```

- *Type:* str

---

##### `compartment_depth`<sup>Required</sup> <a name="compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.compartmentDepth"></a>

```python
compartment_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_aggregate_by_time`<sup>Required</sup> <a name="is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.isAggregateByTime"></a>

```python
is_aggregate_by_time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_type`<sup>Required</sup> <a name="query_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.queryType"></a>

```python
query_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: MeteringComputationScheduleQueryProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a>

---


### MeteringComputationScheduleResultLocationOutputReference <a name="MeteringComputationScheduleResultLocationOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.locationTypeInput">location_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.locationType">location_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `location_type_input`<sup>Optional</sup> <a name="location_type_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.locationTypeInput"></a>

```python
location_type_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `location_type`<sup>Required</sup> <a name="location_type" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.internalValue"></a>

```python
internal_value: MeteringComputationScheduleResultLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a>

---


### MeteringComputationScheduleTimeoutsOutputReference <a name="MeteringComputationScheduleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_schedule

meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MeteringComputationScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>]

---



