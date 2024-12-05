# `monitoringAlarm` Submodule <a name="`monitoringAlarm` Submodule" id="rhizo-co-terraform-provider-oci.monitoringAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringAlarm <a name="MonitoringAlarm" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm oci_monitoring_alarm}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarm(Construct Scope, string Id, MonitoringAlarmConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig">MonitoringAlarmConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig">MonitoringAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression">PutSuppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetAlarmSummary">ResetAlarmSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetEvaluationSlackDuration">ResetEvaluationSlackDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetIsNotificationsPerMetricDimensionEnabled">ResetIsNotificationsPerMetricDimensionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMessageFormat">ResetMessageFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMetricCompartmentIdInSubtree">ResetMetricCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationTitle">ResetNotificationTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationVersion">ResetNotificationVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrides">ResetOverrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetPendingDuration">ResetPendingDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRepeatNotificationDuration">ResetRepeatNotificationDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResolution">ResetResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetSuppression">ResetSuppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOverrides` <a name="PutOverrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides"></a>

```csharp
private void PutOverrides(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putOverrides.parameter.value"></a>

- *Type:* object

---

##### `PutSuppression` <a name="PutSuppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression"></a>

```csharp
private void PutSuppression(MonitoringAlarmSuppression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putSuppression.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitoringAlarmTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>

---

##### `ResetAlarmSummary` <a name="ResetAlarmSummary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetAlarmSummary"></a>

```csharp
private void ResetAlarmSummary()
```

##### `ResetBody` <a name="ResetBody" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetEvaluationSlackDuration` <a name="ResetEvaluationSlackDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetEvaluationSlackDuration"></a>

```csharp
private void ResetEvaluationSlackDuration()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsNotificationsPerMetricDimensionEnabled` <a name="ResetIsNotificationsPerMetricDimensionEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetIsNotificationsPerMetricDimensionEnabled"></a>

```csharp
private void ResetIsNotificationsPerMetricDimensionEnabled()
```

##### `ResetMessageFormat` <a name="ResetMessageFormat" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMessageFormat"></a>

```csharp
private void ResetMessageFormat()
```

##### `ResetMetricCompartmentIdInSubtree` <a name="ResetMetricCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetMetricCompartmentIdInSubtree"></a>

```csharp
private void ResetMetricCompartmentIdInSubtree()
```

##### `ResetNotificationTitle` <a name="ResetNotificationTitle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationTitle"></a>

```csharp
private void ResetNotificationTitle()
```

##### `ResetNotificationVersion` <a name="ResetNotificationVersion" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetNotificationVersion"></a>

```csharp
private void ResetNotificationVersion()
```

##### `ResetOverrides` <a name="ResetOverrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetOverrides"></a>

```csharp
private void ResetOverrides()
```

##### `ResetPendingDuration` <a name="ResetPendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetPendingDuration"></a>

```csharp
private void ResetPendingDuration()
```

##### `ResetRepeatNotificationDuration` <a name="ResetRepeatNotificationDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRepeatNotificationDuration"></a>

```csharp
private void ResetRepeatNotificationDuration()
```

##### `ResetResolution` <a name="ResetResolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResolution"></a>

```csharp
private void ResetResolution()
```

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetResourceGroup"></a>

```csharp
private void ResetResourceGroup()
```

##### `ResetRuleName` <a name="ResetRuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetRuleName"></a>

```csharp
private void ResetRuleName()
```

##### `ResetSuppression` <a name="ResetSuppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetSuppression"></a>

```csharp
private void ResetSuppression()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringAlarm resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MonitoringAlarm.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MonitoringAlarm.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MonitoringAlarm.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MonitoringAlarm.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MonitoringAlarm resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitoringAlarm to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitoringAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overrides">Overrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList">MonitoringAlarmOverridesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppression">Suppression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference">MonitoringAlarmSuppressionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference">MonitoringAlarmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummaryInput">AlarmSummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinationsInput">DestinationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDurationInput">EvaluationSlackDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabledInput">IsNotificationsPerMetricDimensionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormatInput">MessageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInput">MetricCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtreeInput">MetricCompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitleInput">NotificationTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersionInput">NotificationVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overridesInput">OverridesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDurationInput">PendingDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDurationInput">RepeatNotificationDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolutionInput">ResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppressionInput">SuppressionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummary">AlarmSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinations">Destinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDuration">EvaluationSlackDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabled">IsNotificationsPerMetricDimensionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormat">MessageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentId">MetricCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtree">MetricCompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitle">NotificationTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersion">NotificationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDuration">PendingDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDuration">RepeatNotificationDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolution">Resolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severity">Severity</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overrides"></a>

```csharp
public MonitoringAlarmOverridesList Overrides { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList">MonitoringAlarmOverridesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Suppression`<sup>Required</sup> <a name="Suppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppression"></a>

```csharp
public MonitoringAlarmSuppressionOutputReference Suppression { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference">MonitoringAlarmSuppressionOutputReference</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeouts"></a>

```csharp
public MonitoringAlarmTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference">MonitoringAlarmTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AlarmSummaryInput`<sup>Optional</sup> <a name="AlarmSummaryInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummaryInput"></a>

```csharp
public string AlarmSummaryInput { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinationsInput"></a>

```csharp
public string[] DestinationsInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EvaluationSlackDurationInput`<sup>Optional</sup> <a name="EvaluationSlackDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDurationInput"></a>

```csharp
public string EvaluationSlackDurationInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `IsNotificationsPerMetricDimensionEnabledInput`<sup>Optional</sup> <a name="IsNotificationsPerMetricDimensionEnabledInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabledInput"></a>

```csharp
public object IsNotificationsPerMetricDimensionEnabledInput { get; }
```

- *Type:* object

---

##### `MessageFormatInput`<sup>Optional</sup> <a name="MessageFormatInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormatInput"></a>

```csharp
public string MessageFormatInput { get; }
```

- *Type:* string

---

##### `MetricCompartmentIdInput`<sup>Optional</sup> <a name="MetricCompartmentIdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInput"></a>

```csharp
public string MetricCompartmentIdInput { get; }
```

- *Type:* string

---

##### `MetricCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="MetricCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtreeInput"></a>

```csharp
public object MetricCompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NotificationTitleInput`<sup>Optional</sup> <a name="NotificationTitleInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitleInput"></a>

```csharp
public string NotificationTitleInput { get; }
```

- *Type:* string

---

##### `NotificationVersionInput`<sup>Optional</sup> <a name="NotificationVersionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersionInput"></a>

```csharp
public string NotificationVersionInput { get; }
```

- *Type:* string

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.overridesInput"></a>

```csharp
public object OverridesInput { get; }
```

- *Type:* object

---

##### `PendingDurationInput`<sup>Optional</sup> <a name="PendingDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDurationInput"></a>

```csharp
public string PendingDurationInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `RepeatNotificationDurationInput`<sup>Optional</sup> <a name="RepeatNotificationDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDurationInput"></a>

```csharp
public string RepeatNotificationDurationInput { get; }
```

- *Type:* string

---

##### `ResolutionInput`<sup>Optional</sup> <a name="ResolutionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolutionInput"></a>

```csharp
public string ResolutionInput { get; }
```

- *Type:* string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroupInput"></a>

```csharp
public string ResourceGroupInput { get; }
```

- *Type:* string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `SuppressionInput`<sup>Optional</sup> <a name="SuppressionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.suppressionInput"></a>

```csharp
public MonitoringAlarmSuppression SuppressionInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AlarmSummary`<sup>Required</sup> <a name="AlarmSummary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.alarmSummary"></a>

```csharp
public string AlarmSummary { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.destinations"></a>

```csharp
public string[] Destinations { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EvaluationSlackDuration`<sup>Required</sup> <a name="EvaluationSlackDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.evaluationSlackDuration"></a>

```csharp
public string EvaluationSlackDuration { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `IsNotificationsPerMetricDimensionEnabled`<sup>Required</sup> <a name="IsNotificationsPerMetricDimensionEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.isNotificationsPerMetricDimensionEnabled"></a>

```csharp
public object IsNotificationsPerMetricDimensionEnabled { get; }
```

- *Type:* object

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.messageFormat"></a>

```csharp
public string MessageFormat { get; }
```

- *Type:* string

---

##### `MetricCompartmentId`<sup>Required</sup> <a name="MetricCompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentId"></a>

```csharp
public string MetricCompartmentId { get; }
```

- *Type:* string

---

##### `MetricCompartmentIdInSubtree`<sup>Required</sup> <a name="MetricCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.metricCompartmentIdInSubtree"></a>

```csharp
public object MetricCompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NotificationTitle`<sup>Required</sup> <a name="NotificationTitle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationTitle"></a>

```csharp
public string NotificationTitle { get; }
```

- *Type:* string

---

##### `NotificationVersion`<sup>Required</sup> <a name="NotificationVersion" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.notificationVersion"></a>

```csharp
public string NotificationVersion { get; }
```

- *Type:* string

---

##### `PendingDuration`<sup>Required</sup> <a name="PendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.pendingDuration"></a>

```csharp
public string PendingDuration { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RepeatNotificationDuration`<sup>Required</sup> <a name="RepeatNotificationDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.repeatNotificationDuration"></a>

```csharp
public string RepeatNotificationDuration { get; }
```

- *Type:* string

---

##### `Resolution`<sup>Required</sup> <a name="Resolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resolution"></a>

```csharp
public string Resolution { get; }
```

- *Type:* string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarm.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringAlarmConfig <a name="MonitoringAlarmConfig" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string[] Destinations,
    string DisplayName,
    object IsEnabled,
    string MetricCompartmentId,
    string Namespace,
    string Query,
    string Severity,
    string AlarmSummary = null,
    string Body = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string EvaluationSlackDuration = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsNotificationsPerMetricDimensionEnabled = null,
    string MessageFormat = null,
    object MetricCompartmentIdInSubtree = null,
    string NotificationTitle = null,
    string NotificationVersion = null,
    object Overrides = null,
    string PendingDuration = null,
    string RepeatNotificationDuration = null,
    string Resolution = null,
    string ResourceGroup = null,
    string RuleName = null,
    MonitoringAlarmSuppression Suppression = null,
    MonitoringAlarmTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.destinations">Destinations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentId">MetricCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.severity">Severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.alarmSummary">AlarmSummary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.body">Body</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.evaluationSlackDuration">EvaluationSlackDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isNotificationsPerMetricDimensionEnabled">IsNotificationsPerMetricDimensionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.messageFormat">MessageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentIdInSubtree">MetricCompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationTitle">NotificationTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationVersion">NotificationVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.overrides">Overrides</a></code> | <code>object</code> | overrides block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.pendingDuration">PendingDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.repeatNotificationDuration">RepeatNotificationDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resolution">Resolution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.ruleName">RuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.suppression">Suppression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | suppression block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#compartment_id MonitoringAlarm#compartment_id}.

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.destinations"></a>

```csharp
public string[] Destinations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#destinations MonitoringAlarm#destinations}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#display_name MonitoringAlarm#display_name}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_enabled MonitoringAlarm#is_enabled}.

---

##### `MetricCompartmentId`<sup>Required</sup> <a name="MetricCompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentId"></a>

```csharp
public string MetricCompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id MonitoringAlarm#metric_compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#namespace MonitoringAlarm#namespace}.

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}.

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}.

---

##### `AlarmSummary`<sup>Optional</sup> <a name="AlarmSummary" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.alarmSummary"></a>

```csharp
public string AlarmSummary { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#alarm_summary MonitoringAlarm#alarm_summary}.

---

##### `Body`<sup>Optional</sup> <a name="Body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#defined_tags MonitoringAlarm#defined_tags}.

---

##### `EvaluationSlackDuration`<sup>Optional</sup> <a name="EvaluationSlackDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.evaluationSlackDuration"></a>

```csharp
public string EvaluationSlackDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#evaluation_slack_duration MonitoringAlarm#evaluation_slack_duration}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#freeform_tags MonitoringAlarm#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#id MonitoringAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsNotificationsPerMetricDimensionEnabled`<sup>Optional</sup> <a name="IsNotificationsPerMetricDimensionEnabled" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.isNotificationsPerMetricDimensionEnabled"></a>

```csharp
public object IsNotificationsPerMetricDimensionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#is_notifications_per_metric_dimension_enabled MonitoringAlarm#is_notifications_per_metric_dimension_enabled}.

---

##### `MessageFormat`<sup>Optional</sup> <a name="MessageFormat" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.messageFormat"></a>

```csharp
public string MessageFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#message_format MonitoringAlarm#message_format}.

---

##### `MetricCompartmentIdInSubtree`<sup>Optional</sup> <a name="MetricCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.metricCompartmentIdInSubtree"></a>

```csharp
public object MetricCompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#metric_compartment_id_in_subtree MonitoringAlarm#metric_compartment_id_in_subtree}.

---

##### `NotificationTitle`<sup>Optional</sup> <a name="NotificationTitle" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationTitle"></a>

```csharp
public string NotificationTitle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_title MonitoringAlarm#notification_title}.

---

##### `NotificationVersion`<sup>Optional</sup> <a name="NotificationVersion" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.notificationVersion"></a>

```csharp
public string NotificationVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#notification_version MonitoringAlarm#notification_version}.

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.overrides"></a>

```csharp
public object Overrides { get; set; }
```

- *Type:* object

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#overrides MonitoringAlarm#overrides}

---

##### `PendingDuration`<sup>Optional</sup> <a name="PendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.pendingDuration"></a>

```csharp
public string PendingDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}.

---

##### `RepeatNotificationDuration`<sup>Optional</sup> <a name="RepeatNotificationDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.repeatNotificationDuration"></a>

```csharp
public string RepeatNotificationDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#repeat_notification_duration MonitoringAlarm#repeat_notification_duration}.

---

##### `Resolution`<sup>Optional</sup> <a name="Resolution" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resolution"></a>

```csharp
public string Resolution { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resolution MonitoringAlarm#resolution}.

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#resource_group MonitoringAlarm#resource_group}.

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}.

---

##### `Suppression`<sup>Optional</sup> <a name="Suppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.suppression"></a>

```csharp
public MonitoringAlarmSuppression Suppression { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

suppression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#suppression MonitoringAlarm#suppression}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmConfig.property.timeouts"></a>

```csharp
public MonitoringAlarmTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts">MonitoringAlarmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#timeouts MonitoringAlarm#timeouts}

---

### MonitoringAlarmOverrides <a name="MonitoringAlarmOverrides" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmOverrides {
    string Body = null,
    string PendingDuration = null,
    string Query = null,
    string RuleName = null,
    string Severity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.body">Body</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.pendingDuration">PendingDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.ruleName">RuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.severity">Severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}. |

---

##### `Body`<sup>Optional</sup> <a name="Body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#body MonitoringAlarm#body}.

---

##### `PendingDuration`<sup>Optional</sup> <a name="PendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.pendingDuration"></a>

```csharp
public string PendingDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#pending_duration MonitoringAlarm#pending_duration}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#query MonitoringAlarm#query}.

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#rule_name MonitoringAlarm#rule_name}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverrides.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#severity MonitoringAlarm#severity}.

---

### MonitoringAlarmSuppression <a name="MonitoringAlarmSuppression" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmSuppression {
    string TimeSuppressFrom,
    string TimeSuppressUntil,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressFrom">TimeSuppressFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_from MonitoringAlarm#time_suppress_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressUntil">TimeSuppressUntil</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_until MonitoringAlarm#time_suppress_until}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#description MonitoringAlarm#description}. |

---

##### `TimeSuppressFrom`<sup>Required</sup> <a name="TimeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressFrom"></a>

```csharp
public string TimeSuppressFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_from MonitoringAlarm#time_suppress_from}.

---

##### `TimeSuppressUntil`<sup>Required</sup> <a name="TimeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.timeSuppressUntil"></a>

```csharp
public string TimeSuppressUntil { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#time_suppress_until MonitoringAlarm#time_suppress_until}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#description MonitoringAlarm#description}.

---

### MonitoringAlarmTimeouts <a name="MonitoringAlarmTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#create MonitoringAlarm#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#delete MonitoringAlarm#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#update MonitoringAlarm#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#create MonitoringAlarm#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#delete MonitoringAlarm#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm#update MonitoringAlarm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringAlarmOverridesList <a name="MonitoringAlarmOverridesList" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get"></a>

```csharp
private MonitoringAlarmOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlarmOverridesOutputReference <a name="MonitoringAlarmOverridesOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetPendingDuration">ResetPendingDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetSeverity">ResetSeverity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBody` <a name="ResetBody" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetPendingDuration` <a name="ResetPendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetPendingDuration"></a>

```csharp
private void ResetPendingDuration()
```

##### `ResetQuery` <a name="ResetQuery" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```

##### `ResetRuleName` <a name="ResetRuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetRuleName"></a>

```csharp
private void ResetRuleName()
```

##### `ResetSeverity` <a name="ResetSeverity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.resetSeverity"></a>

```csharp
private void ResetSeverity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDurationInput">PendingDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDuration">PendingDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `PendingDurationInput`<sup>Optional</sup> <a name="PendingDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDurationInput"></a>

```csharp
public string PendingDurationInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `PendingDuration`<sup>Required</sup> <a name="PendingDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.pendingDuration"></a>

```csharp
public string PendingDuration { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmOverridesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlarmSuppressionOutputReference <a name="MonitoringAlarmSuppressionOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmSuppressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFromInput">TimeSuppressFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntilInput">TimeSuppressUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFrom">TimeSuppressFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntil">TimeSuppressUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `TimeSuppressFromInput`<sup>Optional</sup> <a name="TimeSuppressFromInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFromInput"></a>

```csharp
public string TimeSuppressFromInput { get; }
```

- *Type:* string

---

##### `TimeSuppressUntilInput`<sup>Optional</sup> <a name="TimeSuppressUntilInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntilInput"></a>

```csharp
public string TimeSuppressUntilInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `TimeSuppressFrom`<sup>Required</sup> <a name="TimeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressFrom"></a>

```csharp
public string TimeSuppressFrom { get; }
```

- *Type:* string

---

##### `TimeSuppressUntil`<sup>Required</sup> <a name="TimeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.timeSuppressUntil"></a>

```csharp
public string TimeSuppressUntil { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppressionOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlarmSuppression InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmSuppression">MonitoringAlarmSuppression</a>

---


### MonitoringAlarmTimeoutsOutputReference <a name="MonitoringAlarmTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarm.MonitoringAlarmTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



