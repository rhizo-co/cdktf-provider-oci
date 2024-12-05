# `demandSignalOccDemandSignal` Submodule <a name="`demandSignalOccDemandSignal` Submodule" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DemandSignalOccDemandSignal <a name="DemandSignalOccDemandSignal" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal oci_demand_signal_occ_demand_signal}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DemandSignalOccDemandSignal(Construct Scope, string Id, DemandSignalOccDemandSignalConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig">DemandSignalOccDemandSignalConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig">DemandSignalOccDemandSignalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals">PutOccDemandSignals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations">PutPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOccDemandSignalId">ResetOccDemandSignalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetPatchOperations">ResetPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOccDemandSignals` <a name="PutOccDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals"></a>

```csharp
private void PutOccDemandSignals(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals.parameter.value"></a>

- *Type:* object

---

##### `PutPatchOperations` <a name="PutPatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations"></a>

```csharp
private void PutPatchOperations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts"></a>

```csharp
private void PutTimeouts(DemandSignalOccDemandSignalTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOccDemandSignalId` <a name="ResetOccDemandSignalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOccDemandSignalId"></a>

```csharp
private void ResetOccDemandSignalId()
```

##### `ResetPatchOperations` <a name="ResetPatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetPatchOperations"></a>

```csharp
private void ResetPatchOperations()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DemandSignalOccDemandSignal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DemandSignalOccDemandSignal.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DemandSignalOccDemandSignal.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DemandSignalOccDemandSignal.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DemandSignalOccDemandSignal.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DemandSignalOccDemandSignal resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DemandSignalOccDemandSignal to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DemandSignalOccDemandSignal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DemandSignalOccDemandSignal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignals">OccDemandSignals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList">DemandSignalOccDemandSignalOccDemandSignalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList">DemandSignalOccDemandSignalPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference">DemandSignalOccDemandSignalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActiveInput">IsActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalIdInput">OccDemandSignalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalsInput">OccDemandSignalsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperationsInput">PatchOperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActive">IsActive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalId">OccDemandSignalId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OccDemandSignals`<sup>Required</sup> <a name="OccDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignals"></a>

```csharp
public DemandSignalOccDemandSignalOccDemandSignalsList OccDemandSignals { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList">DemandSignalOccDemandSignalOccDemandSignalsList</a>

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperations"></a>

```csharp
public DemandSignalOccDemandSignalPatchOperationsList PatchOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList">DemandSignalOccDemandSignalPatchOperationsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeouts"></a>

```csharp
public DemandSignalOccDemandSignalTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference">DemandSignalOccDemandSignalTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActiveInput"></a>

```csharp
public object IsActiveInput { get; }
```

- *Type:* object

---

##### `OccDemandSignalIdInput`<sup>Optional</sup> <a name="OccDemandSignalIdInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalIdInput"></a>

```csharp
public string OccDemandSignalIdInput { get; }
```

- *Type:* string

---

##### `OccDemandSignalsInput`<sup>Optional</sup> <a name="OccDemandSignalsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalsInput"></a>

```csharp
public object OccDemandSignalsInput { get; }
```

- *Type:* object

---

##### `PatchOperationsInput`<sup>Optional</sup> <a name="PatchOperationsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperationsInput"></a>

```csharp
public object PatchOperationsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActive"></a>

```csharp
public object IsActive { get; }
```

- *Type:* object

---

##### `OccDemandSignalId`<sup>Required</sup> <a name="OccDemandSignalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalId"></a>

```csharp
public string OccDemandSignalId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DemandSignalOccDemandSignalConfig <a name="DemandSignalOccDemandSignalConfig" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DemandSignalOccDemandSignalConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object IsActive,
    object OccDemandSignals,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string OccDemandSignalId = null,
    object PatchOperations = null,
    DemandSignalOccDemandSignalTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#compartment_id DemandSignalOccDemandSignal#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.isActive">IsActive</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#is_active DemandSignalOccDemandSignal#is_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignals">OccDemandSignals</a></code> | <code>object</code> | occ_demand_signals block. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#defined_tags DemandSignalOccDemandSignal#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#display_name DemandSignalOccDemandSignal#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#freeform_tags DemandSignalOccDemandSignal#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#id DemandSignalOccDemandSignal#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignalId">OccDemandSignalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signal_id DemandSignalOccDemandSignal#occ_demand_signal_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.patchOperations">PatchOperations</a></code> | <code>object</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#compartment_id DemandSignalOccDemandSignal#compartment_id}.

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.isActive"></a>

```csharp
public object IsActive { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#is_active DemandSignalOccDemandSignal#is_active}.

---

##### `OccDemandSignals`<sup>Required</sup> <a name="OccDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignals"></a>

```csharp
public object OccDemandSignals { get; set; }
```

- *Type:* object

occ_demand_signals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signals DemandSignalOccDemandSignal#occ_demand_signals}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#defined_tags DemandSignalOccDemandSignal#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#display_name DemandSignalOccDemandSignal#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#freeform_tags DemandSignalOccDemandSignal#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#id DemandSignalOccDemandSignal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OccDemandSignalId`<sup>Optional</sup> <a name="OccDemandSignalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignalId"></a>

```csharp
public string OccDemandSignalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signal_id DemandSignalOccDemandSignal#occ_demand_signal_id}.

---

##### `PatchOperations`<sup>Optional</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.patchOperations"></a>

```csharp
public object PatchOperations { get; set; }
```

- *Type:* object

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#patch_operations DemandSignalOccDemandSignal#patch_operations}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.timeouts"></a>

```csharp
public DemandSignalOccDemandSignalTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#timeouts DemandSignalOccDemandSignal#timeouts}

---

### DemandSignalOccDemandSignalOccDemandSignals <a name="DemandSignalOccDemandSignalOccDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DemandSignalOccDemandSignalOccDemandSignals {
    string ResourceType,
    string Units,
    object Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#resource_type DemandSignalOccDemandSignal#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.units">Units</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#units DemandSignalOccDemandSignal#units}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.values">Values</a></code> | <code>object</code> | values block. |

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#resource_type DemandSignalOccDemandSignal#resource_type}.

---

##### `Units`<sup>Required</sup> <a name="Units" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.units"></a>

```csharp
public string Units { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#units DemandSignalOccDemandSignal#units}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.values"></a>

```csharp
public object Values { get; set; }
```

- *Type:* object

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#values DemandSignalOccDemandSignal#values}

---

### DemandSignalOccDemandSignalOccDemandSignalsValues <a name="DemandSignalOccDemandSignalOccDemandSignalsValues" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DemandSignalOccDemandSignalOccDemandSignalsValues {
    string TimeExpected,
    double Value,
    string Comments = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.timeExpected">TimeExpected</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#time_expected DemandSignalOccDemandSignal#time_expected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.comments">Comments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#comments DemandSignalOccDemandSignal#comments}. |

---

##### `TimeExpected`<sup>Required</sup> <a name="TimeExpected" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.timeExpected"></a>

```csharp
public string TimeExpected { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#time_expected DemandSignalOccDemandSignal#time_expected}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}.

---

##### `Comments`<sup>Optional</sup> <a name="Comments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.comments"></a>

```csharp
public string Comments { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#comments DemandSignalOccDemandSignal#comments}.

---

### DemandSignalOccDemandSignalPatchOperations <a name="DemandSignalOccDemandSignalPatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DemandSignalOccDemandSignalPatchOperations {
    string From,
    string Operation,
    string Selection,
    System.Collections.Generic.IDictionary<string, string> Value,
    string Position = null,
    string SelectedItem = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#from DemandSignalOccDemandSignal#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.operation">Operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#operation DemandSignalOccDemandSignal#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selection">Selection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selection DemandSignalOccDemandSignal#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.value">Value</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.position">Position</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#position DemandSignalOccDemandSignal#position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selectedItem">SelectedItem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selected_item DemandSignalOccDemandSignal#selected_item}. |

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#from DemandSignalOccDemandSignal#from}.

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#operation DemandSignalOccDemandSignal#operation}.

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selection"></a>

```csharp
public string Selection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selection DemandSignalOccDemandSignal#selection}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.value"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Value { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.position"></a>

```csharp
public string Position { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#position DemandSignalOccDemandSignal#position}.

---

##### `SelectedItem`<sup>Optional</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selectedItem"></a>

```csharp
public string SelectedItem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selected_item DemandSignalOccDemandSignal#selected_item}.

---

### DemandSignalOccDemandSignalTimeouts <a name="DemandSignalOccDemandSignalTimeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DemandSignalOccDemandSignalTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#create DemandSignalOccDemandSignal#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#delete DemandSignalOccDemandSignal#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#update DemandSignalOccDemandSignal#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#create DemandSignalOccDemandSignal#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#delete DemandSignalOccDemandSignal#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#update DemandSignalOccDemandSignal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DemandSignalOccDemandSignalOccDemandSignalsList <a name="DemandSignalOccDemandSignalOccDemandSignalsList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DemandSignalOccDemandSignalOccDemandSignalsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get"></a>

```csharp
private DemandSignalOccDemandSignalOccDemandSignalsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DemandSignalOccDemandSignalOccDemandSignalsOutputReference <a name="DemandSignalOccDemandSignalOccDemandSignalsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DemandSignalOccDemandSignalOccDemandSignalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues">PutValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValues` <a name="PutValues" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues"></a>

```csharp
private void PutValues(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList">DemandSignalOccDemandSignalOccDemandSignalsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.unitsInput">UnitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.units">Units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.values"></a>

```csharp
public DemandSignalOccDemandSignalOccDemandSignalsValuesList Values { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList">DemandSignalOccDemandSignalOccDemandSignalsValuesList</a>

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.unitsInput"></a>

```csharp
public string UnitsInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.valuesInput"></a>

```csharp
public object ValuesInput { get; }
```

- *Type:* object

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Units`<sup>Required</sup> <a name="Units" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.units"></a>

```csharp
public string Units { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DemandSignalOccDemandSignalOccDemandSignalsValuesList <a name="DemandSignalOccDemandSignalOccDemandSignalsValuesList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DemandSignalOccDemandSignalOccDemandSignalsValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get"></a>

```csharp
private DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference <a name="DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resetComments">ResetComments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComments` <a name="ResetComments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resetComments"></a>

```csharp
private void ResetComments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.commentsInput">CommentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpectedInput">TimeExpectedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.comments">Comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpected">TimeExpected</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommentsInput`<sup>Optional</sup> <a name="CommentsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.commentsInput"></a>

```csharp
public string CommentsInput { get; }
```

- *Type:* string

---

##### `TimeExpectedInput`<sup>Optional</sup> <a name="TimeExpectedInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpectedInput"></a>

```csharp
public string TimeExpectedInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.comments"></a>

```csharp
public string Comments { get; }
```

- *Type:* string

---

##### `TimeExpected`<sup>Required</sup> <a name="TimeExpected" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpected"></a>

```csharp
public string TimeExpected { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DemandSignalOccDemandSignalPatchOperationsList <a name="DemandSignalOccDemandSignalPatchOperationsList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DemandSignalOccDemandSignalPatchOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get"></a>

```csharp
private DemandSignalOccDemandSignalPatchOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DemandSignalOccDemandSignalPatchOperationsOutputReference <a name="DemandSignalOccDemandSignalPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DemandSignalOccDemandSignalPatchOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetSelectedItem">ResetSelectedItem</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPosition` <a name="ResetPosition" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetSelectedItem` <a name="ResetSelectedItem" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetSelectedItem"></a>

```csharp
private void ResetSelectedItem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.positionInput">PositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItemInput">SelectedItemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectionInput">SelectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.valueInput">ValueInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.position">Position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItem">SelectedItem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selection">Selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.value">Value</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.positionInput"></a>

```csharp
public string PositionInput { get; }
```

- *Type:* string

---

##### `SelectedItemInput`<sup>Optional</sup> <a name="SelectedItemInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItemInput"></a>

```csharp
public string SelectedItemInput { get; }
```

- *Type:* string

---

##### `SelectionInput`<sup>Optional</sup> <a name="SelectionInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectionInput"></a>

```csharp
public string SelectionInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.valueInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValueInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.position"></a>

```csharp
public string Position { get; }
```

- *Type:* string

---

##### `SelectedItem`<sup>Required</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItem"></a>

```csharp
public string SelectedItem { get; }
```

- *Type:* string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selection"></a>

```csharp
public string Selection { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.value"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Value { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DemandSignalOccDemandSignalTimeoutsOutputReference <a name="DemandSignalOccDemandSignalTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DemandSignalOccDemandSignalTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



