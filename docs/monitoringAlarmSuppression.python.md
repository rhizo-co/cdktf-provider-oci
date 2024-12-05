# `monitoringAlarmSuppression` Submodule <a name="`monitoringAlarmSuppression` Submodule" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringAlarmSuppressionA <a name="MonitoringAlarmSuppressionA" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression oci_monitoring_alarm_suppression}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm_suppression

monitoringAlarmSuppression.MonitoringAlarmSuppressionA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alarm_suppression_target: MonitoringAlarmSuppressionAlarmSuppressionTarget,
  display_name: str,
  time_suppress_from: str,
  time_suppress_until: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  dimensions: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  level: str = None,
  suppression_conditions: typing.Union[IResolvable, typing.List[MonitoringAlarmSuppressionSuppressionConditions]] = None,
  timeouts: MonitoringAlarmSuppressionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.alarmSuppressionTarget">alarm_suppression_target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | alarm_suppression_target block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#display_name MonitoringAlarmSuppressionA#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.timeSuppressFrom">time_suppress_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_from MonitoringAlarmSuppressionA#time_suppress_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.timeSuppressUntil">time_suppress_until</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_until MonitoringAlarmSuppressionA#time_suppress_until}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#defined_tags MonitoringAlarmSuppressionA#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#description MonitoringAlarmSuppressionA#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#dimensions MonitoringAlarmSuppressionA#dimensions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#freeform_tags MonitoringAlarmSuppressionA#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#id MonitoringAlarmSuppressionA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#level MonitoringAlarmSuppressionA#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.suppressionConditions">suppression_conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>]]</code> | suppression_conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alarm_suppression_target`<sup>Required</sup> <a name="alarm_suppression_target" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.alarmSuppressionTarget"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

alarm_suppression_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_suppression_target MonitoringAlarmSuppressionA#alarm_suppression_target}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#display_name MonitoringAlarmSuppressionA#display_name}.

---

##### `time_suppress_from`<sup>Required</sup> <a name="time_suppress_from" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.timeSuppressFrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_from MonitoringAlarmSuppressionA#time_suppress_from}.

---

##### `time_suppress_until`<sup>Required</sup> <a name="time_suppress_until" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.timeSuppressUntil"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_until MonitoringAlarmSuppressionA#time_suppress_until}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#defined_tags MonitoringAlarmSuppressionA#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#description MonitoringAlarmSuppressionA#description}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.dimensions"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#dimensions MonitoringAlarmSuppressionA#dimensions}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#freeform_tags MonitoringAlarmSuppressionA#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#id MonitoringAlarmSuppressionA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `level`<sup>Optional</sup> <a name="level" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.level"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#level MonitoringAlarmSuppressionA#level}.

---

##### `suppression_conditions`<sup>Optional</sup> <a name="suppression_conditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.suppressionConditions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>]]

suppression_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_conditions MonitoringAlarmSuppressionA#suppression_conditions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#timeouts MonitoringAlarmSuppressionA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget">put_alarm_suppression_target</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putSuppressionConditions">put_suppression_conditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetLevel">reset_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetSuppressionConditions">reset_suppression_conditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_alarm_suppression_target` <a name="put_alarm_suppression_target" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget"></a>

```python
def put_alarm_suppression_target(
  target_type: str,
  alarm_id: str = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None
) -> None
```

###### `target_type`<sup>Required</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget.parameter.targetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#target_type MonitoringAlarmSuppressionA#target_type}.

---

###### `alarm_id`<sup>Optional</sup> <a name="alarm_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget.parameter.alarmId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_id MonitoringAlarmSuppressionA#alarm_id}.

---

###### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id MonitoringAlarmSuppressionA#compartment_id}.

---

###### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id_in_subtree MonitoringAlarmSuppressionA#compartment_id_in_subtree}.

---

##### `put_suppression_conditions` <a name="put_suppression_conditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putSuppressionConditions"></a>

```python
def put_suppression_conditions(
  value: typing.Union[IResolvable, typing.List[MonitoringAlarmSuppressionSuppressionConditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putSuppressionConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#create MonitoringAlarmSuppressionA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#delete MonitoringAlarmSuppressionA#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#update MonitoringAlarmSuppressionA#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_level` <a name="reset_level" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetLevel"></a>

```python
def reset_level() -> None
```

##### `reset_suppression_conditions` <a name="reset_suppression_conditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetSuppressionConditions"></a>

```python
def reset_suppression_conditions() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MonitoringAlarmSuppressionA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm_suppression

monitoringAlarmSuppression.MonitoringAlarmSuppressionA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm_suppression

monitoringAlarmSuppression.MonitoringAlarmSuppressionA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm_suppression

monitoringAlarmSuppression.MonitoringAlarmSuppressionA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm_suppression

monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MonitoringAlarmSuppressionA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonitoringAlarmSuppressionA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonitoringAlarmSuppressionA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringAlarmSuppressionA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTarget">alarm_suppression_target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference">MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditions">suppression_conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList">MonitoringAlarmSuppressionSuppressionConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference">MonitoringAlarmSuppressionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTargetInput">alarm_suppression_target_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditionsInput">suppression_conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFromInput">time_suppress_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntilInput">time_suppress_until_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFrom">time_suppress_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntil">time_suppress_until</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alarm_suppression_target`<sup>Required</sup> <a name="alarm_suppression_target" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTarget"></a>

```python
alarm_suppression_target: MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference">MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `suppression_conditions`<sup>Required</sup> <a name="suppression_conditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditions"></a>

```python
suppression_conditions: MonitoringAlarmSuppressionSuppressionConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList">MonitoringAlarmSuppressionSuppressionConditionsList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeouts"></a>

```python
timeouts: MonitoringAlarmSuppressionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference">MonitoringAlarmSuppressionTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `alarm_suppression_target_input`<sup>Optional</sup> <a name="alarm_suppression_target_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTargetInput"></a>

```python
alarm_suppression_target_input: MonitoringAlarmSuppressionAlarmSuppressionTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensionsInput"></a>

```python
dimensions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `suppression_conditions_input`<sup>Optional</sup> <a name="suppression_conditions_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditionsInput"></a>

```python
suppression_conditions_input: typing.Union[IResolvable, typing.List[MonitoringAlarmSuppressionSuppressionConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MonitoringAlarmSuppressionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>]

---

##### `time_suppress_from_input`<sup>Optional</sup> <a name="time_suppress_from_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFromInput"></a>

```python
time_suppress_from_input: str
```

- *Type:* str

---

##### `time_suppress_until_input`<sup>Optional</sup> <a name="time_suppress_until_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntilInput"></a>

```python
time_suppress_until_input: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `time_suppress_from`<sup>Required</sup> <a name="time_suppress_from" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFrom"></a>

```python
time_suppress_from: str
```

- *Type:* str

---

##### `time_suppress_until`<sup>Required</sup> <a name="time_suppress_until" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntil"></a>

```python
time_suppress_until: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringAlarmSuppressionAConfig <a name="MonitoringAlarmSuppressionAConfig" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm_suppression

monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alarm_suppression_target: MonitoringAlarmSuppressionAlarmSuppressionTarget,
  display_name: str,
  time_suppress_from: str,
  time_suppress_until: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  dimensions: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  level: str = None,
  suppression_conditions: typing.Union[IResolvable, typing.List[MonitoringAlarmSuppressionSuppressionConditions]] = None,
  timeouts: MonitoringAlarmSuppressionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.alarmSuppressionTarget">alarm_suppression_target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | alarm_suppression_target block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#display_name MonitoringAlarmSuppressionA#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressFrom">time_suppress_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_from MonitoringAlarmSuppressionA#time_suppress_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressUntil">time_suppress_until</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_until MonitoringAlarmSuppressionA#time_suppress_until}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#defined_tags MonitoringAlarmSuppressionA#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#description MonitoringAlarmSuppressionA#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#dimensions MonitoringAlarmSuppressionA#dimensions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#freeform_tags MonitoringAlarmSuppressionA#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#id MonitoringAlarmSuppressionA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#level MonitoringAlarmSuppressionA#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.suppressionConditions">suppression_conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>]]</code> | suppression_conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alarm_suppression_target`<sup>Required</sup> <a name="alarm_suppression_target" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.alarmSuppressionTarget"></a>

```python
alarm_suppression_target: MonitoringAlarmSuppressionAlarmSuppressionTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

alarm_suppression_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_suppression_target MonitoringAlarmSuppressionA#alarm_suppression_target}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#display_name MonitoringAlarmSuppressionA#display_name}.

---

##### `time_suppress_from`<sup>Required</sup> <a name="time_suppress_from" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressFrom"></a>

```python
time_suppress_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_from MonitoringAlarmSuppressionA#time_suppress_from}.

---

##### `time_suppress_until`<sup>Required</sup> <a name="time_suppress_until" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressUntil"></a>

```python
time_suppress_until: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_until MonitoringAlarmSuppressionA#time_suppress_until}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#defined_tags MonitoringAlarmSuppressionA#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#description MonitoringAlarmSuppressionA#description}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#dimensions MonitoringAlarmSuppressionA#dimensions}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#freeform_tags MonitoringAlarmSuppressionA#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#id MonitoringAlarmSuppressionA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `level`<sup>Optional</sup> <a name="level" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.level"></a>

```python
level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#level MonitoringAlarmSuppressionA#level}.

---

##### `suppression_conditions`<sup>Optional</sup> <a name="suppression_conditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.suppressionConditions"></a>

```python
suppression_conditions: typing.Union[IResolvable, typing.List[MonitoringAlarmSuppressionSuppressionConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>]]

suppression_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_conditions MonitoringAlarmSuppressionA#suppression_conditions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeouts"></a>

```python
timeouts: MonitoringAlarmSuppressionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#timeouts MonitoringAlarmSuppressionA#timeouts}

---

### MonitoringAlarmSuppressionAlarmSuppressionTarget <a name="MonitoringAlarmSuppressionAlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm_suppression

monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget(
  target_type: str,
  alarm_id: str = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.targetType">target_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#target_type MonitoringAlarmSuppressionA#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.alarmId">alarm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_id MonitoringAlarmSuppressionA#alarm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id MonitoringAlarmSuppressionA#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id_in_subtree MonitoringAlarmSuppressionA#compartment_id_in_subtree}. |

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#target_type MonitoringAlarmSuppressionA#target_type}.

---

##### `alarm_id`<sup>Optional</sup> <a name="alarm_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.alarmId"></a>

```python
alarm_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_id MonitoringAlarmSuppressionA#alarm_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id MonitoringAlarmSuppressionA#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id_in_subtree MonitoringAlarmSuppressionA#compartment_id_in_subtree}.

---

### MonitoringAlarmSuppressionSuppressionConditions <a name="MonitoringAlarmSuppressionSuppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm_suppression

monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions(
  condition_type: str,
  suppression_duration: str,
  suppression_recurrence: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.conditionType">condition_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#condition_type MonitoringAlarmSuppressionA#condition_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionDuration">suppression_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_duration MonitoringAlarmSuppressionA#suppression_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionRecurrence">suppression_recurrence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_recurrence MonitoringAlarmSuppressionA#suppression_recurrence}. |

---

##### `condition_type`<sup>Required</sup> <a name="condition_type" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.conditionType"></a>

```python
condition_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#condition_type MonitoringAlarmSuppressionA#condition_type}.

---

##### `suppression_duration`<sup>Required</sup> <a name="suppression_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionDuration"></a>

```python
suppression_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_duration MonitoringAlarmSuppressionA#suppression_duration}.

---

##### `suppression_recurrence`<sup>Required</sup> <a name="suppression_recurrence" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionRecurrence"></a>

```python
suppression_recurrence: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_recurrence MonitoringAlarmSuppressionA#suppression_recurrence}.

---

### MonitoringAlarmSuppressionTimeouts <a name="MonitoringAlarmSuppressionTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm_suppression

monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#create MonitoringAlarmSuppressionA#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#delete MonitoringAlarmSuppressionA#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#update MonitoringAlarmSuppressionA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#create MonitoringAlarmSuppressionA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#delete MonitoringAlarmSuppressionA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#update MonitoringAlarmSuppressionA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference <a name="MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm_suppression

monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetAlarmId">reset_alarm_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarm_id` <a name="reset_alarm_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetAlarmId"></a>

```python
def reset_alarm_id() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmIdInput">alarm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetTypeInput">target_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmId">alarm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_id_input`<sup>Optional</sup> <a name="alarm_id_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmIdInput"></a>

```python
alarm_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_type_input`<sup>Optional</sup> <a name="target_type_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetTypeInput"></a>

```python
target_type_input: str
```

- *Type:* str

---

##### `alarm_id`<sup>Required</sup> <a name="alarm_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmId"></a>

```python
alarm_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.internalValue"></a>

```python
internal_value: MonitoringAlarmSuppressionAlarmSuppressionTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

---


### MonitoringAlarmSuppressionSuppressionConditionsList <a name="MonitoringAlarmSuppressionSuppressionConditionsList" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm_suppression

monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitoringAlarmSuppressionSuppressionConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitoringAlarmSuppressionSuppressionConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>]]

---


### MonitoringAlarmSuppressionSuppressionConditionsOutputReference <a name="MonitoringAlarmSuppressionSuppressionConditionsOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm_suppression

monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionTypeInput">condition_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDurationInput">suppression_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrenceInput">suppression_recurrence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionType">condition_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDuration">suppression_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrence">suppression_recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_type_input`<sup>Optional</sup> <a name="condition_type_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionTypeInput"></a>

```python
condition_type_input: str
```

- *Type:* str

---

##### `suppression_duration_input`<sup>Optional</sup> <a name="suppression_duration_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDurationInput"></a>

```python
suppression_duration_input: str
```

- *Type:* str

---

##### `suppression_recurrence_input`<sup>Optional</sup> <a name="suppression_recurrence_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrenceInput"></a>

```python
suppression_recurrence_input: str
```

- *Type:* str

---

##### `condition_type`<sup>Required</sup> <a name="condition_type" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionType"></a>

```python
condition_type: str
```

- *Type:* str

---

##### `suppression_duration`<sup>Required</sup> <a name="suppression_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDuration"></a>

```python
suppression_duration: str
```

- *Type:* str

---

##### `suppression_recurrence`<sup>Required</sup> <a name="suppression_recurrence" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrence"></a>

```python
suppression_recurrence: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitoringAlarmSuppressionSuppressionConditions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>]

---


### MonitoringAlarmSuppressionTimeoutsOutputReference <a name="MonitoringAlarmSuppressionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm_suppression

monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitoringAlarmSuppressionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>]

---



