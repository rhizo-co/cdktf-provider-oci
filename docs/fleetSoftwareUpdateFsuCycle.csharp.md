# `fleetSoftwareUpdateFsuCycle` Submodule <a name="`fleetSoftwareUpdateFsuCycle` Submodule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetSoftwareUpdateFsuCycle <a name="FleetSoftwareUpdateFsuCycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle oci_fleet_software_update_fsu_cycle}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycle(Construct Scope, string Id, FleetSoftwareUpdateFsuCycleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig">FleetSoftwareUpdateFsuCycleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig">FleetSoftwareUpdateFsuCycleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putApplyActionSchedule">PutApplyActionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putBatchingStrategy">PutBatchingStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putDiagnosticsCollection">PutDiagnosticsCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putGoalVersionDetails">PutGoalVersionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putStageActionSchedule">PutStageActionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetApplyActionSchedule">ResetApplyActionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetBatchingStrategy">ResetBatchingStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetDiagnosticsCollection">ResetDiagnosticsCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetIsIgnoreMissingPatches">ResetIsIgnoreMissingPatches</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetIsIgnorePatches">ResetIsIgnorePatches</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetIsKeepPlacement">ResetIsKeepPlacement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetMaxDrainTimeoutInSeconds">ResetMaxDrainTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetStageActionSchedule">ResetStageActionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApplyActionSchedule` <a name="PutApplyActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putApplyActionSchedule"></a>

```csharp
private void PutApplyActionSchedule(FleetSoftwareUpdateFsuCycleApplyActionSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putApplyActionSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a>

---

##### `PutBatchingStrategy` <a name="PutBatchingStrategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putBatchingStrategy"></a>

```csharp
private void PutBatchingStrategy(FleetSoftwareUpdateFsuCycleBatchingStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putBatchingStrategy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a>

---

##### `PutDiagnosticsCollection` <a name="PutDiagnosticsCollection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putDiagnosticsCollection"></a>

```csharp
private void PutDiagnosticsCollection(FleetSoftwareUpdateFsuCycleDiagnosticsCollection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putDiagnosticsCollection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a>

---

##### `PutGoalVersionDetails` <a name="PutGoalVersionDetails" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putGoalVersionDetails"></a>

```csharp
private void PutGoalVersionDetails(FleetSoftwareUpdateFsuCycleGoalVersionDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putGoalVersionDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a>

---

##### `PutStageActionSchedule` <a name="PutStageActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putStageActionSchedule"></a>

```csharp
private void PutStageActionSchedule(FleetSoftwareUpdateFsuCycleStageActionSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putStageActionSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putTimeouts"></a>

```csharp
private void PutTimeouts(FleetSoftwareUpdateFsuCycleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts">FleetSoftwareUpdateFsuCycleTimeouts</a>

---

##### `ResetApplyActionSchedule` <a name="ResetApplyActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetApplyActionSchedule"></a>

```csharp
private void ResetApplyActionSchedule()
```

##### `ResetBatchingStrategy` <a name="ResetBatchingStrategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetBatchingStrategy"></a>

```csharp
private void ResetBatchingStrategy()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDiagnosticsCollection` <a name="ResetDiagnosticsCollection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetDiagnosticsCollection"></a>

```csharp
private void ResetDiagnosticsCollection()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsIgnoreMissingPatches` <a name="ResetIsIgnoreMissingPatches" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetIsIgnoreMissingPatches"></a>

```csharp
private void ResetIsIgnoreMissingPatches()
```

##### `ResetIsIgnorePatches` <a name="ResetIsIgnorePatches" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetIsIgnorePatches"></a>

```csharp
private void ResetIsIgnorePatches()
```

##### `ResetIsKeepPlacement` <a name="ResetIsKeepPlacement" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetIsKeepPlacement"></a>

```csharp
private void ResetIsKeepPlacement()
```

##### `ResetMaxDrainTimeoutInSeconds` <a name="ResetMaxDrainTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetMaxDrainTimeoutInSeconds"></a>

```csharp
private void ResetMaxDrainTimeoutInSeconds()
```

##### `ResetStageActionSchedule` <a name="ResetStageActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetStageActionSchedule"></a>

```csharp
private void ResetStageActionSchedule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FleetSoftwareUpdateFsuCycle resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetSoftwareUpdateFsuCycle.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetSoftwareUpdateFsuCycle.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetSoftwareUpdateFsuCycle.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetSoftwareUpdateFsuCycle.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FleetSoftwareUpdateFsuCycle resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FleetSoftwareUpdateFsuCycle to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FleetSoftwareUpdateFsuCycle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FleetSoftwareUpdateFsuCycle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.applyActionSchedule">ApplyActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference">FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.batchingStrategy">BatchingStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference">FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.collectionType">CollectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.diagnosticsCollection">DiagnosticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference">FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.executingFsuActionId">ExecutingFsuActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.goalVersionDetails">GoalVersionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference">FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.lastCompletedAction">LastCompletedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.nextActionToExecute">NextActionToExecute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList">FleetSoftwareUpdateFsuCycleNextActionToExecuteList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.stageActionSchedule">StageActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference">FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeFinished">TimeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference">FleetSoftwareUpdateFsuCycleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.applyActionScheduleInput">ApplyActionScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.batchingStrategyInput">BatchingStrategyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.diagnosticsCollectionInput">DiagnosticsCollectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.fsuCollectionIdInput">FsuCollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.goalVersionDetailsInput">GoalVersionDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnoreMissingPatchesInput">IsIgnoreMissingPatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnorePatchesInput">IsIgnorePatchesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isKeepPlacementInput">IsKeepPlacementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.maxDrainTimeoutInSecondsInput">MaxDrainTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.stageActionScheduleInput">StageActionScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.fsuCollectionId">FsuCollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnoreMissingPatches">IsIgnoreMissingPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnorePatches">IsIgnorePatches</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isKeepPlacement">IsKeepPlacement</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.maxDrainTimeoutInSeconds">MaxDrainTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplyActionSchedule`<sup>Required</sup> <a name="ApplyActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.applyActionSchedule"></a>

```csharp
public FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference ApplyActionSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference">FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference</a>

---

##### `BatchingStrategy`<sup>Required</sup> <a name="BatchingStrategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.batchingStrategy"></a>

```csharp
public FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference BatchingStrategy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference">FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference</a>

---

##### `CollectionType`<sup>Required</sup> <a name="CollectionType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.collectionType"></a>

```csharp
public string CollectionType { get; }
```

- *Type:* string

---

##### `DiagnosticsCollection`<sup>Required</sup> <a name="DiagnosticsCollection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.diagnosticsCollection"></a>

```csharp
public FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference DiagnosticsCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference">FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference</a>

---

##### `ExecutingFsuActionId`<sup>Required</sup> <a name="ExecutingFsuActionId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.executingFsuActionId"></a>

```csharp
public string ExecutingFsuActionId { get; }
```

- *Type:* string

---

##### `GoalVersionDetails`<sup>Required</sup> <a name="GoalVersionDetails" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.goalVersionDetails"></a>

```csharp
public FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference GoalVersionDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference">FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference</a>

---

##### `LastCompletedAction`<sup>Required</sup> <a name="LastCompletedAction" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.lastCompletedAction"></a>

```csharp
public string LastCompletedAction { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `NextActionToExecute`<sup>Required</sup> <a name="NextActionToExecute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.nextActionToExecute"></a>

```csharp
public FleetSoftwareUpdateFsuCycleNextActionToExecuteList NextActionToExecute { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList">FleetSoftwareUpdateFsuCycleNextActionToExecuteList</a>

---

##### `StageActionSchedule`<sup>Required</sup> <a name="StageActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.stageActionSchedule"></a>

```csharp
public FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference StageActionSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference">FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeFinished"></a>

```csharp
public string TimeFinished { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeouts"></a>

```csharp
public FleetSoftwareUpdateFsuCycleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference">FleetSoftwareUpdateFsuCycleTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ApplyActionScheduleInput`<sup>Optional</sup> <a name="ApplyActionScheduleInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.applyActionScheduleInput"></a>

```csharp
public FleetSoftwareUpdateFsuCycleApplyActionSchedule ApplyActionScheduleInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a>

---

##### `BatchingStrategyInput`<sup>Optional</sup> <a name="BatchingStrategyInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.batchingStrategyInput"></a>

```csharp
public FleetSoftwareUpdateFsuCycleBatchingStrategy BatchingStrategyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DiagnosticsCollectionInput`<sup>Optional</sup> <a name="DiagnosticsCollectionInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.diagnosticsCollectionInput"></a>

```csharp
public FleetSoftwareUpdateFsuCycleDiagnosticsCollection DiagnosticsCollectionInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FsuCollectionIdInput`<sup>Optional</sup> <a name="FsuCollectionIdInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.fsuCollectionIdInput"></a>

```csharp
public string FsuCollectionIdInput { get; }
```

- *Type:* string

---

##### `GoalVersionDetailsInput`<sup>Optional</sup> <a name="GoalVersionDetailsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.goalVersionDetailsInput"></a>

```csharp
public FleetSoftwareUpdateFsuCycleGoalVersionDetails GoalVersionDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsIgnoreMissingPatchesInput`<sup>Optional</sup> <a name="IsIgnoreMissingPatchesInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnoreMissingPatchesInput"></a>

```csharp
public string[] IsIgnoreMissingPatchesInput { get; }
```

- *Type:* string[]

---

##### `IsIgnorePatchesInput`<sup>Optional</sup> <a name="IsIgnorePatchesInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnorePatchesInput"></a>

```csharp
public object IsIgnorePatchesInput { get; }
```

- *Type:* object

---

##### `IsKeepPlacementInput`<sup>Optional</sup> <a name="IsKeepPlacementInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isKeepPlacementInput"></a>

```csharp
public object IsKeepPlacementInput { get; }
```

- *Type:* object

---

##### `MaxDrainTimeoutInSecondsInput`<sup>Optional</sup> <a name="MaxDrainTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.maxDrainTimeoutInSecondsInput"></a>

```csharp
public double MaxDrainTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `StageActionScheduleInput`<sup>Optional</sup> <a name="StageActionScheduleInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.stageActionScheduleInput"></a>

```csharp
public FleetSoftwareUpdateFsuCycleStageActionSchedule StageActionScheduleInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FsuCollectionId`<sup>Required</sup> <a name="FsuCollectionId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.fsuCollectionId"></a>

```csharp
public string FsuCollectionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsIgnoreMissingPatches`<sup>Required</sup> <a name="IsIgnoreMissingPatches" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnoreMissingPatches"></a>

```csharp
public string[] IsIgnoreMissingPatches { get; }
```

- *Type:* string[]

---

##### `IsIgnorePatches`<sup>Required</sup> <a name="IsIgnorePatches" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnorePatches"></a>

```csharp
public object IsIgnorePatches { get; }
```

- *Type:* object

---

##### `IsKeepPlacement`<sup>Required</sup> <a name="IsKeepPlacement" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isKeepPlacement"></a>

```csharp
public object IsKeepPlacement { get; }
```

- *Type:* object

---

##### `MaxDrainTimeoutInSeconds`<sup>Required</sup> <a name="MaxDrainTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.maxDrainTimeoutInSeconds"></a>

```csharp
public double MaxDrainTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FleetSoftwareUpdateFsuCycleApplyActionSchedule <a name="FleetSoftwareUpdateFsuCycleApplyActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleApplyActionSchedule {
    string TimeToStart,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule.property.timeToStart">TimeToStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#time_to_start FleetSoftwareUpdateFsuCycle#time_to_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}. |

---

##### `TimeToStart`<sup>Required</sup> <a name="TimeToStart" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule.property.timeToStart"></a>

```csharp
public string TimeToStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#time_to_start FleetSoftwareUpdateFsuCycle#time_to_start}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}.

---

### FleetSoftwareUpdateFsuCycleBatchingStrategy <a name="FleetSoftwareUpdateFsuCycleBatchingStrategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleBatchingStrategy {
    object IsForceRolling = null,
    object IsWaitForBatchResume = null,
    double Percentage = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.isForceRolling">IsForceRolling</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_force_rolling FleetSoftwareUpdateFsuCycle#is_force_rolling}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.isWaitForBatchResume">IsWaitForBatchResume</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_wait_for_batch_resume FleetSoftwareUpdateFsuCycle#is_wait_for_batch_resume}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.percentage">Percentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#percentage FleetSoftwareUpdateFsuCycle#percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}. |

---

##### `IsForceRolling`<sup>Optional</sup> <a name="IsForceRolling" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.isForceRolling"></a>

```csharp
public object IsForceRolling { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_force_rolling FleetSoftwareUpdateFsuCycle#is_force_rolling}.

---

##### `IsWaitForBatchResume`<sup>Optional</sup> <a name="IsWaitForBatchResume" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.isWaitForBatchResume"></a>

```csharp
public object IsWaitForBatchResume { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_wait_for_batch_resume FleetSoftwareUpdateFsuCycle#is_wait_for_batch_resume}.

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.percentage"></a>

```csharp
public double Percentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#percentage FleetSoftwareUpdateFsuCycle#percentage}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}.

---

### FleetSoftwareUpdateFsuCycleConfig <a name="FleetSoftwareUpdateFsuCycleConfig" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string FsuCollectionId,
    FleetSoftwareUpdateFsuCycleGoalVersionDetails GoalVersionDetails,
    string Type,
    FleetSoftwareUpdateFsuCycleApplyActionSchedule ApplyActionSchedule = null,
    FleetSoftwareUpdateFsuCycleBatchingStrategy BatchingStrategy = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    FleetSoftwareUpdateFsuCycleDiagnosticsCollection DiagnosticsCollection = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string[] IsIgnoreMissingPatches = null,
    object IsIgnorePatches = null,
    object IsKeepPlacement = null,
    double MaxDrainTimeoutInSeconds = null,
    FleetSoftwareUpdateFsuCycleStageActionSchedule StageActionSchedule = null,
    FleetSoftwareUpdateFsuCycleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#compartment_id FleetSoftwareUpdateFsuCycle#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.fsuCollectionId">FsuCollectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#fsu_collection_id FleetSoftwareUpdateFsuCycle#fsu_collection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.goalVersionDetails">GoalVersionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a></code> | goal_version_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.applyActionSchedule">ApplyActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a></code> | apply_action_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.batchingStrategy">BatchingStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a></code> | batching_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#defined_tags FleetSoftwareUpdateFsuCycle#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.diagnosticsCollection">DiagnosticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a></code> | diagnostics_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#display_name FleetSoftwareUpdateFsuCycle#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#freeform_tags FleetSoftwareUpdateFsuCycle#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#id FleetSoftwareUpdateFsuCycle#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.isIgnoreMissingPatches">IsIgnoreMissingPatches</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_missing_patches FleetSoftwareUpdateFsuCycle#is_ignore_missing_patches}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.isIgnorePatches">IsIgnorePatches</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_patches FleetSoftwareUpdateFsuCycle#is_ignore_patches}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.isKeepPlacement">IsKeepPlacement</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_keep_placement FleetSoftwareUpdateFsuCycle#is_keep_placement}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.maxDrainTimeoutInSeconds">MaxDrainTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#max_drain_timeout_in_seconds FleetSoftwareUpdateFsuCycle#max_drain_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.stageActionSchedule">StageActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a></code> | stage_action_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts">FleetSoftwareUpdateFsuCycleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#compartment_id FleetSoftwareUpdateFsuCycle#compartment_id}.

---

##### `FsuCollectionId`<sup>Required</sup> <a name="FsuCollectionId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.fsuCollectionId"></a>

```csharp
public string FsuCollectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#fsu_collection_id FleetSoftwareUpdateFsuCycle#fsu_collection_id}.

---

##### `GoalVersionDetails`<sup>Required</sup> <a name="GoalVersionDetails" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.goalVersionDetails"></a>

```csharp
public FleetSoftwareUpdateFsuCycleGoalVersionDetails GoalVersionDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a>

goal_version_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#goal_version_details FleetSoftwareUpdateFsuCycle#goal_version_details}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}.

---

##### `ApplyActionSchedule`<sup>Optional</sup> <a name="ApplyActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.applyActionSchedule"></a>

```csharp
public FleetSoftwareUpdateFsuCycleApplyActionSchedule ApplyActionSchedule { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a>

apply_action_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#apply_action_schedule FleetSoftwareUpdateFsuCycle#apply_action_schedule}

---

##### `BatchingStrategy`<sup>Optional</sup> <a name="BatchingStrategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.batchingStrategy"></a>

```csharp
public FleetSoftwareUpdateFsuCycleBatchingStrategy BatchingStrategy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a>

batching_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#batching_strategy FleetSoftwareUpdateFsuCycle#batching_strategy}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#defined_tags FleetSoftwareUpdateFsuCycle#defined_tags}.

---

##### `DiagnosticsCollection`<sup>Optional</sup> <a name="DiagnosticsCollection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.diagnosticsCollection"></a>

```csharp
public FleetSoftwareUpdateFsuCycleDiagnosticsCollection DiagnosticsCollection { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a>

diagnostics_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#diagnostics_collection FleetSoftwareUpdateFsuCycle#diagnostics_collection}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#display_name FleetSoftwareUpdateFsuCycle#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#freeform_tags FleetSoftwareUpdateFsuCycle#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#id FleetSoftwareUpdateFsuCycle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsIgnoreMissingPatches`<sup>Optional</sup> <a name="IsIgnoreMissingPatches" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.isIgnoreMissingPatches"></a>

```csharp
public string[] IsIgnoreMissingPatches { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_missing_patches FleetSoftwareUpdateFsuCycle#is_ignore_missing_patches}.

---

##### `IsIgnorePatches`<sup>Optional</sup> <a name="IsIgnorePatches" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.isIgnorePatches"></a>

```csharp
public object IsIgnorePatches { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_patches FleetSoftwareUpdateFsuCycle#is_ignore_patches}.

---

##### `IsKeepPlacement`<sup>Optional</sup> <a name="IsKeepPlacement" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.isKeepPlacement"></a>

```csharp
public object IsKeepPlacement { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_keep_placement FleetSoftwareUpdateFsuCycle#is_keep_placement}.

---

##### `MaxDrainTimeoutInSeconds`<sup>Optional</sup> <a name="MaxDrainTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.maxDrainTimeoutInSeconds"></a>

```csharp
public double MaxDrainTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#max_drain_timeout_in_seconds FleetSoftwareUpdateFsuCycle#max_drain_timeout_in_seconds}.

---

##### `StageActionSchedule`<sup>Optional</sup> <a name="StageActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.stageActionSchedule"></a>

```csharp
public FleetSoftwareUpdateFsuCycleStageActionSchedule StageActionSchedule { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a>

stage_action_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#stage_action_schedule FleetSoftwareUpdateFsuCycle#stage_action_schedule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.timeouts"></a>

```csharp
public FleetSoftwareUpdateFsuCycleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts">FleetSoftwareUpdateFsuCycleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#timeouts FleetSoftwareUpdateFsuCycle#timeouts}

---

### FleetSoftwareUpdateFsuCycleDiagnosticsCollection <a name="FleetSoftwareUpdateFsuCycleDiagnosticsCollection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleDiagnosticsCollection {
    string LogCollectionMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection.property.logCollectionMode">LogCollectionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#log_collection_mode FleetSoftwareUpdateFsuCycle#log_collection_mode}. |

---

##### `LogCollectionMode`<sup>Optional</sup> <a name="LogCollectionMode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection.property.logCollectionMode"></a>

```csharp
public string LogCollectionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#log_collection_mode FleetSoftwareUpdateFsuCycle#log_collection_mode}.

---

### FleetSoftwareUpdateFsuCycleGoalVersionDetails <a name="FleetSoftwareUpdateFsuCycleGoalVersionDetails" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleGoalVersionDetails {
    string Type,
    string HomePolicy = null,
    string NewHomePrefix = null,
    string SoftwareImageId = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.homePolicy">HomePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#home_policy FleetSoftwareUpdateFsuCycle#home_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.newHomePrefix">NewHomePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#new_home_prefix FleetSoftwareUpdateFsuCycle#new_home_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.softwareImageId">SoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#software_image_id FleetSoftwareUpdateFsuCycle#software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#version FleetSoftwareUpdateFsuCycle#version}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}.

---

##### `HomePolicy`<sup>Optional</sup> <a name="HomePolicy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.homePolicy"></a>

```csharp
public string HomePolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#home_policy FleetSoftwareUpdateFsuCycle#home_policy}.

---

##### `NewHomePrefix`<sup>Optional</sup> <a name="NewHomePrefix" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.newHomePrefix"></a>

```csharp
public string NewHomePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#new_home_prefix FleetSoftwareUpdateFsuCycle#new_home_prefix}.

---

##### `SoftwareImageId`<sup>Optional</sup> <a name="SoftwareImageId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.softwareImageId"></a>

```csharp
public string SoftwareImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#software_image_id FleetSoftwareUpdateFsuCycle#software_image_id}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#version FleetSoftwareUpdateFsuCycle#version}.

---

### FleetSoftwareUpdateFsuCycleNextActionToExecute <a name="FleetSoftwareUpdateFsuCycleNextActionToExecute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleNextActionToExecute {

};
```


### FleetSoftwareUpdateFsuCycleStageActionSchedule <a name="FleetSoftwareUpdateFsuCycleStageActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleStageActionSchedule {
    string TimeToStart,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule.property.timeToStart">TimeToStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#time_to_start FleetSoftwareUpdateFsuCycle#time_to_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}. |

---

##### `TimeToStart`<sup>Required</sup> <a name="TimeToStart" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule.property.timeToStart"></a>

```csharp
public string TimeToStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#time_to_start FleetSoftwareUpdateFsuCycle#time_to_start}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}.

---

### FleetSoftwareUpdateFsuCycleTimeouts <a name="FleetSoftwareUpdateFsuCycleTimeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#create FleetSoftwareUpdateFsuCycle#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#delete FleetSoftwareUpdateFsuCycle#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#update FleetSoftwareUpdateFsuCycle#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#create FleetSoftwareUpdateFsuCycle#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#delete FleetSoftwareUpdateFsuCycle#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#update FleetSoftwareUpdateFsuCycle#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference <a name="FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.timeToStartInput">TimeToStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.timeToStart">TimeToStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeToStartInput`<sup>Optional</sup> <a name="TimeToStartInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.timeToStartInput"></a>

```csharp
public string TimeToStartInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `TimeToStart`<sup>Required</sup> <a name="TimeToStart" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.timeToStart"></a>

```csharp
public string TimeToStart { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.internalValue"></a>

```csharp
public FleetSoftwareUpdateFsuCycleApplyActionSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a>

---


### FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference <a name="FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetIsForceRolling">ResetIsForceRolling</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetIsWaitForBatchResume">ResetIsWaitForBatchResume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsForceRolling` <a name="ResetIsForceRolling" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetIsForceRolling"></a>

```csharp
private void ResetIsForceRolling()
```

##### `ResetIsWaitForBatchResume` <a name="ResetIsWaitForBatchResume" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetIsWaitForBatchResume"></a>

```csharp
private void ResetIsWaitForBatchResume()
```

##### `ResetPercentage` <a name="ResetPercentage" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetPercentage"></a>

```csharp
private void ResetPercentage()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isForceRollingInput">IsForceRollingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isWaitForBatchResumeInput">IsWaitForBatchResumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.percentageInput">PercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isForceRolling">IsForceRolling</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isWaitForBatchResume">IsWaitForBatchResume</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsForceRollingInput`<sup>Optional</sup> <a name="IsForceRollingInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isForceRollingInput"></a>

```csharp
public object IsForceRollingInput { get; }
```

- *Type:* object

---

##### `IsWaitForBatchResumeInput`<sup>Optional</sup> <a name="IsWaitForBatchResumeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isWaitForBatchResumeInput"></a>

```csharp
public object IsWaitForBatchResumeInput { get; }
```

- *Type:* object

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.percentageInput"></a>

```csharp
public double PercentageInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IsForceRolling`<sup>Required</sup> <a name="IsForceRolling" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isForceRolling"></a>

```csharp
public object IsForceRolling { get; }
```

- *Type:* object

---

##### `IsWaitForBatchResume`<sup>Required</sup> <a name="IsWaitForBatchResume" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isWaitForBatchResume"></a>

```csharp
public object IsWaitForBatchResume { get; }
```

- *Type:* object

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.internalValue"></a>

```csharp
public FleetSoftwareUpdateFsuCycleBatchingStrategy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a>

---


### FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference <a name="FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resetLogCollectionMode">ResetLogCollectionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogCollectionMode` <a name="ResetLogCollectionMode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resetLogCollectionMode"></a>

```csharp
private void ResetLogCollectionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.logCollectionModeInput">LogCollectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.logCollectionMode">LogCollectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogCollectionModeInput`<sup>Optional</sup> <a name="LogCollectionModeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.logCollectionModeInput"></a>

```csharp
public string LogCollectionModeInput { get; }
```

- *Type:* string

---

##### `LogCollectionMode`<sup>Required</sup> <a name="LogCollectionMode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.logCollectionMode"></a>

```csharp
public string LogCollectionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.internalValue"></a>

```csharp
public FleetSoftwareUpdateFsuCycleDiagnosticsCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a>

---


### FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference <a name="FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetHomePolicy">ResetHomePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetNewHomePrefix">ResetNewHomePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetSoftwareImageId">ResetSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHomePolicy` <a name="ResetHomePolicy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetHomePolicy"></a>

```csharp
private void ResetHomePolicy()
```

##### `ResetNewHomePrefix` <a name="ResetNewHomePrefix" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetNewHomePrefix"></a>

```csharp
private void ResetNewHomePrefix()
```

##### `ResetSoftwareImageId` <a name="ResetSoftwareImageId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetSoftwareImageId"></a>

```csharp
private void ResetSoftwareImageId()
```

##### `ResetVersion` <a name="ResetVersion" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.homePolicyInput">HomePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.newHomePrefixInput">NewHomePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.softwareImageIdInput">SoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.homePolicy">HomePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.newHomePrefix">NewHomePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.softwareImageId">SoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HomePolicyInput`<sup>Optional</sup> <a name="HomePolicyInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.homePolicyInput"></a>

```csharp
public string HomePolicyInput { get; }
```

- *Type:* string

---

##### `NewHomePrefixInput`<sup>Optional</sup> <a name="NewHomePrefixInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.newHomePrefixInput"></a>

```csharp
public string NewHomePrefixInput { get; }
```

- *Type:* string

---

##### `SoftwareImageIdInput`<sup>Optional</sup> <a name="SoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.softwareImageIdInput"></a>

```csharp
public string SoftwareImageIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `HomePolicy`<sup>Required</sup> <a name="HomePolicy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.homePolicy"></a>

```csharp
public string HomePolicy { get; }
```

- *Type:* string

---

##### `NewHomePrefix`<sup>Required</sup> <a name="NewHomePrefix" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.newHomePrefix"></a>

```csharp
public string NewHomePrefix { get; }
```

- *Type:* string

---

##### `SoftwareImageId`<sup>Required</sup> <a name="SoftwareImageId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.softwareImageId"></a>

```csharp
public string SoftwareImageId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.internalValue"></a>

```csharp
public FleetSoftwareUpdateFsuCycleGoalVersionDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a>

---


### FleetSoftwareUpdateFsuCycleNextActionToExecuteList <a name="FleetSoftwareUpdateFsuCycleNextActionToExecuteList" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleNextActionToExecuteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.get"></a>

```csharp
private FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference <a name="FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.timeToStart">TimeToStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecute">FleetSoftwareUpdateFsuCycleNextActionToExecute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeToStart`<sup>Required</sup> <a name="TimeToStart" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.timeToStart"></a>

```csharp
public string TimeToStart { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.internalValue"></a>

```csharp
public FleetSoftwareUpdateFsuCycleNextActionToExecute InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecute">FleetSoftwareUpdateFsuCycleNextActionToExecute</a>

---


### FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference <a name="FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.timeToStartInput">TimeToStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.timeToStart">TimeToStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeToStartInput`<sup>Optional</sup> <a name="TimeToStartInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.timeToStartInput"></a>

```csharp
public string TimeToStartInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `TimeToStart`<sup>Required</sup> <a name="TimeToStart" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.timeToStart"></a>

```csharp
public string TimeToStart { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.internalValue"></a>

```csharp
public FleetSoftwareUpdateFsuCycleStageActionSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a>

---


### FleetSoftwareUpdateFsuCycleTimeoutsOutputReference <a name="FleetSoftwareUpdateFsuCycleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCycleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



