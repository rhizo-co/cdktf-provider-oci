# `monitoringAlarm` Submodule <a name="`monitoringAlarm` Submodule" id="rhizo-co-terraform-provider-oci.monitoringAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringAlarm <a name="MonitoringAlarm" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm oci_monitoring_alarm}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm.MonitoringAlarm;

MonitoringAlarm.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .destinations(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .isEnabled(java.lang.Boolean)
    .isEnabled(IResolvable)
    .metricCompartmentId(java.lang.String)
    .namespace(java.lang.String)
    .query(java.lang.String)
    .severity(java.lang.String)
//  .alarmSummary(java.lang.String)
//  .body(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .evaluationSlackDuration(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isNotificationsPerMetricDimensionEnabled(java.lang.Boolean)
//  .isNotificationsPerMetricDimensionEnabled(IResolvable)
//  .messageFormat(java.lang.String)
//  .metricCompartmentIdInSubtree(java.lang.Boolean)
//  .metricCompartmentIdInSubtree(IResolvable)
//  .notificationTitle(java.lang.String)
//  .notificationVersion(java.lang.String)
//  .overrides(IResolvable)
//  .overrides(java.util.List<MonitoringAlarmOverrides>)
//  .pendingDuration(java.lang.String)
//  .repeatNotificationDuration(java.lang.String)
//  .resolution(java.lang.String)
//  .resourceGroup(java.lang.String)
//  .ruleName(java.lang.String)
//  .suppression(MonitoringAlarmSuppression)
//  .timeouts(MonitoringAlarmTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.destinations">destinations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.metricCompartmentId">metricCompartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.alarmSummary">alarmSummary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.body">body</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.evaluationSlackDuration">evaluationSlackDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.isNotificationsPerMetricDimensionEnabled">isNotificationsPerMetricDimensionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.metricCompartmentIdInSubtree">metricCompartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.notificationTitle">notificationTitle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.notificationVersion">notificationVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.overrides">overrides</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>></code> | overrides block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.pendingDuration">pendingDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.repeatNotificationDuration">repeatNotificationDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.resolution">resolution</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.suppression">suppression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | suppression block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}.

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.destinations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.isEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}.

---

##### `metricCompartmentId`<sup>Required</sup> <a name="metricCompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.metricCompartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}.

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.query"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.severity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}.

---

##### `alarmSummary`<sup>Optional</sup> <a name="alarmSummary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.alarmSummary"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}.

---

##### `body`<sup>Optional</sup> <a name="body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.body"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}.

---

##### `evaluationSlackDuration`<sup>Optional</sup> <a name="evaluationSlackDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.evaluationSlackDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isNotificationsPerMetricDimensionEnabled`<sup>Optional</sup> <a name="isNotificationsPerMetricDimensionEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.isNotificationsPerMetricDimensionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}.

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.messageFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}.

---

##### `metricCompartmentIdInSubtree`<sup>Optional</sup> <a name="metricCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.metricCompartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}.

---

##### `notificationTitle`<sup>Optional</sup> <a name="notificationTitle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.notificationTitle"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}.

---

##### `notificationVersion`<sup>Optional</sup> <a name="notificationVersion" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.notificationVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.overrides"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>>

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#overrides MonitoringAlarm#overrides}

---

##### `pendingDuration`<sup>Optional</sup> <a name="pendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.pendingDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}.

---

##### `repeatNotificationDuration`<sup>Optional</sup> <a name="repeatNotificationDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.repeatNotificationDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}.

---

##### `resolution`<sup>Optional</sup> <a name="resolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.resolution"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.resourceGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.ruleName"></a>

- *Type:* java.lang.String

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
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression">putSuppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetAlarmSummary">resetAlarmSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetEvaluationSlackDuration">resetEvaluationSlackDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetIsNotificationsPerMetricDimensionEnabled">resetIsNotificationsPerMetricDimensionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMetricCompartmentIdInSubtree">resetMetricCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationTitle">resetNotificationTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationVersion">resetNotificationVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrides">resetOverrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetPendingDuration">resetPendingDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRepeatNotificationDuration">resetRepeatNotificationDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResolution">resetResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetSuppression">resetSuppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOverrides` <a name="putOverrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides"></a>

```java
public void putOverrides(IResolvable OR java.util.List<MonitoringAlarmOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>>

---

##### `putSuppression` <a name="putSuppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression"></a>

```java
public void putSuppression(MonitoringAlarmSuppression value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts"></a>

```java
public void putTimeouts(MonitoringAlarmTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>

---

##### `resetAlarmSummary` <a name="resetAlarmSummary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetAlarmSummary"></a>

```java
public void resetAlarmSummary()
```

##### `resetBody` <a name="resetBody" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetBody"></a>

```java
public void resetBody()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetEvaluationSlackDuration` <a name="resetEvaluationSlackDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetEvaluationSlackDuration"></a>

```java
public void resetEvaluationSlackDuration()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetId"></a>

```java
public void resetId()
```

##### `resetIsNotificationsPerMetricDimensionEnabled` <a name="resetIsNotificationsPerMetricDimensionEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetIsNotificationsPerMetricDimensionEnabled"></a>

```java
public void resetIsNotificationsPerMetricDimensionEnabled()
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMessageFormat"></a>

```java
public void resetMessageFormat()
```

##### `resetMetricCompartmentIdInSubtree` <a name="resetMetricCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMetricCompartmentIdInSubtree"></a>

```java
public void resetMetricCompartmentIdInSubtree()
```

##### `resetNotificationTitle` <a name="resetNotificationTitle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationTitle"></a>

```java
public void resetNotificationTitle()
```

##### `resetNotificationVersion` <a name="resetNotificationVersion" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationVersion"></a>

```java
public void resetNotificationVersion()
```

##### `resetOverrides` <a name="resetOverrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrides"></a>

```java
public void resetOverrides()
```

##### `resetPendingDuration` <a name="resetPendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetPendingDuration"></a>

```java
public void resetPendingDuration()
```

##### `resetRepeatNotificationDuration` <a name="resetRepeatNotificationDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRepeatNotificationDuration"></a>

```java
public void resetRepeatNotificationDuration()
```

##### `resetResolution` <a name="resetResolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResolution"></a>

```java
public void resetResolution()
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResourceGroup"></a>

```java
public void resetResourceGroup()
```

##### `resetRuleName` <a name="resetRuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRuleName"></a>

```java
public void resetRuleName()
```

##### `resetSuppression` <a name="resetSuppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetSuppression"></a>

```java
public void resetSuppression()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringAlarm resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm.MonitoringAlarm;

MonitoringAlarm.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm.MonitoringAlarm;

MonitoringAlarm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm.MonitoringAlarm;

MonitoringAlarm.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm.MonitoringAlarm;

MonitoringAlarm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitoringAlarm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MonitoringAlarm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitoringAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitoringAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overrides">overrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList">MonitoringAlarmOverridesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppression">suppression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference">MonitoringAlarmSuppressionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference">MonitoringAlarmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummaryInput">alarmSummaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinationsInput">destinationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDurationInput">evaluationSlackDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabledInput">isNotificationsPerMetricDimensionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormatInput">messageFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInput">metricCompartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtreeInput">metricCompartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitleInput">notificationTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersionInput">notificationVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overridesInput">overridesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDurationInput">pendingDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDurationInput">repeatNotificationDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolutionInput">resolutionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroupInput">resourceGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppressionInput">suppressionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummary">alarmSummary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinations">destinations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDuration">evaluationSlackDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabled">isNotificationsPerMetricDimensionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentId">metricCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtree">metricCompartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitle">notificationTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersion">notificationVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDuration">pendingDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDuration">repeatNotificationDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolution">resolution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overrides"></a>

```java
public MonitoringAlarmOverridesList getOverrides();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList">MonitoringAlarmOverridesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `suppression`<sup>Required</sup> <a name="suppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppression"></a>

```java
public MonitoringAlarmSuppressionOutputReference getSuppression();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference">MonitoringAlarmSuppressionOutputReference</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeouts"></a>

```java
public MonitoringAlarmTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference">MonitoringAlarmTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `alarmSummaryInput`<sup>Optional</sup> <a name="alarmSummaryInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummaryInput"></a>

```java
public java.lang.String getAlarmSummaryInput();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinationsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `evaluationSlackDurationInput`<sup>Optional</sup> <a name="evaluationSlackDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDurationInput"></a>

```java
public java.lang.String getEvaluationSlackDurationInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isNotificationsPerMetricDimensionEnabledInput`<sup>Optional</sup> <a name="isNotificationsPerMetricDimensionEnabledInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabledInput"></a>

```java
public java.lang.Object getIsNotificationsPerMetricDimensionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormatInput"></a>

```java
public java.lang.String getMessageFormatInput();
```

- *Type:* java.lang.String

---

##### `metricCompartmentIdInput`<sup>Optional</sup> <a name="metricCompartmentIdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInput"></a>

```java
public java.lang.String getMetricCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `metricCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="metricCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getMetricCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `notificationTitleInput`<sup>Optional</sup> <a name="notificationTitleInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitleInput"></a>

```java
public java.lang.String getNotificationTitleInput();
```

- *Type:* java.lang.String

---

##### `notificationVersionInput`<sup>Optional</sup> <a name="notificationVersionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersionInput"></a>

```java
public java.lang.String getNotificationVersionInput();
```

- *Type:* java.lang.String

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overridesInput"></a>

```java
public java.lang.Object getOverridesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>>

---

##### `pendingDurationInput`<sup>Optional</sup> <a name="pendingDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDurationInput"></a>

```java
public java.lang.String getPendingDurationInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `repeatNotificationDurationInput`<sup>Optional</sup> <a name="repeatNotificationDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDurationInput"></a>

```java
public java.lang.String getRepeatNotificationDurationInput();
```

- *Type:* java.lang.String

---

##### `resolutionInput`<sup>Optional</sup> <a name="resolutionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolutionInput"></a>

```java
public java.lang.String getResolutionInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroupInput"></a>

```java
public java.lang.String getResourceGroupInput();
```

- *Type:* java.lang.String

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `suppressionInput`<sup>Optional</sup> <a name="suppressionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppressionInput"></a>

```java
public MonitoringAlarmSuppression getSuppressionInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>

---

##### `alarmSummary`<sup>Required</sup> <a name="alarmSummary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummary"></a>

```java
public java.lang.String getAlarmSummary();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinations"></a>

```java
public java.util.List<java.lang.String> getDestinations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `evaluationSlackDuration`<sup>Required</sup> <a name="evaluationSlackDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDuration"></a>

```java
public java.lang.String getEvaluationSlackDuration();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isNotificationsPerMetricDimensionEnabled`<sup>Required</sup> <a name="isNotificationsPerMetricDimensionEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabled"></a>

```java
public java.lang.Object getIsNotificationsPerMetricDimensionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

---

##### `metricCompartmentId`<sup>Required</sup> <a name="metricCompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentId"></a>

```java
public java.lang.String getMetricCompartmentId();
```

- *Type:* java.lang.String

---

##### `metricCompartmentIdInSubtree`<sup>Required</sup> <a name="metricCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtree"></a>

```java
public java.lang.Object getMetricCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `notificationTitle`<sup>Required</sup> <a name="notificationTitle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitle"></a>

```java
public java.lang.String getNotificationTitle();
```

- *Type:* java.lang.String

---

##### `notificationVersion`<sup>Required</sup> <a name="notificationVersion" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersion"></a>

```java
public java.lang.String getNotificationVersion();
```

- *Type:* java.lang.String

---

##### `pendingDuration`<sup>Required</sup> <a name="pendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDuration"></a>

```java
public java.lang.String getPendingDuration();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `repeatNotificationDuration`<sup>Required</sup> <a name="repeatNotificationDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDuration"></a>

```java
public java.lang.String getRepeatNotificationDuration();
```

- *Type:* java.lang.String

---

##### `resolution`<sup>Required</sup> <a name="resolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolution"></a>

```java
public java.lang.String getResolution();
```

- *Type:* java.lang.String

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringAlarmConfig <a name="MonitoringAlarmConfig" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm.MonitoringAlarmConfig;

MonitoringAlarmConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .destinations(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .isEnabled(java.lang.Boolean)
    .isEnabled(IResolvable)
    .metricCompartmentId(java.lang.String)
    .namespace(java.lang.String)
    .query(java.lang.String)
    .severity(java.lang.String)
//  .alarmSummary(java.lang.String)
//  .body(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .evaluationSlackDuration(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isNotificationsPerMetricDimensionEnabled(java.lang.Boolean)
//  .isNotificationsPerMetricDimensionEnabled(IResolvable)
//  .messageFormat(java.lang.String)
//  .metricCompartmentIdInSubtree(java.lang.Boolean)
//  .metricCompartmentIdInSubtree(IResolvable)
//  .notificationTitle(java.lang.String)
//  .notificationVersion(java.lang.String)
//  .overrides(IResolvable)
//  .overrides(java.util.List<MonitoringAlarmOverrides>)
//  .pendingDuration(java.lang.String)
//  .repeatNotificationDuration(java.lang.String)
//  .resolution(java.lang.String)
//  .resourceGroup(java.lang.String)
//  .ruleName(java.lang.String)
//  .suppression(MonitoringAlarmSuppression)
//  .timeouts(MonitoringAlarmTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.destinations">destinations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentId">metricCompartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.alarmSummary">alarmSummary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.body">body</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.evaluationSlackDuration">evaluationSlackDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isNotificationsPerMetricDimensionEnabled">isNotificationsPerMetricDimensionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentIdInSubtree">metricCompartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationTitle">notificationTitle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationVersion">notificationVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.overrides">overrides</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>></code> | overrides block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.pendingDuration">pendingDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.repeatNotificationDuration">repeatNotificationDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resolution">resolution</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.suppression">suppression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | suppression block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}.

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.destinations"></a>

```java
public java.util.List<java.lang.String> getDestinations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}.

---

##### `metricCompartmentId`<sup>Required</sup> <a name="metricCompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentId"></a>

```java
public java.lang.String getMetricCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}.

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}.

---

##### `alarmSummary`<sup>Optional</sup> <a name="alarmSummary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.alarmSummary"></a>

```java
public java.lang.String getAlarmSummary();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}.

---

##### `body`<sup>Optional</sup> <a name="body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}.

---

##### `evaluationSlackDuration`<sup>Optional</sup> <a name="evaluationSlackDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.evaluationSlackDuration"></a>

```java
public java.lang.String getEvaluationSlackDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isNotificationsPerMetricDimensionEnabled`<sup>Optional</sup> <a name="isNotificationsPerMetricDimensionEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isNotificationsPerMetricDimensionEnabled"></a>

```java
public java.lang.Object getIsNotificationsPerMetricDimensionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}.

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}.

---

##### `metricCompartmentIdInSubtree`<sup>Optional</sup> <a name="metricCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentIdInSubtree"></a>

```java
public java.lang.Object getMetricCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}.

---

##### `notificationTitle`<sup>Optional</sup> <a name="notificationTitle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationTitle"></a>

```java
public java.lang.String getNotificationTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}.

---

##### `notificationVersion`<sup>Optional</sup> <a name="notificationVersion" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationVersion"></a>

```java
public java.lang.String getNotificationVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.overrides"></a>

```java
public java.lang.Object getOverrides();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>>

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#overrides MonitoringAlarm#overrides}

---

##### `pendingDuration`<sup>Optional</sup> <a name="pendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.pendingDuration"></a>

```java
public java.lang.String getPendingDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}.

---

##### `repeatNotificationDuration`<sup>Optional</sup> <a name="repeatNotificationDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.repeatNotificationDuration"></a>

```java
public java.lang.String getRepeatNotificationDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}.

---

##### `resolution`<sup>Optional</sup> <a name="resolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resolution"></a>

```java
public java.lang.String getResolution();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}.

---

##### `suppression`<sup>Optional</sup> <a name="suppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.suppression"></a>

```java
public MonitoringAlarmSuppression getSuppression();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

suppression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#suppression MonitoringAlarm#suppression}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.timeouts"></a>

```java
public MonitoringAlarmTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#timeouts MonitoringAlarm#timeouts}

---

### MonitoringAlarmOverrides <a name="MonitoringAlarmOverrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm.MonitoringAlarmOverrides;

MonitoringAlarmOverrides.builder()
//  .body(java.lang.String)
//  .pendingDuration(java.lang.String)
//  .query(java.lang.String)
//  .ruleName(java.lang.String)
//  .severity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.body">body</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.pendingDuration">pendingDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}. |

---

##### `body`<sup>Optional</sup> <a name="body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}.

---

##### `pendingDuration`<sup>Optional</sup> <a name="pendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.pendingDuration"></a>

```java
public java.lang.String getPendingDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}.

---

##### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}.

---

### MonitoringAlarmSuppression <a name="MonitoringAlarmSuppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm.MonitoringAlarmSuppression;

MonitoringAlarmSuppression.builder()
    .timeSuppressFrom(java.lang.String)
    .timeSuppressUntil(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressFrom">timeSuppressFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_from MonitoringAlarm#time_suppress_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressUntil">timeSuppressUntil</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_until MonitoringAlarm#time_suppress_until}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#description MonitoringAlarm#description}. |

---

##### `timeSuppressFrom`<sup>Required</sup> <a name="timeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressFrom"></a>

```java
public java.lang.String getTimeSuppressFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_from MonitoringAlarm#time_suppress_from}.

---

##### `timeSuppressUntil`<sup>Required</sup> <a name="timeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressUntil"></a>

```java
public java.lang.String getTimeSuppressUntil();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_until MonitoringAlarm#time_suppress_until}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#description MonitoringAlarm#description}.

---

### MonitoringAlarmTimeouts <a name="MonitoringAlarmTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm.MonitoringAlarmTimeouts;

MonitoringAlarmTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#create MonitoringAlarm#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#delete MonitoringAlarm#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#update MonitoringAlarm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#create MonitoringAlarm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#delete MonitoringAlarm#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#update MonitoringAlarm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringAlarmOverridesList <a name="MonitoringAlarmOverridesList" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm.MonitoringAlarmOverridesList;

new MonitoringAlarmOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get"></a>

```java
public MonitoringAlarmOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>>

---


### MonitoringAlarmOverridesOutputReference <a name="MonitoringAlarmOverridesOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm.MonitoringAlarmOverridesOutputReference;

new MonitoringAlarmOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetPendingDuration">resetPendingDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBody` <a name="resetBody" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetPendingDuration` <a name="resetPendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetPendingDuration"></a>

```java
public void resetPendingDuration()
```

##### `resetQuery` <a name="resetQuery" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetRuleName` <a name="resetRuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetRuleName"></a>

```java
public void resetRuleName()
```

##### `resetSeverity` <a name="resetSeverity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetSeverity"></a>

```java
public void resetSeverity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDurationInput">pendingDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDuration">pendingDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `pendingDurationInput`<sup>Optional</sup> <a name="pendingDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDurationInput"></a>

```java
public java.lang.String getPendingDurationInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `pendingDuration`<sup>Required</sup> <a name="pendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDuration"></a>

```java
public java.lang.String getPendingDuration();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides">MonitoringAlarmOverrides</a>

---


### MonitoringAlarmSuppressionOutputReference <a name="MonitoringAlarmSuppressionOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm.MonitoringAlarmSuppressionOutputReference;

new MonitoringAlarmSuppressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFromInput">timeSuppressFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntilInput">timeSuppressUntilInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFrom">timeSuppressFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntil">timeSuppressUntil</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `timeSuppressFromInput`<sup>Optional</sup> <a name="timeSuppressFromInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFromInput"></a>

```java
public java.lang.String getTimeSuppressFromInput();
```

- *Type:* java.lang.String

---

##### `timeSuppressUntilInput`<sup>Optional</sup> <a name="timeSuppressUntilInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntilInput"></a>

```java
public java.lang.String getTimeSuppressUntilInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `timeSuppressFrom`<sup>Required</sup> <a name="timeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFrom"></a>

```java
public java.lang.String getTimeSuppressFrom();
```

- *Type:* java.lang.String

---

##### `timeSuppressUntil`<sup>Required</sup> <a name="timeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntil"></a>

```java
public java.lang.String getTimeSuppressUntil();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.internalValue"></a>

```java
public MonitoringAlarmSuppression getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

---


### MonitoringAlarmTimeoutsOutputReference <a name="MonitoringAlarmTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm.MonitoringAlarmTimeoutsOutputReference;

new MonitoringAlarmTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>

---



