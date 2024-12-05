# `dataOciMonitoringAlarmSuppressions` Submodule <a name="`dataOciMonitoringAlarmSuppressions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMonitoringAlarmSuppressions <a name="DataOciMonitoringAlarmSuppressions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions oci_monitoring_alarm_suppressions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alarm_id: str = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMonitoringAlarmSuppressionsFilter]] = None,
  id: str = None,
  is_all_suppressions: typing.Union[bool, IResolvable] = None,
  level: str = None,
  state: str = None,
  target_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.alarmId">alarm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#alarm_id DataOciMonitoringAlarmSuppressions#alarm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id DataOciMonitoringAlarmSuppressions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id_in_subtree DataOciMonitoringAlarmSuppressions#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#display_name DataOciMonitoringAlarmSuppressions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#id DataOciMonitoringAlarmSuppressions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.isAllSuppressions">is_all_suppressions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#is_all_suppressions DataOciMonitoringAlarmSuppressions#is_all_suppressions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#level DataOciMonitoringAlarmSuppressions#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#state DataOciMonitoringAlarmSuppressions#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.targetType">target_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#target_type DataOciMonitoringAlarmSuppressions#target_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alarm_id`<sup>Optional</sup> <a name="alarm_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.alarmId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#alarm_id DataOciMonitoringAlarmSuppressions#alarm_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id DataOciMonitoringAlarmSuppressions#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id_in_subtree DataOciMonitoringAlarmSuppressions#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#display_name DataOciMonitoringAlarmSuppressions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#filter DataOciMonitoringAlarmSuppressions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#id DataOciMonitoringAlarmSuppressions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_all_suppressions`<sup>Optional</sup> <a name="is_all_suppressions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.isAllSuppressions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#is_all_suppressions DataOciMonitoringAlarmSuppressions#is_all_suppressions}.

---

##### `level`<sup>Optional</sup> <a name="level" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.level"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#level DataOciMonitoringAlarmSuppressions#level}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#state DataOciMonitoringAlarmSuppressions#state}.

---

##### `target_type`<sup>Optional</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.targetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#target_type DataOciMonitoringAlarmSuppressions#target_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetAlarmId">reset_alarm_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetIsAllSuppressions">reset_is_all_suppressions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetLevel">reset_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetTargetType">reset_target_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMonitoringAlarmSuppressionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>]]

---

##### `reset_alarm_id` <a name="reset_alarm_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetAlarmId"></a>

```python
def reset_alarm_id() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_all_suppressions` <a name="reset_is_all_suppressions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetIsAllSuppressions"></a>

```python
def reset_is_all_suppressions() -> None
```

##### `reset_level` <a name="reset_level" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetLevel"></a>

```python
def reset_level() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_target_type` <a name="reset_target_type" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetTargetType"></a>

```python
def reset_target_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMonitoringAlarmSuppressions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMonitoringAlarmSuppressions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMonitoringAlarmSuppressions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMonitoringAlarmSuppressions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMonitoringAlarmSuppressions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmSuppressionCollection">alarm_suppression_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList">DataOciMonitoringAlarmSuppressionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmIdInput">alarm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.isAllSuppressionsInput">is_all_suppressions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.targetTypeInput">target_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmId">alarm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.isAllSuppressions">is_all_suppressions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `alarm_suppression_collection`<sup>Required</sup> <a name="alarm_suppression_collection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmSuppressionCollection"></a>

```python
alarm_suppression_collection: DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.filter"></a>

```python
filter: DataOciMonitoringAlarmSuppressionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList">DataOciMonitoringAlarmSuppressionsFilterList</a>

---

##### `alarm_id_input`<sup>Optional</sup> <a name="alarm_id_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmIdInput"></a>

```python
alarm_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMonitoringAlarmSuppressionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_all_suppressions_input`<sup>Optional</sup> <a name="is_all_suppressions_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.isAllSuppressionsInput"></a>

```python
is_all_suppressions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_type_input`<sup>Optional</sup> <a name="target_type_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.targetTypeInput"></a>

```python
target_type_input: str
```

- *Type:* str

---

##### `alarm_id`<sup>Required</sup> <a name="alarm_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmId"></a>

```python
alarm_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_all_suppressions`<sup>Required</sup> <a name="is_all_suppressions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.isAllSuppressions"></a>

```python
is_all_suppressions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `level`<sup>Required</sup> <a name="level" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection()
```


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems()
```


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget()
```


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions()
```


### DataOciMonitoringAlarmSuppressionsConfig <a name="DataOciMonitoringAlarmSuppressionsConfig" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alarm_id: str = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMonitoringAlarmSuppressionsFilter]] = None,
  id: str = None,
  is_all_suppressions: typing.Union[bool, IResolvable] = None,
  level: str = None,
  state: str = None,
  target_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.alarmId">alarm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#alarm_id DataOciMonitoringAlarmSuppressions#alarm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id DataOciMonitoringAlarmSuppressions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id_in_subtree DataOciMonitoringAlarmSuppressions#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#display_name DataOciMonitoringAlarmSuppressions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#id DataOciMonitoringAlarmSuppressions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.isAllSuppressions">is_all_suppressions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#is_all_suppressions DataOciMonitoringAlarmSuppressions#is_all_suppressions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#level DataOciMonitoringAlarmSuppressions#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#state DataOciMonitoringAlarmSuppressions#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.targetType">target_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#target_type DataOciMonitoringAlarmSuppressions#target_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alarm_id`<sup>Optional</sup> <a name="alarm_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.alarmId"></a>

```python
alarm_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#alarm_id DataOciMonitoringAlarmSuppressions#alarm_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id DataOciMonitoringAlarmSuppressions#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id_in_subtree DataOciMonitoringAlarmSuppressions#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#display_name DataOciMonitoringAlarmSuppressions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMonitoringAlarmSuppressionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#filter DataOciMonitoringAlarmSuppressions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#id DataOciMonitoringAlarmSuppressions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_all_suppressions`<sup>Optional</sup> <a name="is_all_suppressions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.isAllSuppressions"></a>

```python
is_all_suppressions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#is_all_suppressions DataOciMonitoringAlarmSuppressions#is_all_suppressions}.

---

##### `level`<sup>Optional</sup> <a name="level" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.level"></a>

```python
level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#level DataOciMonitoringAlarmSuppressions#level}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#state DataOciMonitoringAlarmSuppressions#state}.

---

##### `target_type`<sup>Optional</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#target_type DataOciMonitoringAlarmSuppressions#target_type}.

---

### DataOciMonitoringAlarmSuppressionsFilter <a name="DataOciMonitoringAlarmSuppressionsFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#name DataOciMonitoringAlarmSuppressions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#values DataOciMonitoringAlarmSuppressions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#regex DataOciMonitoringAlarmSuppressions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#name DataOciMonitoringAlarmSuppressions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#values DataOciMonitoringAlarmSuppressions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#regex DataOciMonitoringAlarmSuppressions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.alarmId">alarm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_id`<sup>Required</sup> <a name="alarm_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.alarmId"></a>

```python
alarm_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget</a>

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.alarmSuppressionTarget">alarm_suppression_target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.suppressionConditions">suppression_conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeSuppressFrom">time_suppress_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeSuppressUntil">time_suppress_until</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_suppression_target`<sup>Required</sup> <a name="alarm_suppression_target" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.alarmSuppressionTarget"></a>

```python
alarm_suppression_target: DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.dimensions"></a>

```python
dimensions: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `suppression_conditions`<sup>Required</sup> <a name="suppression_conditions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.suppressionConditions"></a>

```python
suppression_conditions: DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_suppress_from`<sup>Required</sup> <a name="time_suppress_from" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeSuppressFrom"></a>

```python
time_suppress_from: str
```

- *Type:* str

---

##### `time_suppress_until`<sup>Required</sup> <a name="time_suppress_until" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeSuppressUntil"></a>

```python
time_suppress_until: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems</a>

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.conditionType">condition_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.suppressionDuration">suppression_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.suppressionRecurrence">suppression_recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_type`<sup>Required</sup> <a name="condition_type" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.conditionType"></a>

```python
condition_type: str
```

- *Type:* str

---

##### `suppression_duration`<sup>Required</sup> <a name="suppression_duration" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.suppressionDuration"></a>

```python
suppression_duration: str
```

- *Type:* str

---

##### `suppression_recurrence`<sup>Required</sup> <a name="suppression_recurrence" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.suppressionRecurrence"></a>

```python
suppression_recurrence: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions</a>

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.items"></a>

```python
items: DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection</a>

---


### DataOciMonitoringAlarmSuppressionsFilterList <a name="DataOciMonitoringAlarmSuppressionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMonitoringAlarmSuppressionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMonitoringAlarmSuppressionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>]]

---


### DataOciMonitoringAlarmSuppressionsFilterOutputReference <a name="DataOciMonitoringAlarmSuppressionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_suppressions

dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMonitoringAlarmSuppressionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter">DataOciMonitoringAlarmSuppressionsFilter</a>]

---



