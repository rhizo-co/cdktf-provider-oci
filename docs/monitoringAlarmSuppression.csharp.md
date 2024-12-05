# `monitoringAlarmSuppression` Submodule <a name="`monitoringAlarmSuppression` Submodule" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringAlarmSuppressionA <a name="MonitoringAlarmSuppressionA" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression oci_monitoring_alarm_suppression}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmSuppressionA(Construct Scope, string Id, MonitoringAlarmSuppressionAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig">MonitoringAlarmSuppressionAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig">MonitoringAlarmSuppressionAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget">PutAlarmSuppressionTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putSuppressionConditions">PutSuppressionConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetSuppressionConditions">ResetSuppressionConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlarmSuppressionTarget` <a name="PutAlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget"></a>

```csharp
private void PutAlarmSuppressionTarget(MonitoringAlarmSuppressionAlarmSuppressionTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putAlarmSuppressionTarget.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

---

##### `PutSuppressionConditions` <a name="PutSuppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putSuppressionConditions"></a>

```csharp
private void PutSuppressionConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putSuppressionConditions.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitoringAlarmSuppressionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDimensions` <a name="ResetDimensions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLevel` <a name="ResetLevel" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetLevel"></a>

```csharp
private void ResetLevel()
```

##### `ResetSuppressionConditions` <a name="ResetSuppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetSuppressionConditions"></a>

```csharp
private void ResetSuppressionConditions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringAlarmSuppressionA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MonitoringAlarmSuppressionA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MonitoringAlarmSuppressionA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MonitoringAlarmSuppressionA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MonitoringAlarmSuppressionA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MonitoringAlarmSuppressionA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitoringAlarmSuppressionA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitoringAlarmSuppressionA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringAlarmSuppressionA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTarget">AlarmSuppressionTarget</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference">MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditions">SuppressionConditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList">MonitoringAlarmSuppressionSuppressionConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference">MonitoringAlarmSuppressionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTargetInput">AlarmSuppressionTargetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensionsInput">DimensionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditionsInput">SuppressionConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFromInput">TimeSuppressFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntilInput">TimeSuppressUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFrom">TimeSuppressFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntil">TimeSuppressUntil</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AlarmSuppressionTarget`<sup>Required</sup> <a name="AlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTarget"></a>

```csharp
public MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference AlarmSuppressionTarget { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference">MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SuppressionConditions`<sup>Required</sup> <a name="SuppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditions"></a>

```csharp
public MonitoringAlarmSuppressionSuppressionConditionsList SuppressionConditions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList">MonitoringAlarmSuppressionSuppressionConditionsList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeouts"></a>

```csharp
public MonitoringAlarmSuppressionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference">MonitoringAlarmSuppressionTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AlarmSuppressionTargetInput`<sup>Optional</sup> <a name="AlarmSuppressionTargetInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.alarmSuppressionTargetInput"></a>

```csharp
public MonitoringAlarmSuppressionAlarmSuppressionTarget AlarmSuppressionTargetInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DimensionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `SuppressionConditionsInput`<sup>Optional</sup> <a name="SuppressionConditionsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.suppressionConditionsInput"></a>

```csharp
public object SuppressionConditionsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeSuppressFromInput`<sup>Optional</sup> <a name="TimeSuppressFromInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFromInput"></a>

```csharp
public string TimeSuppressFromInput { get; }
```

- *Type:* string

---

##### `TimeSuppressUntilInput`<sup>Optional</sup> <a name="TimeSuppressUntilInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntilInput"></a>

```csharp
public string TimeSuppressUntilInput { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `TimeSuppressFrom`<sup>Required</sup> <a name="TimeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressFrom"></a>

```csharp
public string TimeSuppressFrom { get; }
```

- *Type:* string

---

##### `TimeSuppressUntil`<sup>Required</sup> <a name="TimeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.timeSuppressUntil"></a>

```csharp
public string TimeSuppressUntil { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringAlarmSuppressionAConfig <a name="MonitoringAlarmSuppressionAConfig" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmSuppressionAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    MonitoringAlarmSuppressionAlarmSuppressionTarget AlarmSuppressionTarget,
    string DisplayName,
    string TimeSuppressFrom,
    string TimeSuppressUntil,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> Dimensions = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string Level = null,
    object SuppressionConditions = null,
    MonitoringAlarmSuppressionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.alarmSuppressionTarget">AlarmSuppressionTarget</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | alarm_suppression_target block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#display_name MonitoringAlarmSuppressionA#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressFrom">TimeSuppressFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_from MonitoringAlarmSuppressionA#time_suppress_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressUntil">TimeSuppressUntil</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_until MonitoringAlarmSuppressionA#time_suppress_until}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#defined_tags MonitoringAlarmSuppressionA#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#description MonitoringAlarmSuppressionA#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#dimensions MonitoringAlarmSuppressionA#dimensions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#freeform_tags MonitoringAlarmSuppressionA#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#id MonitoringAlarmSuppressionA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.level">Level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#level MonitoringAlarmSuppressionA#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.suppressionConditions">SuppressionConditions</a></code> | <code>object</code> | suppression_conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AlarmSuppressionTarget`<sup>Required</sup> <a name="AlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.alarmSuppressionTarget"></a>

```csharp
public MonitoringAlarmSuppressionAlarmSuppressionTarget AlarmSuppressionTarget { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

alarm_suppression_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_suppression_target MonitoringAlarmSuppressionA#alarm_suppression_target}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#display_name MonitoringAlarmSuppressionA#display_name}.

---

##### `TimeSuppressFrom`<sup>Required</sup> <a name="TimeSuppressFrom" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressFrom"></a>

```csharp
public string TimeSuppressFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_from MonitoringAlarmSuppressionA#time_suppress_from}.

---

##### `TimeSuppressUntil`<sup>Required</sup> <a name="TimeSuppressUntil" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeSuppressUntil"></a>

```csharp
public string TimeSuppressUntil { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#time_suppress_until MonitoringAlarmSuppressionA#time_suppress_until}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#defined_tags MonitoringAlarmSuppressionA#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#description MonitoringAlarmSuppressionA#description}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#dimensions MonitoringAlarmSuppressionA#dimensions}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#freeform_tags MonitoringAlarmSuppressionA#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#id MonitoringAlarmSuppressionA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#level MonitoringAlarmSuppressionA#level}.

---

##### `SuppressionConditions`<sup>Optional</sup> <a name="SuppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.suppressionConditions"></a>

```csharp
public object SuppressionConditions { get; set; }
```

- *Type:* object

suppression_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_conditions MonitoringAlarmSuppressionA#suppression_conditions}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAConfig.property.timeouts"></a>

```csharp
public MonitoringAlarmSuppressionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts">MonitoringAlarmSuppressionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#timeouts MonitoringAlarmSuppressionA#timeouts}

---

### MonitoringAlarmSuppressionAlarmSuppressionTarget <a name="MonitoringAlarmSuppressionAlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmSuppressionAlarmSuppressionTarget {
    string TargetType,
    string AlarmId = null,
    string CompartmentId = null,
    object CompartmentIdInSubtree = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.targetType">TargetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#target_type MonitoringAlarmSuppressionA#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.alarmId">AlarmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_id MonitoringAlarmSuppressionA#alarm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id MonitoringAlarmSuppressionA#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id_in_subtree MonitoringAlarmSuppressionA#compartment_id_in_subtree}. |

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.targetType"></a>

```csharp
public string TargetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#target_type MonitoringAlarmSuppressionA#target_type}.

---

##### `AlarmId`<sup>Optional</sup> <a name="AlarmId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.alarmId"></a>

```csharp
public string AlarmId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#alarm_id MonitoringAlarmSuppressionA#alarm_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id MonitoringAlarmSuppressionA#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#compartment_id_in_subtree MonitoringAlarmSuppressionA#compartment_id_in_subtree}.

---

### MonitoringAlarmSuppressionSuppressionConditions <a name="MonitoringAlarmSuppressionSuppressionConditions" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmSuppressionSuppressionConditions {
    string ConditionType,
    string SuppressionDuration,
    string SuppressionRecurrence
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.conditionType">ConditionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#condition_type MonitoringAlarmSuppressionA#condition_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionDuration">SuppressionDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_duration MonitoringAlarmSuppressionA#suppression_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionRecurrence">SuppressionRecurrence</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_recurrence MonitoringAlarmSuppressionA#suppression_recurrence}. |

---

##### `ConditionType`<sup>Required</sup> <a name="ConditionType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.conditionType"></a>

```csharp
public string ConditionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#condition_type MonitoringAlarmSuppressionA#condition_type}.

---

##### `SuppressionDuration`<sup>Required</sup> <a name="SuppressionDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionDuration"></a>

```csharp
public string SuppressionDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_duration MonitoringAlarmSuppressionA#suppression_duration}.

---

##### `SuppressionRecurrence`<sup>Required</sup> <a name="SuppressionRecurrence" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditions.property.suppressionRecurrence"></a>

```csharp
public string SuppressionRecurrence { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#suppression_recurrence MonitoringAlarmSuppressionA#suppression_recurrence}.

---

### MonitoringAlarmSuppressionTimeouts <a name="MonitoringAlarmSuppressionTimeouts" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmSuppressionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#create MonitoringAlarmSuppressionA#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#delete MonitoringAlarmSuppressionA#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#update MonitoringAlarmSuppressionA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#create MonitoringAlarmSuppressionA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#delete MonitoringAlarmSuppressionA#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/monitoring_alarm_suppression#update MonitoringAlarmSuppressionA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference <a name="MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetAlarmId">ResetAlarmId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarmId` <a name="ResetAlarmId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetAlarmId"></a>

```csharp
private void ResetAlarmId()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmIdInput">AlarmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetTypeInput">TargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmId">AlarmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmIdInput`<sup>Optional</sup> <a name="AlarmIdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmIdInput"></a>

```csharp
public string AlarmIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetTypeInput"></a>

```csharp
public string TargetTypeInput { get; }
```

- *Type:* string

---

##### `AlarmId`<sup>Required</sup> <a name="AlarmId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmId"></a>

```csharp
public string AlarmId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlarmSuppressionAlarmSuppressionTarget InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionAlarmSuppressionTarget">MonitoringAlarmSuppressionAlarmSuppressionTarget</a>

---


### MonitoringAlarmSuppressionSuppressionConditionsList <a name="MonitoringAlarmSuppressionSuppressionConditionsList" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmSuppressionSuppressionConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.get"></a>

```csharp
private MonitoringAlarmSuppressionSuppressionConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlarmSuppressionSuppressionConditionsOutputReference <a name="MonitoringAlarmSuppressionSuppressionConditionsOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmSuppressionSuppressionConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionTypeInput">ConditionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDurationInput">SuppressionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrenceInput">SuppressionRecurrenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionType">ConditionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDuration">SuppressionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrence">SuppressionRecurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionTypeInput`<sup>Optional</sup> <a name="ConditionTypeInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionTypeInput"></a>

```csharp
public string ConditionTypeInput { get; }
```

- *Type:* string

---

##### `SuppressionDurationInput`<sup>Optional</sup> <a name="SuppressionDurationInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDurationInput"></a>

```csharp
public string SuppressionDurationInput { get; }
```

- *Type:* string

---

##### `SuppressionRecurrenceInput`<sup>Optional</sup> <a name="SuppressionRecurrenceInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrenceInput"></a>

```csharp
public string SuppressionRecurrenceInput { get; }
```

- *Type:* string

---

##### `ConditionType`<sup>Required</sup> <a name="ConditionType" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionType"></a>

```csharp
public string ConditionType { get; }
```

- *Type:* string

---

##### `SuppressionDuration`<sup>Required</sup> <a name="SuppressionDuration" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDuration"></a>

```csharp
public string SuppressionDuration { get; }
```

- *Type:* string

---

##### `SuppressionRecurrence`<sup>Required</sup> <a name="SuppressionRecurrence" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrence"></a>

```csharp
public string SuppressionRecurrence { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlarmSuppressionTimeoutsOutputReference <a name="MonitoringAlarmSuppressionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MonitoringAlarmSuppressionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.monitoringAlarmSuppression.MonitoringAlarmSuppressionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



