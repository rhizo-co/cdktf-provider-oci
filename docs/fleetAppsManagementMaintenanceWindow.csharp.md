# `fleetAppsManagementMaintenanceWindow` Submodule <a name="`fleetAppsManagementMaintenanceWindow` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementMaintenanceWindow <a name="FleetAppsManagementMaintenanceWindow" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window oci_fleet_apps_management_maintenance_window}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementMaintenanceWindow(Construct Scope, string Id, FleetAppsManagementMaintenanceWindowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig">FleetAppsManagementMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig">FleetAppsManagementMaintenanceWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsOutage">ResetIsOutage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsRecurring">ResetIsRecurring</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetMaintenanceWindowType">ResetMaintenanceWindowType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetRecurrences">ResetRecurrences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTaskInitiationCutoff">ResetTaskInitiationCutoff</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeScheduleStart">ResetTimeScheduleStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.putTimeouts"></a>

```csharp
private void PutTimeouts(FleetAppsManagementMaintenanceWindowTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsOutage` <a name="ResetIsOutage" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsOutage"></a>

```csharp
private void ResetIsOutage()
```

##### `ResetIsRecurring` <a name="ResetIsRecurring" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsRecurring"></a>

```csharp
private void ResetIsRecurring()
```

##### `ResetMaintenanceWindowType` <a name="ResetMaintenanceWindowType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetMaintenanceWindowType"></a>

```csharp
private void ResetMaintenanceWindowType()
```

##### `ResetRecurrences` <a name="ResetRecurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetRecurrences"></a>

```csharp
private void ResetRecurrences()
```

##### `ResetTaskInitiationCutoff` <a name="ResetTaskInitiationCutoff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTaskInitiationCutoff"></a>

```csharp
private void ResetTaskInitiationCutoff()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeScheduleStart` <a name="ResetTimeScheduleStart" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeScheduleStart"></a>

```csharp
private void ResetTimeScheduleStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FleetAppsManagementMaintenanceWindow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetAppsManagementMaintenanceWindow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetAppsManagementMaintenanceWindow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetAppsManagementMaintenanceWindow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetAppsManagementMaintenanceWindow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FleetAppsManagementMaintenanceWindow resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FleetAppsManagementMaintenanceWindow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FleetAppsManagementMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.resourceRegion">ResourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference">FleetAppsManagementMaintenanceWindowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutageInput">IsOutageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurringInput">IsRecurringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowTypeInput">MaintenanceWindowTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrencesInput">RecurrencesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoffInput">TaskInitiationCutoffInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStartInput">TimeScheduleStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutage">IsOutage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurring">IsRecurring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowType">MaintenanceWindowType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrences">Recurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoff">TaskInitiationCutoff</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStart">TimeScheduleStart</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.resourceRegion"></a>

```csharp
public string ResourceRegion { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeouts"></a>

```csharp
public FleetAppsManagementMaintenanceWindowTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference">FleetAppsManagementMaintenanceWindowTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsOutageInput`<sup>Optional</sup> <a name="IsOutageInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutageInput"></a>

```csharp
public object IsOutageInput { get; }
```

- *Type:* object

---

##### `IsRecurringInput`<sup>Optional</sup> <a name="IsRecurringInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurringInput"></a>

```csharp
public object IsRecurringInput { get; }
```

- *Type:* object

---

##### `MaintenanceWindowTypeInput`<sup>Optional</sup> <a name="MaintenanceWindowTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowTypeInput"></a>

```csharp
public string MaintenanceWindowTypeInput { get; }
```

- *Type:* string

---

##### `RecurrencesInput`<sup>Optional</sup> <a name="RecurrencesInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrencesInput"></a>

```csharp
public string RecurrencesInput { get; }
```

- *Type:* string

---

##### `TaskInitiationCutoffInput`<sup>Optional</sup> <a name="TaskInitiationCutoffInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoffInput"></a>

```csharp
public double TaskInitiationCutoffInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeScheduleStartInput`<sup>Optional</sup> <a name="TimeScheduleStartInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStartInput"></a>

```csharp
public string TimeScheduleStartInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsOutage`<sup>Required</sup> <a name="IsOutage" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutage"></a>

```csharp
public object IsOutage { get; }
```

- *Type:* object

---

##### `IsRecurring`<sup>Required</sup> <a name="IsRecurring" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurring"></a>

```csharp
public object IsRecurring { get; }
```

- *Type:* object

---

##### `MaintenanceWindowType`<sup>Required</sup> <a name="MaintenanceWindowType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowType"></a>

```csharp
public string MaintenanceWindowType { get; }
```

- *Type:* string

---

##### `Recurrences`<sup>Required</sup> <a name="Recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrences"></a>

```csharp
public string Recurrences { get; }
```

- *Type:* string

---

##### `TaskInitiationCutoff`<sup>Required</sup> <a name="TaskInitiationCutoff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoff"></a>

```csharp
public double TaskInitiationCutoff { get; }
```

- *Type:* double

---

##### `TimeScheduleStart`<sup>Required</sup> <a name="TimeScheduleStart" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStart"></a>

```csharp
public string TimeScheduleStart { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementMaintenanceWindowConfig <a name="FleetAppsManagementMaintenanceWindowConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementMaintenanceWindowConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Duration,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsOutage = null,
    object IsRecurring = null,
    string MaintenanceWindowType = null,
    string Recurrences = null,
    double TaskInitiationCutoff = null,
    FleetAppsManagementMaintenanceWindowTimeouts Timeouts = null,
    string TimeScheduleStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#compartment_id FleetAppsManagementMaintenanceWindow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#duration FleetAppsManagementMaintenanceWindow#duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#defined_tags FleetAppsManagementMaintenanceWindow#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#description FleetAppsManagementMaintenanceWindow#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#display_name FleetAppsManagementMaintenanceWindow#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#freeform_tags FleetAppsManagementMaintenanceWindow#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#id FleetAppsManagementMaintenanceWindow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isOutage">IsOutage</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_outage FleetAppsManagementMaintenanceWindow#is_outage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isRecurring">IsRecurring</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_recurring FleetAppsManagementMaintenanceWindow#is_recurring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.maintenanceWindowType">MaintenanceWindowType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#maintenance_window_type FleetAppsManagementMaintenanceWindow#maintenance_window_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.recurrences">Recurrences</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#recurrences FleetAppsManagementMaintenanceWindow#recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.taskInitiationCutoff">TaskInitiationCutoff</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#task_initiation_cutoff FleetAppsManagementMaintenanceWindow#task_initiation_cutoff}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeScheduleStart">TimeScheduleStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#time_schedule_start FleetAppsManagementMaintenanceWindow#time_schedule_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#compartment_id FleetAppsManagementMaintenanceWindow#compartment_id}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#duration FleetAppsManagementMaintenanceWindow#duration}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#defined_tags FleetAppsManagementMaintenanceWindow#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#description FleetAppsManagementMaintenanceWindow#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#display_name FleetAppsManagementMaintenanceWindow#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#freeform_tags FleetAppsManagementMaintenanceWindow#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#id FleetAppsManagementMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsOutage`<sup>Optional</sup> <a name="IsOutage" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isOutage"></a>

```csharp
public object IsOutage { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_outage FleetAppsManagementMaintenanceWindow#is_outage}.

---

##### `IsRecurring`<sup>Optional</sup> <a name="IsRecurring" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isRecurring"></a>

```csharp
public object IsRecurring { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_recurring FleetAppsManagementMaintenanceWindow#is_recurring}.

---

##### `MaintenanceWindowType`<sup>Optional</sup> <a name="MaintenanceWindowType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.maintenanceWindowType"></a>

```csharp
public string MaintenanceWindowType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#maintenance_window_type FleetAppsManagementMaintenanceWindow#maintenance_window_type}.

---

##### `Recurrences`<sup>Optional</sup> <a name="Recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.recurrences"></a>

```csharp
public string Recurrences { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#recurrences FleetAppsManagementMaintenanceWindow#recurrences}.

---

##### `TaskInitiationCutoff`<sup>Optional</sup> <a name="TaskInitiationCutoff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.taskInitiationCutoff"></a>

```csharp
public double TaskInitiationCutoff { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#task_initiation_cutoff FleetAppsManagementMaintenanceWindow#task_initiation_cutoff}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeouts"></a>

```csharp
public FleetAppsManagementMaintenanceWindowTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#timeouts FleetAppsManagementMaintenanceWindow#timeouts}

---

##### `TimeScheduleStart`<sup>Optional</sup> <a name="TimeScheduleStart" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeScheduleStart"></a>

```csharp
public string TimeScheduleStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#time_schedule_start FleetAppsManagementMaintenanceWindow#time_schedule_start}.

---

### FleetAppsManagementMaintenanceWindowTimeouts <a name="FleetAppsManagementMaintenanceWindowTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementMaintenanceWindowTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#create FleetAppsManagementMaintenanceWindow#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#delete FleetAppsManagementMaintenanceWindow#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#update FleetAppsManagementMaintenanceWindow#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#create FleetAppsManagementMaintenanceWindow#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#delete FleetAppsManagementMaintenanceWindow#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#update FleetAppsManagementMaintenanceWindow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementMaintenanceWindowTimeoutsOutputReference <a name="FleetAppsManagementMaintenanceWindowTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementMaintenanceWindowTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



