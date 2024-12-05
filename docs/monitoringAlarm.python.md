# `monitoringAlarm` Submodule <a name="`monitoringAlarm` Submodule" id="rhizo-co-terraform-provider-oci.monitoringAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringAlarm <a name="MonitoringAlarm" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm oci_monitoring_alarm}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm

monitoringAlarm.MonitoringAlarm(
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
  destinations: typing.List[str],
  display_name: str,
  is_enabled: typing.Union[bool, IResolvable],
  metric_compartment_id: str,
  namespace: str,
  query: str,
  severity: str,
  alarm_summary: str = None,
  body: str = None,
  defined_tags: typing.Mapping[str] = None,
  evaluation_slack_duration: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_notifications_per_metric_dimension_enabled: typing.Union[bool, IResolvable] = None,
  message_format: str = None,
  metric_compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  notification_title: str = None,
  notification_version: str = None,
  overrides: typing.Union[IResolvable, typing.List[MonitoringAlarmOverrides]] = None,
  pending_duration: str = None,
  repeat_notification_duration: str = None,
  resolution: str = None,
  resource_group: str = None,
  rule_name: str = None,
  suppression: MonitoringAlarmSuppression = None,
  timeouts: MonitoringAlarmTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.destinations">destinations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.metricCompartmentId">metric_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.severity">severity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.alarmSummary">alarm_summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.body">body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.evaluationSlackDuration">evaluation_slack_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.isNotificationsPerMetricDimensionEnabled">is_notifications_per_metric_dimension_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.messageFormat">message_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.metricCompartmentIdInSubtree">metric_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.notificationTitle">notification_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.notificationVersion">notification_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.overrides">overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>]]</code> | overrides block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.pendingDuration">pending_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.repeatNotificationDuration">repeat_notification_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.resolution">resolution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.resourceGroup">resource_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.suppression">suppression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | suppression block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}.

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.destinations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}.

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}.

---

##### `metric_compartment_id`<sup>Required</sup> <a name="metric_compartment_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.metricCompartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}.

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.severity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}.

---

##### `alarm_summary`<sup>Optional</sup> <a name="alarm_summary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.alarmSummary"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}.

---

##### `body`<sup>Optional</sup> <a name="body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.body"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}.

---

##### `evaluation_slack_duration`<sup>Optional</sup> <a name="evaluation_slack_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.evaluationSlackDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_notifications_per_metric_dimension_enabled`<sup>Optional</sup> <a name="is_notifications_per_metric_dimension_enabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.isNotificationsPerMetricDimensionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}.

---

##### `message_format`<sup>Optional</sup> <a name="message_format" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.messageFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}.

---

##### `metric_compartment_id_in_subtree`<sup>Optional</sup> <a name="metric_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.metricCompartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}.

---

##### `notification_title`<sup>Optional</sup> <a name="notification_title" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.notificationTitle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}.

---

##### `notification_version`<sup>Optional</sup> <a name="notification_version" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.notificationVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.overrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>]]

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#overrides MonitoringAlarm#overrides}

---

##### `pending_duration`<sup>Optional</sup> <a name="pending_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.pendingDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}.

---

##### `repeat_notification_duration`<sup>Optional</sup> <a name="repeat_notification_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.repeatNotificationDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}.

---

##### `resolution`<sup>Optional</sup> <a name="resolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.resolution"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}.

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.resourceGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}.

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.ruleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}.

---

##### `suppression`<sup>Optional</sup> <a name="suppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.suppression"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

suppression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#suppression MonitoringAlarm#suppression}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#timeouts MonitoringAlarm#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression">put_suppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetAlarmSummary">reset_alarm_summary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetEvaluationSlackDuration">reset_evaluation_slack_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetIsNotificationsPerMetricDimensionEnabled">reset_is_notifications_per_metric_dimension_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMessageFormat">reset_message_format</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMetricCompartmentIdInSubtree">reset_metric_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationTitle">reset_notification_title</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationVersion">reset_notification_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrides">reset_overrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetPendingDuration">reset_pending_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRepeatNotificationDuration">reset_repeat_notification_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResolution">reset_resolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRuleName">reset_rule_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetSuppression">reset_suppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_overrides` <a name="put_overrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides"></a>

```python
def put_overrides(
  value: typing.Union[IResolvable, typing.List[MonitoringAlarmOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>]]

---

##### `put_suppression` <a name="put_suppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression"></a>

```python
def put_suppression(
  time_suppress_from: str,
  time_suppress_until: str,
  description: str = None
) -> None
```

###### `time_suppress_from`<sup>Required</sup> <a name="time_suppress_from" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression.parameter.timeSuppressFrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_from MonitoringAlarm#time_suppress_from}.

---

###### `time_suppress_until`<sup>Required</sup> <a name="time_suppress_until" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression.parameter.timeSuppressUntil"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_until MonitoringAlarm#time_suppress_until}.

---

###### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#description MonitoringAlarm#description}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#create MonitoringAlarm#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#delete MonitoringAlarm#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#update MonitoringAlarm#update}.

---

##### `reset_alarm_summary` <a name="reset_alarm_summary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetAlarmSummary"></a>

```python
def reset_alarm_summary() -> None
```

##### `reset_body` <a name="reset_body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_evaluation_slack_duration` <a name="reset_evaluation_slack_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetEvaluationSlackDuration"></a>

```python
def reset_evaluation_slack_duration() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_notifications_per_metric_dimension_enabled` <a name="reset_is_notifications_per_metric_dimension_enabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetIsNotificationsPerMetricDimensionEnabled"></a>

```python
def reset_is_notifications_per_metric_dimension_enabled() -> None
```

##### `reset_message_format` <a name="reset_message_format" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMessageFormat"></a>

```python
def reset_message_format() -> None
```

##### `reset_metric_compartment_id_in_subtree` <a name="reset_metric_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMetricCompartmentIdInSubtree"></a>

```python
def reset_metric_compartment_id_in_subtree() -> None
```

##### `reset_notification_title` <a name="reset_notification_title" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationTitle"></a>

```python
def reset_notification_title() -> None
```

##### `reset_notification_version` <a name="reset_notification_version" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationVersion"></a>

```python
def reset_notification_version() -> None
```

##### `reset_overrides` <a name="reset_overrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrides"></a>

```python
def reset_overrides() -> None
```

##### `reset_pending_duration` <a name="reset_pending_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetPendingDuration"></a>

```python
def reset_pending_duration() -> None
```

##### `reset_repeat_notification_duration` <a name="reset_repeat_notification_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRepeatNotificationDuration"></a>

```python
def reset_repeat_notification_duration() -> None
```

##### `reset_resolution` <a name="reset_resolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResolution"></a>

```python
def reset_resolution() -> None
```

##### `reset_resource_group` <a name="reset_resource_group" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRuleName"></a>

```python
def reset_rule_name() -> None
```

##### `reset_suppression` <a name="reset_suppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetSuppression"></a>

```python
def reset_suppression() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MonitoringAlarm resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm

monitoringAlarm.MonitoringAlarm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm

monitoringAlarm.MonitoringAlarm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm

monitoringAlarm.MonitoringAlarm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm

monitoringAlarm.MonitoringAlarm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MonitoringAlarm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonitoringAlarm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonitoringAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overrides">overrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList">MonitoringAlarmOverridesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppression">suppression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference">MonitoringAlarmSuppressionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference">MonitoringAlarmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummaryInput">alarm_summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinationsInput">destinations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDurationInput">evaluation_slack_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabledInput">is_notifications_per_metric_dimension_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormatInput">message_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInput">metric_compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtreeInput">metric_compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitleInput">notification_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersionInput">notification_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overridesInput">overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDurationInput">pending_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDurationInput">repeat_notification_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolutionInput">resolution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppressionInput">suppression_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummary">alarm_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDuration">evaluation_slack_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabled">is_notifications_per_metric_dimension_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormat">message_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentId">metric_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtree">metric_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitle">notification_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersion">notification_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDuration">pending_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDuration">repeat_notification_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolution">resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severity">severity</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overrides"></a>

```python
overrides: MonitoringAlarmOverridesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList">MonitoringAlarmOverridesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `suppression`<sup>Required</sup> <a name="suppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppression"></a>

```python
suppression: MonitoringAlarmSuppressionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference">MonitoringAlarmSuppressionOutputReference</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeouts"></a>

```python
timeouts: MonitoringAlarmTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference">MonitoringAlarmTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `alarm_summary_input`<sup>Optional</sup> <a name="alarm_summary_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummaryInput"></a>

```python
alarm_summary_input: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinationsInput"></a>

```python
destinations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `evaluation_slack_duration_input`<sup>Optional</sup> <a name="evaluation_slack_duration_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDurationInput"></a>

```python
evaluation_slack_duration_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_notifications_per_metric_dimension_enabled_input`<sup>Optional</sup> <a name="is_notifications_per_metric_dimension_enabled_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabledInput"></a>

```python
is_notifications_per_metric_dimension_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message_format_input`<sup>Optional</sup> <a name="message_format_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormatInput"></a>

```python
message_format_input: str
```

- *Type:* str

---

##### `metric_compartment_id_input`<sup>Optional</sup> <a name="metric_compartment_id_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInput"></a>

```python
metric_compartment_id_input: str
```

- *Type:* str

---

##### `metric_compartment_id_in_subtree_input`<sup>Optional</sup> <a name="metric_compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtreeInput"></a>

```python
metric_compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `notification_title_input`<sup>Optional</sup> <a name="notification_title_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitleInput"></a>

```python
notification_title_input: str
```

- *Type:* str

---

##### `notification_version_input`<sup>Optional</sup> <a name="notification_version_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersionInput"></a>

```python
notification_version_input: str
```

- *Type:* str

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overridesInput"></a>

```python
overrides_input: typing.Union[IResolvable, typing.List[MonitoringAlarmOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>]]

---

##### `pending_duration_input`<sup>Optional</sup> <a name="pending_duration_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDurationInput"></a>

```python
pending_duration_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `repeat_notification_duration_input`<sup>Optional</sup> <a name="repeat_notification_duration_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDurationInput"></a>

```python
repeat_notification_duration_input: str
```

- *Type:* str

---

##### `resolution_input`<sup>Optional</sup> <a name="resolution_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolutionInput"></a>

```python
resolution_input: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `suppression_input`<sup>Optional</sup> <a name="suppression_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppressionInput"></a>

```python
suppression_input: MonitoringAlarmSuppression
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MonitoringAlarmTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>]

---

##### `alarm_summary`<sup>Required</sup> <a name="alarm_summary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummary"></a>

```python
alarm_summary: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `evaluation_slack_duration`<sup>Required</sup> <a name="evaluation_slack_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDuration"></a>

```python
evaluation_slack_duration: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_notifications_per_metric_dimension_enabled`<sup>Required</sup> <a name="is_notifications_per_metric_dimension_enabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabled"></a>

```python
is_notifications_per_metric_dimension_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message_format`<sup>Required</sup> <a name="message_format" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormat"></a>

```python
message_format: str
```

- *Type:* str

---

##### `metric_compartment_id`<sup>Required</sup> <a name="metric_compartment_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentId"></a>

```python
metric_compartment_id: str
```

- *Type:* str

---

##### `metric_compartment_id_in_subtree`<sup>Required</sup> <a name="metric_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtree"></a>

```python
metric_compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `notification_title`<sup>Required</sup> <a name="notification_title" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitle"></a>

```python
notification_title: str
```

- *Type:* str

---

##### `notification_version`<sup>Required</sup> <a name="notification_version" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersion"></a>

```python
notification_version: str
```

- *Type:* str

---

##### `pending_duration`<sup>Required</sup> <a name="pending_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDuration"></a>

```python
pending_duration: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `repeat_notification_duration`<sup>Required</sup> <a name="repeat_notification_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDuration"></a>

```python
repeat_notification_duration: str
```

- *Type:* str

---

##### `resolution`<sup>Required</sup> <a name="resolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolution"></a>

```python
resolution: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringAlarmConfig <a name="MonitoringAlarmConfig" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm

monitoringAlarm.MonitoringAlarmConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  destinations: typing.List[str],
  display_name: str,
  is_enabled: typing.Union[bool, IResolvable],
  metric_compartment_id: str,
  namespace: str,
  query: str,
  severity: str,
  alarm_summary: str = None,
  body: str = None,
  defined_tags: typing.Mapping[str] = None,
  evaluation_slack_duration: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_notifications_per_metric_dimension_enabled: typing.Union[bool, IResolvable] = None,
  message_format: str = None,
  metric_compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  notification_title: str = None,
  notification_version: str = None,
  overrides: typing.Union[IResolvable, typing.List[MonitoringAlarmOverrides]] = None,
  pending_duration: str = None,
  repeat_notification_duration: str = None,
  resolution: str = None,
  resource_group: str = None,
  rule_name: str = None,
  suppression: MonitoringAlarmSuppression = None,
  timeouts: MonitoringAlarmTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentId">metric_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.severity">severity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.alarmSummary">alarm_summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.body">body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.evaluationSlackDuration">evaluation_slack_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isNotificationsPerMetricDimensionEnabled">is_notifications_per_metric_dimension_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.messageFormat">message_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentIdInSubtree">metric_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationTitle">notification_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationVersion">notification_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.overrides">overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>]]</code> | overrides block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.pendingDuration">pending_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.repeatNotificationDuration">repeat_notification_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resolution">resolution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resourceGroup">resource_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.suppression">suppression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | suppression block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}.

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}.

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}.

---

##### `metric_compartment_id`<sup>Required</sup> <a name="metric_compartment_id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentId"></a>

```python
metric_compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}.

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}.

---

##### `alarm_summary`<sup>Optional</sup> <a name="alarm_summary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.alarmSummary"></a>

```python
alarm_summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}.

---

##### `body`<sup>Optional</sup> <a name="body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.body"></a>

```python
body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}.

---

##### `evaluation_slack_duration`<sup>Optional</sup> <a name="evaluation_slack_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.evaluationSlackDuration"></a>

```python
evaluation_slack_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_notifications_per_metric_dimension_enabled`<sup>Optional</sup> <a name="is_notifications_per_metric_dimension_enabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isNotificationsPerMetricDimensionEnabled"></a>

```python
is_notifications_per_metric_dimension_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}.

---

##### `message_format`<sup>Optional</sup> <a name="message_format" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.messageFormat"></a>

```python
message_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}.

---

##### `metric_compartment_id_in_subtree`<sup>Optional</sup> <a name="metric_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentIdInSubtree"></a>

```python
metric_compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}.

---

##### `notification_title`<sup>Optional</sup> <a name="notification_title" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationTitle"></a>

```python
notification_title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}.

---

##### `notification_version`<sup>Optional</sup> <a name="notification_version" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationVersion"></a>

```python
notification_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.overrides"></a>

```python
overrides: typing.Union[IResolvable, typing.List[MonitoringAlarmOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>]]

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#overrides MonitoringAlarm#overrides}

---

##### `pending_duration`<sup>Optional</sup> <a name="pending_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.pendingDuration"></a>

```python
pending_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}.

---

##### `repeat_notification_duration`<sup>Optional</sup> <a name="repeat_notification_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.repeatNotificationDuration"></a>

```python
repeat_notification_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}.

---

##### `resolution`<sup>Optional</sup> <a name="resolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resolution"></a>

```python
resolution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}.

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}.

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}.

---

##### `suppression`<sup>Optional</sup> <a name="suppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.suppression"></a>

```python
suppression: MonitoringAlarmSuppression
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

suppression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#suppression MonitoringAlarm#suppression}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.timeouts"></a>

```python
timeouts: MonitoringAlarmTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#timeouts MonitoringAlarm#timeouts}

---

### MonitoringAlarmOverrides <a name="MonitoringAlarmOverrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm

monitoringAlarm.MonitoringAlarmOverrides(
  body: str = None,
  pending_duration: str = None,
  query: str = None,
  rule_name: str = None,
  severity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.body">body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.pendingDuration">pending_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.severity">severity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}. |

---

##### `body`<sup>Optional</sup> <a name="body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.body"></a>

```python
body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}.

---

##### `pending_duration`<sup>Optional</sup> <a name="pending_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.pendingDuration"></a>

```python
pending_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}.

---

##### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}.

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.severity"></a>

```python
severity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}.

---

### MonitoringAlarmSuppression <a name="MonitoringAlarmSuppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm

monitoringAlarm.MonitoringAlarmSuppression(
  time_suppress_from: str,
  time_suppress_until: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressFrom">time_suppress_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_from MonitoringAlarm#time_suppress_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressUntil">time_suppress_until</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_until MonitoringAlarm#time_suppress_until}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#description MonitoringAlarm#description}. |

---

##### `time_suppress_from`<sup>Required</sup> <a name="time_suppress_from" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressFrom"></a>

```python
time_suppress_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_from MonitoringAlarm#time_suppress_from}.

---

##### `time_suppress_until`<sup>Required</sup> <a name="time_suppress_until" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressUntil"></a>

```python
time_suppress_until: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_until MonitoringAlarm#time_suppress_until}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#description MonitoringAlarm#description}.

---

### MonitoringAlarmTimeouts <a name="MonitoringAlarmTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm

monitoringAlarm.MonitoringAlarmTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#create MonitoringAlarm#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#delete MonitoringAlarm#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#update MonitoringAlarm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#create MonitoringAlarm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#delete MonitoringAlarm#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#update MonitoringAlarm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringAlarmOverridesList <a name="MonitoringAlarmOverridesList" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm

monitoringAlarm.MonitoringAlarmOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitoringAlarmOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitoringAlarmOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>]]

---


### MonitoringAlarmOverridesOutputReference <a name="MonitoringAlarmOverridesOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm

monitoringAlarm.MonitoringAlarmOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetPendingDuration">reset_pending_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetRuleName">reset_rule_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetSeverity">reset_severity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_body` <a name="reset_body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_pending_duration` <a name="reset_pending_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetPendingDuration"></a>

```python
def reset_pending_duration() -> None
```

##### `reset_query` <a name="reset_query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetRuleName"></a>

```python
def reset_rule_name() -> None
```

##### `reset_severity` <a name="reset_severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetSeverity"></a>

```python
def reset_severity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDurationInput">pending_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDuration">pending_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `pending_duration_input`<sup>Optional</sup> <a name="pending_duration_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDurationInput"></a>

```python
pending_duration_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `pending_duration`<sup>Required</sup> <a name="pending_duration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDuration"></a>

```python
pending_duration: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitoringAlarmOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>]

---


### MonitoringAlarmSuppressionOutputReference <a name="MonitoringAlarmSuppressionOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm

monitoringAlarm.MonitoringAlarmSuppressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFromInput">time_suppress_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntilInput">time_suppress_until_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFrom">time_suppress_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntil">time_suppress_until</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `time_suppress_from_input`<sup>Optional</sup> <a name="time_suppress_from_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFromInput"></a>

```python
time_suppress_from_input: str
```

- *Type:* str

---

##### `time_suppress_until_input`<sup>Optional</sup> <a name="time_suppress_until_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntilInput"></a>

```python
time_suppress_until_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `time_suppress_from`<sup>Required</sup> <a name="time_suppress_from" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFrom"></a>

```python
time_suppress_from: str
```

- *Type:* str

---

##### `time_suppress_until`<sup>Required</sup> <a name="time_suppress_until" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntil"></a>

```python
time_suppress_until: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.internalValue"></a>

```python
internal_value: MonitoringAlarmSuppression
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

---


### MonitoringAlarmTimeoutsOutputReference <a name="MonitoringAlarmTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import monitoring_alarm

monitoringAlarm.MonitoringAlarmTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitoringAlarmTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>]

---



