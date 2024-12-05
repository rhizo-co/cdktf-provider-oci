# `dataOciMonitoringAlarmHistoryCollection` Submodule <a name="`dataOciMonitoringAlarmHistoryCollection` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMonitoringAlarmHistoryCollection <a name="DataOciMonitoringAlarmHistoryCollection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection oci_monitoring_alarm_history_collection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_history_collection

dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alarm_id: str,
  alarm_historytype: str = None,
  id: str = None,
  timestamp_greater_than_or_equal_to: str = None,
  timestamp_less_than: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.alarmId">alarm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_id DataOciMonitoringAlarmHistoryCollection#alarm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.alarmHistorytype">alarm_historytype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_historytype DataOciMonitoringAlarmHistoryCollection#alarm_historytype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#id DataOciMonitoringAlarmHistoryCollection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.timestampGreaterThanOrEqualTo">timestamp_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_greater_than_or_equal_to DataOciMonitoringAlarmHistoryCollection#timestamp_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.timestampLessThan">timestamp_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_less_than DataOciMonitoringAlarmHistoryCollection#timestamp_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alarm_id`<sup>Required</sup> <a name="alarm_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.alarmId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_id DataOciMonitoringAlarmHistoryCollection#alarm_id}.

---

##### `alarm_historytype`<sup>Optional</sup> <a name="alarm_historytype" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.alarmHistorytype"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_historytype DataOciMonitoringAlarmHistoryCollection#alarm_historytype}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#id DataOciMonitoringAlarmHistoryCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timestamp_greater_than_or_equal_to`<sup>Optional</sup> <a name="timestamp_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.timestampGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_greater_than_or_equal_to DataOciMonitoringAlarmHistoryCollection#timestamp_greater_than_or_equal_to}.

---

##### `timestamp_less_than`<sup>Optional</sup> <a name="timestamp_less_than" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.timestampLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_less_than DataOciMonitoringAlarmHistoryCollection#timestamp_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetAlarmHistorytype">reset_alarm_historytype</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetTimestampGreaterThanOrEqualTo">reset_timestamp_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetTimestampLessThan">reset_timestamp_less_than</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_alarm_historytype` <a name="reset_alarm_historytype" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetAlarmHistorytype"></a>

```python
def reset_alarm_historytype() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timestamp_greater_than_or_equal_to` <a name="reset_timestamp_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetTimestampGreaterThanOrEqualTo"></a>

```python
def reset_timestamp_greater_than_or_equal_to() -> None
```

##### `reset_timestamp_less_than` <a name="reset_timestamp_less_than" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetTimestampLessThan"></a>

```python
def reset_timestamp_less_than() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMonitoringAlarmHistoryCollection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_history_collection

dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_history_collection

dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_history_collection

dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_history_collection

dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMonitoringAlarmHistoryCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMonitoringAlarmHistoryCollection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMonitoringAlarmHistoryCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMonitoringAlarmHistoryCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.entries">entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList">DataOciMonitoringAlarmHistoryCollectionEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmHistorytypeInput">alarm_historytype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmIdInput">alarm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampGreaterThanOrEqualToInput">timestamp_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampLessThanInput">timestamp_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmHistorytype">alarm_historytype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmId">alarm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampGreaterThanOrEqualTo">timestamp_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampLessThan">timestamp_less_than</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `entries`<sup>Required</sup> <a name="entries" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.entries"></a>

```python
entries: DataOciMonitoringAlarmHistoryCollectionEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList">DataOciMonitoringAlarmHistoryCollectionEntriesList</a>

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `alarm_historytype_input`<sup>Optional</sup> <a name="alarm_historytype_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmHistorytypeInput"></a>

```python
alarm_historytype_input: str
```

- *Type:* str

---

##### `alarm_id_input`<sup>Optional</sup> <a name="alarm_id_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmIdInput"></a>

```python
alarm_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timestamp_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="timestamp_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampGreaterThanOrEqualToInput"></a>

```python
timestamp_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `timestamp_less_than_input`<sup>Optional</sup> <a name="timestamp_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampLessThanInput"></a>

```python
timestamp_less_than_input: str
```

- *Type:* str

---

##### `alarm_historytype`<sup>Required</sup> <a name="alarm_historytype" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmHistorytype"></a>

```python
alarm_historytype: str
```

- *Type:* str

---

##### `alarm_id`<sup>Required</sup> <a name="alarm_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmId"></a>

```python
alarm_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `timestamp_greater_than_or_equal_to`<sup>Required</sup> <a name="timestamp_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampGreaterThanOrEqualTo"></a>

```python
timestamp_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `timestamp_less_than`<sup>Required</sup> <a name="timestamp_less_than" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampLessThan"></a>

```python
timestamp_less_than: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMonitoringAlarmHistoryCollectionConfig <a name="DataOciMonitoringAlarmHistoryCollectionConfig" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_history_collection

dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alarm_id: str,
  alarm_historytype: str = None,
  id: str = None,
  timestamp_greater_than_or_equal_to: str = None,
  timestamp_less_than: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.alarmId">alarm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_id DataOciMonitoringAlarmHistoryCollection#alarm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.alarmHistorytype">alarm_historytype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_historytype DataOciMonitoringAlarmHistoryCollection#alarm_historytype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#id DataOciMonitoringAlarmHistoryCollection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.timestampGreaterThanOrEqualTo">timestamp_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_greater_than_or_equal_to DataOciMonitoringAlarmHistoryCollection#timestamp_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.timestampLessThan">timestamp_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_less_than DataOciMonitoringAlarmHistoryCollection#timestamp_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alarm_id`<sup>Required</sup> <a name="alarm_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.alarmId"></a>

```python
alarm_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_id DataOciMonitoringAlarmHistoryCollection#alarm_id}.

---

##### `alarm_historytype`<sup>Optional</sup> <a name="alarm_historytype" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.alarmHistorytype"></a>

```python
alarm_historytype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_historytype DataOciMonitoringAlarmHistoryCollection#alarm_historytype}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#id DataOciMonitoringAlarmHistoryCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timestamp_greater_than_or_equal_to`<sup>Optional</sup> <a name="timestamp_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.timestampGreaterThanOrEqualTo"></a>

```python
timestamp_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_greater_than_or_equal_to DataOciMonitoringAlarmHistoryCollection#timestamp_greater_than_or_equal_to}.

---

##### `timestamp_less_than`<sup>Optional</sup> <a name="timestamp_less_than" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.timestampLessThan"></a>

```python
timestamp_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_less_than DataOciMonitoringAlarmHistoryCollection#timestamp_less_than}.

---

### DataOciMonitoringAlarmHistoryCollectionEntries <a name="DataOciMonitoringAlarmHistoryCollectionEntries" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_history_collection

dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntries()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMonitoringAlarmHistoryCollectionEntriesList <a name="DataOciMonitoringAlarmHistoryCollectionEntriesList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_history_collection

dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference <a name="DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_alarm_history_collection

dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.alarmSummary">alarm_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.timestampTriggered">timestamp_triggered</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntries">DataOciMonitoringAlarmHistoryCollectionEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_summary`<sup>Required</sup> <a name="alarm_summary" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.alarmSummary"></a>

```python
alarm_summary: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `timestamp_triggered`<sup>Required</sup> <a name="timestamp_triggered" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.timestampTriggered"></a>

```python
timestamp_triggered: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMonitoringAlarmHistoryCollectionEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntries">DataOciMonitoringAlarmHistoryCollectionEntries</a>

---



