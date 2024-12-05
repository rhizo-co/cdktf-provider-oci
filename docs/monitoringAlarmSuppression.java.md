# `monitoringAlarmSuppression` Submodule <a name="`monitoringAlarmSuppression` Submodule" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringAlarmSuppressionA <a name="MonitoringAlarmSuppressionA" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression oci_monitoring_alarm_suppression}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm_suppression.MonitoringAlarmSuppressionA;

MonitoringAlarmSuppressionA.Builder.create(Construct scope, java.lang.String id)
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
    .alarmSuppressionTarget(MonitoringAlarmSuppressionAlarmSuppressionTarget)
    .displayName(java.lang.String)
    .timeSuppressFrom(java.lang.String)
    .timeSuppressUntil(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .level(java.lang.String)
//  .suppressionConditions(IResolvable)
//  .suppressionConditions(java.util.List<MonitoringAlarmSuppressionSuppressionConditions>)
//  .timeouts(MonitoringAlarmSuppressionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.alarmSuppressionTarget">alarmSuppressionTarget</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | alarm_suppression_target block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#display_name MonitoringAlarmSuppressionA#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.timeSuppressFrom">timeSuppressFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_from MonitoringAlarmSuppressionA#time_suppress_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.timeSuppressUntil">timeSuppressUntil</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_until MonitoringAlarmSuppressionA#time_suppress_until}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#defined_tags MonitoringAlarmSuppressionA#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#description MonitoringAlarmSuppressionA#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#dimensions MonitoringAlarmSuppressionA#dimensions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#freeform_tags MonitoringAlarmSuppressionA#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#id MonitoringAlarmSuppressionA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#level MonitoringAlarmSuppressionA#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.suppressionConditions">suppressionConditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>></code> | suppression_conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alarmSuppressionTarget`<sup>Required</sup> <a name="alarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.alarmSuppressionTarget"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

alarm_suppression_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_suppression_target MonitoringAlarmSuppressionA#alarm_suppression_target}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#display_name MonitoringAlarmSuppressionA#display_name}.

---

##### `timeSuppressFrom`<sup>Required</sup> <a name="timeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.timeSuppressFrom"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_from MonitoringAlarmSuppressionA#time_suppress_from}.

---

##### `timeSuppressUntil`<sup>Required</sup> <a name="timeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.timeSuppressUntil"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_until MonitoringAlarmSuppressionA#time_suppress_until}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#defined_tags MonitoringAlarmSuppressionA#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#description MonitoringAlarmSuppressionA#description}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.dimensions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#dimensions MonitoringAlarmSuppressionA#dimensions}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#freeform_tags MonitoringAlarmSuppressionA#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#id MonitoringAlarmSuppressionA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `level`<sup>Optional</sup> <a name="level" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.level"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#level MonitoringAlarmSuppressionA#level}.

---

##### `suppressionConditions`<sup>Optional</sup> <a name="suppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.suppressionConditions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>>

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
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget">putAlarmSuppressionTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putSuppressionConditions">putSuppressionConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetSuppressionConditions">resetSuppressionConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlarmSuppressionTarget` <a name="putAlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget"></a>

```java
public void putAlarmSuppressionTarget(MonitoringAlarmSuppressionAlarmSuppressionTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

---

##### `putSuppressionConditions` <a name="putSuppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putSuppressionConditions"></a>

```java
public void putSuppressionConditions(IResolvable OR java.util.List<MonitoringAlarmSuppressionSuppressionConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putSuppressionConditions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putTimeouts"></a>

```java
public void putTimeouts(MonitoringAlarmSuppressionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDimensions` <a name="resetDimensions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetId"></a>

```java
public void resetId()
```

##### `resetLevel` <a name="resetLevel" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetLevel"></a>

```java
public void resetLevel()
```

##### `resetSuppressionConditions` <a name="resetSuppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetSuppressionConditions"></a>

```java
public void resetSuppressionConditions()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringAlarmSuppressionA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm_suppression.MonitoringAlarmSuppressionA;

MonitoringAlarmSuppressionA.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm_suppression.MonitoringAlarmSuppressionA;

MonitoringAlarmSuppressionA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm_suppression.MonitoringAlarmSuppressionA;

MonitoringAlarmSuppressionA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm_suppression.MonitoringAlarmSuppressionA;

MonitoringAlarmSuppressionA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitoringAlarmSuppressionA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MonitoringAlarmSuppressionA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitoringAlarmSuppressionA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitoringAlarmSuppressionA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringAlarmSuppressionA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTarget">alarmSuppressionTarget</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference">MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditions">suppressionConditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList">MonitoringAlarmSuppressionSuppressionConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference">MonitoringAlarmSuppressionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTargetInput">alarmSuppressionTargetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditionsInput">suppressionConditionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFromInput">timeSuppressFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntilInput">timeSuppressUntilInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFrom">timeSuppressFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntil">timeSuppressUntil</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alarmSuppressionTarget`<sup>Required</sup> <a name="alarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTarget"></a>

```java
public MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference getAlarmSuppressionTarget();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference">MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `suppressionConditions`<sup>Required</sup> <a name="suppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditions"></a>

```java
public MonitoringAlarmSuppressionSuppressionConditionsList getSuppressionConditions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList">MonitoringAlarmSuppressionSuppressionConditionsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeouts"></a>

```java
public MonitoringAlarmSuppressionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference">MonitoringAlarmSuppressionTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `alarmSuppressionTargetInput`<sup>Optional</sup> <a name="alarmSuppressionTargetInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTargetInput"></a>

```java
public MonitoringAlarmSuppressionAlarmSuppressionTarget getAlarmSuppressionTargetInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `suppressionConditionsInput`<sup>Optional</sup> <a name="suppressionConditionsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditionsInput"></a>

```java
public java.lang.Object getSuppressionConditionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>

---

##### `timeSuppressFromInput`<sup>Optional</sup> <a name="timeSuppressFromInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFromInput"></a>

```java
public java.lang.String getTimeSuppressFromInput();
```

- *Type:* java.lang.String

---

##### `timeSuppressUntilInput`<sup>Optional</sup> <a name="timeSuppressUntilInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntilInput"></a>

```java
public java.lang.String getTimeSuppressUntilInput();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `timeSuppressFrom`<sup>Required</sup> <a name="timeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFrom"></a>

```java
public java.lang.String getTimeSuppressFrom();
```

- *Type:* java.lang.String

---

##### `timeSuppressUntil`<sup>Required</sup> <a name="timeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntil"></a>

```java
public java.lang.String getTimeSuppressUntil();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringAlarmSuppressionAConfig <a name="MonitoringAlarmSuppressionAConfig" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm_suppression.MonitoringAlarmSuppressionAConfig;

MonitoringAlarmSuppressionAConfig.builder()
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
    .alarmSuppressionTarget(MonitoringAlarmSuppressionAlarmSuppressionTarget)
    .displayName(java.lang.String)
    .timeSuppressFrom(java.lang.String)
    .timeSuppressUntil(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .level(java.lang.String)
//  .suppressionConditions(IResolvable)
//  .suppressionConditions(java.util.List<MonitoringAlarmSuppressionSuppressionConditions>)
//  .timeouts(MonitoringAlarmSuppressionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.alarmSuppressionTarget">alarmSuppressionTarget</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | alarm_suppression_target block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#display_name MonitoringAlarmSuppressionA#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressFrom">timeSuppressFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_from MonitoringAlarmSuppressionA#time_suppress_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressUntil">timeSuppressUntil</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_until MonitoringAlarmSuppressionA#time_suppress_until}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#defined_tags MonitoringAlarmSuppressionA#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#description MonitoringAlarmSuppressionA#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#dimensions MonitoringAlarmSuppressionA#dimensions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#freeform_tags MonitoringAlarmSuppressionA#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#id MonitoringAlarmSuppressionA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#level MonitoringAlarmSuppressionA#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.suppressionConditions">suppressionConditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>></code> | suppression_conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alarmSuppressionTarget`<sup>Required</sup> <a name="alarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.alarmSuppressionTarget"></a>

```java
public MonitoringAlarmSuppressionAlarmSuppressionTarget getAlarmSuppressionTarget();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

alarm_suppression_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_suppression_target MonitoringAlarmSuppressionA#alarm_suppression_target}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#display_name MonitoringAlarmSuppressionA#display_name}.

---

##### `timeSuppressFrom`<sup>Required</sup> <a name="timeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressFrom"></a>

```java
public java.lang.String getTimeSuppressFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_from MonitoringAlarmSuppressionA#time_suppress_from}.

---

##### `timeSuppressUntil`<sup>Required</sup> <a name="timeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressUntil"></a>

```java
public java.lang.String getTimeSuppressUntil();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_until MonitoringAlarmSuppressionA#time_suppress_until}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#defined_tags MonitoringAlarmSuppressionA#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#description MonitoringAlarmSuppressionA#description}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#dimensions MonitoringAlarmSuppressionA#dimensions}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#freeform_tags MonitoringAlarmSuppressionA#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#id MonitoringAlarmSuppressionA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `level`<sup>Optional</sup> <a name="level" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#level MonitoringAlarmSuppressionA#level}.

---

##### `suppressionConditions`<sup>Optional</sup> <a name="suppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.suppressionConditions"></a>

```java
public java.lang.Object getSuppressionConditions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>>

suppression_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_conditions MonitoringAlarmSuppressionA#suppression_conditions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeouts"></a>

```java
public MonitoringAlarmSuppressionTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#timeouts MonitoringAlarmSuppressionA#timeouts}

---

### MonitoringAlarmSuppressionAlarmSuppressionTarget <a name="MonitoringAlarmSuppressionAlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm_suppression.MonitoringAlarmSuppressionAlarmSuppressionTarget;

MonitoringAlarmSuppressionAlarmSuppressionTarget.builder()
    .targetType(java.lang.String)
//  .alarmId(java.lang.String)
//  .compartmentId(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.targetType">targetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#target_type MonitoringAlarmSuppressionA#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.alarmId">alarmId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_id MonitoringAlarmSuppressionA#alarm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id MonitoringAlarmSuppressionA#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id_in_subtree MonitoringAlarmSuppressionA#compartment_id_in_subtree}. |

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#target_type MonitoringAlarmSuppressionA#target_type}.

---

##### `alarmId`<sup>Optional</sup> <a name="alarmId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.alarmId"></a>

```java
public java.lang.String getAlarmId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_id MonitoringAlarmSuppressionA#alarm_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id MonitoringAlarmSuppressionA#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id_in_subtree MonitoringAlarmSuppressionA#compartment_id_in_subtree}.

---

### MonitoringAlarmSuppressionSuppressionConditions <a name="MonitoringAlarmSuppressionSuppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm_suppression.MonitoringAlarmSuppressionSuppressionConditions;

MonitoringAlarmSuppressionSuppressionConditions.builder()
    .conditionType(java.lang.String)
    .suppressionDuration(java.lang.String)
    .suppressionRecurrence(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.conditionType">conditionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#condition_type MonitoringAlarmSuppressionA#condition_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionDuration">suppressionDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_duration MonitoringAlarmSuppressionA#suppression_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionRecurrence">suppressionRecurrence</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_recurrence MonitoringAlarmSuppressionA#suppression_recurrence}. |

---

##### `conditionType`<sup>Required</sup> <a name="conditionType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.conditionType"></a>

```java
public java.lang.String getConditionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#condition_type MonitoringAlarmSuppressionA#condition_type}.

---

##### `suppressionDuration`<sup>Required</sup> <a name="suppressionDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionDuration"></a>

```java
public java.lang.String getSuppressionDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_duration MonitoringAlarmSuppressionA#suppression_duration}.

---

##### `suppressionRecurrence`<sup>Required</sup> <a name="suppressionRecurrence" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionRecurrence"></a>

```java
public java.lang.String getSuppressionRecurrence();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_recurrence MonitoringAlarmSuppressionA#suppression_recurrence}.

---

### MonitoringAlarmSuppressionTimeouts <a name="MonitoringAlarmSuppressionTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm_suppression.MonitoringAlarmSuppressionTimeouts;

MonitoringAlarmSuppressionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#create MonitoringAlarmSuppressionA#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#delete MonitoringAlarmSuppressionA#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#update MonitoringAlarmSuppressionA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#create MonitoringAlarmSuppressionA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#delete MonitoringAlarmSuppressionA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#update MonitoringAlarmSuppressionA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference <a name="MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm_suppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference;

new MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetAlarmId">resetAlarmId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarmId` <a name="resetAlarmId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetAlarmId"></a>

```java
public void resetAlarmId()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentIdInSubtree"></a>

```java
public void resetCompartmentIdInSubtree()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmIdInput">alarmIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetTypeInput">targetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmId">alarmId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmIdInput`<sup>Optional</sup> <a name="alarmIdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmIdInput"></a>

```java
public java.lang.String getAlarmIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetTypeInput"></a>

```java
public java.lang.String getTargetTypeInput();
```

- *Type:* java.lang.String

---

##### `alarmId`<sup>Required</sup> <a name="alarmId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmId"></a>

```java
public java.lang.String getAlarmId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.internalValue"></a>

```java
public MonitoringAlarmSuppressionAlarmSuppressionTarget getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

---


### MonitoringAlarmSuppressionSuppressionConditionsList <a name="MonitoringAlarmSuppressionSuppressionConditionsList" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm_suppression.MonitoringAlarmSuppressionSuppressionConditionsList;

new MonitoringAlarmSuppressionSuppressionConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.get"></a>

```java
public MonitoringAlarmSuppressionSuppressionConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>>

---


### MonitoringAlarmSuppressionSuppressionConditionsOutputReference <a name="MonitoringAlarmSuppressionSuppressionConditionsOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm_suppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference;

new MonitoringAlarmSuppressionSuppressionConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionTypeInput">conditionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDurationInput">suppressionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrenceInput">suppressionRecurrenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionType">conditionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDuration">suppressionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrence">suppressionRecurrence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionTypeInput`<sup>Optional</sup> <a name="conditionTypeInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionTypeInput"></a>

```java
public java.lang.String getConditionTypeInput();
```

- *Type:* java.lang.String

---

##### `suppressionDurationInput`<sup>Optional</sup> <a name="suppressionDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDurationInput"></a>

```java
public java.lang.String getSuppressionDurationInput();
```

- *Type:* java.lang.String

---

##### `suppressionRecurrenceInput`<sup>Optional</sup> <a name="suppressionRecurrenceInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrenceInput"></a>

```java
public java.lang.String getSuppressionRecurrenceInput();
```

- *Type:* java.lang.String

---

##### `conditionType`<sup>Required</sup> <a name="conditionType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionType"></a>

```java
public java.lang.String getConditionType();
```

- *Type:* java.lang.String

---

##### `suppressionDuration`<sup>Required</sup> <a name="suppressionDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDuration"></a>

```java
public java.lang.String getSuppressionDuration();
```

- *Type:* java.lang.String

---

##### `suppressionRecurrence`<sup>Required</sup> <a name="suppressionRecurrence" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrence"></a>

```java
public java.lang.String getSuppressionRecurrence();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions">MonitoringAlarmSuppressionSuppressionConditions</a>

---


### MonitoringAlarmSuppressionTimeoutsOutputReference <a name="MonitoringAlarmSuppressionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.monitoring_alarm_suppression.MonitoringAlarmSuppressionTimeoutsOutputReference;

new MonitoringAlarmSuppressionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>

---



