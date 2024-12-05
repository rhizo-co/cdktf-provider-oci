# `dataSafeCalculateAuditVolumeAvailable` Submodule <a name="`dataSafeCalculateAuditVolumeAvailable` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeCalculateAuditVolumeAvailable <a name="DataSafeCalculateAuditVolumeAvailable" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available oci_data_safe_calculate_audit_volume_available}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeCalculateAuditVolumeAvailable(Construct Scope, string Id, DataSafeCalculateAuditVolumeAvailableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig">DataSafeCalculateAuditVolumeAvailableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig">DataSafeCalculateAuditVolumeAvailableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetAuditCollectionStartTime">ResetAuditCollectionStartTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetDatabaseUniqueName">ResetDatabaseUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetTrailLocations">ResetTrailLocations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeCalculateAuditVolumeAvailableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a>

---

##### `ResetAuditCollectionStartTime` <a name="ResetAuditCollectionStartTime" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetAuditCollectionStartTime"></a>

```csharp
private void ResetAuditCollectionStartTime()
```

##### `ResetDatabaseUniqueName` <a name="ResetDatabaseUniqueName" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetDatabaseUniqueName"></a>

```csharp
private void ResetDatabaseUniqueName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrailLocations` <a name="ResetTrailLocations" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetTrailLocations"></a>

```csharp
private void ResetTrailLocations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeCalculateAuditVolumeAvailable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeCalculateAuditVolumeAvailable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeCalculateAuditVolumeAvailable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeCalculateAuditVolumeAvailable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeCalculateAuditVolumeAvailable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeCalculateAuditVolumeAvailable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeCalculateAuditVolumeAvailable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeCalculateAuditVolumeAvailable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeCalculateAuditVolumeAvailable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.availableAuditVolumes">AvailableAuditVolumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList">DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference">DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditCollectionStartTimeInput">AuditCollectionStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditProfileIdInput">AuditProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.databaseUniqueNameInput">DatabaseUniqueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.trailLocationsInput">TrailLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditCollectionStartTime">AuditCollectionStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditProfileId">AuditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.databaseUniqueName">DatabaseUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.trailLocations">TrailLocations</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AvailableAuditVolumes`<sup>Required</sup> <a name="AvailableAuditVolumes" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.availableAuditVolumes"></a>

```csharp
public DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList AvailableAuditVolumes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList">DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.timeouts"></a>

```csharp
public DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference">DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference</a>

---

##### `AuditCollectionStartTimeInput`<sup>Optional</sup> <a name="AuditCollectionStartTimeInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditCollectionStartTimeInput"></a>

```csharp
public string AuditCollectionStartTimeInput { get; }
```

- *Type:* string

---

##### `AuditProfileIdInput`<sup>Optional</sup> <a name="AuditProfileIdInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditProfileIdInput"></a>

```csharp
public string AuditProfileIdInput { get; }
```

- *Type:* string

---

##### `DatabaseUniqueNameInput`<sup>Optional</sup> <a name="DatabaseUniqueNameInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.databaseUniqueNameInput"></a>

```csharp
public string DatabaseUniqueNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrailLocationsInput`<sup>Optional</sup> <a name="TrailLocationsInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.trailLocationsInput"></a>

```csharp
public string[] TrailLocationsInput { get; }
```

- *Type:* string[]

---

##### `AuditCollectionStartTime`<sup>Required</sup> <a name="AuditCollectionStartTime" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditCollectionStartTime"></a>

```csharp
public string AuditCollectionStartTime { get; }
```

- *Type:* string

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditProfileId"></a>

```csharp
public string AuditProfileId { get; }
```

- *Type:* string

---

##### `DatabaseUniqueName`<sup>Required</sup> <a name="DatabaseUniqueName" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.databaseUniqueName"></a>

```csharp
public string DatabaseUniqueName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TrailLocations`<sup>Required</sup> <a name="TrailLocations" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.trailLocations"></a>

```csharp
public string[] TrailLocations { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes <a name="DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes {

};
```


### DataSafeCalculateAuditVolumeAvailableConfig <a name="DataSafeCalculateAuditVolumeAvailableConfig" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeCalculateAuditVolumeAvailableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuditProfileId,
    string AuditCollectionStartTime = null,
    string DatabaseUniqueName = null,
    string Id = null,
    DataSafeCalculateAuditVolumeAvailableTimeouts Timeouts = null,
    string[] TrailLocations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.auditProfileId">AuditProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_profile_id DataSafeCalculateAuditVolumeAvailable#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.auditCollectionStartTime">AuditCollectionStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_collection_start_time DataSafeCalculateAuditVolumeAvailable#audit_collection_start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.databaseUniqueName">DatabaseUniqueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#database_unique_name DataSafeCalculateAuditVolumeAvailable#database_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#id DataSafeCalculateAuditVolumeAvailable#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.trailLocations">TrailLocations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#trail_locations DataSafeCalculateAuditVolumeAvailable#trail_locations}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.auditProfileId"></a>

```csharp
public string AuditProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_profile_id DataSafeCalculateAuditVolumeAvailable#audit_profile_id}.

---

##### `AuditCollectionStartTime`<sup>Optional</sup> <a name="AuditCollectionStartTime" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.auditCollectionStartTime"></a>

```csharp
public string AuditCollectionStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_collection_start_time DataSafeCalculateAuditVolumeAvailable#audit_collection_start_time}.

---

##### `DatabaseUniqueName`<sup>Optional</sup> <a name="DatabaseUniqueName" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.databaseUniqueName"></a>

```csharp
public string DatabaseUniqueName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#database_unique_name DataSafeCalculateAuditVolumeAvailable#database_unique_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#id DataSafeCalculateAuditVolumeAvailable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.timeouts"></a>

```csharp
public DataSafeCalculateAuditVolumeAvailableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#timeouts DataSafeCalculateAuditVolumeAvailable#timeouts}

---

##### `TrailLocations`<sup>Optional</sup> <a name="TrailLocations" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.trailLocations"></a>

```csharp
public string[] TrailLocations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#trail_locations DataSafeCalculateAuditVolumeAvailable#trail_locations}.

---

### DataSafeCalculateAuditVolumeAvailableTimeouts <a name="DataSafeCalculateAuditVolumeAvailableTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeCalculateAuditVolumeAvailableTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#create DataSafeCalculateAuditVolumeAvailable#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#delete DataSafeCalculateAuditVolumeAvailable#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#update DataSafeCalculateAuditVolumeAvailable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#create DataSafeCalculateAuditVolumeAvailable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#delete DataSafeCalculateAuditVolumeAvailable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#update DataSafeCalculateAuditVolumeAvailable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList <a name="DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.get"></a>

```csharp
private DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference <a name="DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.auditProfileId">AuditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.monthInConsideration">MonthInConsideration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.trailLocation">TrailLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.volume">Volume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes">DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.auditProfileId"></a>

```csharp
public string AuditProfileId { get; }
```

- *Type:* string

---

##### `MonthInConsideration`<sup>Required</sup> <a name="MonthInConsideration" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.monthInConsideration"></a>

```csharp
public string MonthInConsideration { get; }
```

- *Type:* string

---

##### `TrailLocation`<sup>Required</sup> <a name="TrailLocation" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.trailLocation"></a>

```csharp
public string TrailLocation { get; }
```

- *Type:* string

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.volume"></a>

```csharp
public string Volume { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.internalValue"></a>

```csharp
public DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes">DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes</a>

---


### DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference <a name="DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



