# `databaseAutonomousContainerDatabaseDataguardAssociation` Submodule <a name="`databaseAutonomousContainerDatabaseDataguardAssociation` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociation <a name="DatabaseAutonomousContainerDatabaseDataguardAssociation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association oci_database_autonomous_container_database_dataguard_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousContainerDatabaseDataguardAssociation(Construct Scope, string Id, DatabaseAutonomousContainerDatabaseDataguardAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putPeerAutonomousContainerDatabaseBackupConfig">PutPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetAutonomousContainerDatabaseDataguardAssociationId">ResetAutonomousContainerDatabaseDataguardAssociationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetFastStartFailOverLagLimitInSeconds">ResetFastStartFailOverLagLimitInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetIsAutomaticFailoverEnabled">ResetIsAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousContainerDatabaseBackupConfig">ResetPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousContainerDatabaseCompartmentId">ResetPeerAutonomousContainerDatabaseCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousVmClusterId">ResetPeerAutonomousVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerCloudAutonomousVmClusterId">ResetPeerCloudAutonomousVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerDbUniqueName">ResetPeerDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetStandbyMaintenanceBufferInDays">ResetStandbyMaintenanceBufferInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPeerAutonomousContainerDatabaseBackupConfig` <a name="PutPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putPeerAutonomousContainerDatabaseBackupConfig"></a>

```csharp
private void PutPeerAutonomousContainerDatabaseBackupConfig(DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putPeerAutonomousContainerDatabaseBackupConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts</a>

---

##### `ResetAutonomousContainerDatabaseDataguardAssociationId` <a name="ResetAutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetAutonomousContainerDatabaseDataguardAssociationId"></a>

```csharp
private void ResetAutonomousContainerDatabaseDataguardAssociationId()
```

##### `ResetFastStartFailOverLagLimitInSeconds` <a name="ResetFastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetFastStartFailOverLagLimitInSeconds"></a>

```csharp
private void ResetFastStartFailOverLagLimitInSeconds()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsAutomaticFailoverEnabled` <a name="ResetIsAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetIsAutomaticFailoverEnabled"></a>

```csharp
private void ResetIsAutomaticFailoverEnabled()
```

##### `ResetPeerAutonomousContainerDatabaseBackupConfig` <a name="ResetPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousContainerDatabaseBackupConfig"></a>

```csharp
private void ResetPeerAutonomousContainerDatabaseBackupConfig()
```

##### `ResetPeerAutonomousContainerDatabaseCompartmentId` <a name="ResetPeerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousContainerDatabaseCompartmentId"></a>

```csharp
private void ResetPeerAutonomousContainerDatabaseCompartmentId()
```

##### `ResetPeerAutonomousVmClusterId` <a name="ResetPeerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousVmClusterId"></a>

```csharp
private void ResetPeerAutonomousVmClusterId()
```

##### `ResetPeerCloudAutonomousVmClusterId` <a name="ResetPeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerCloudAutonomousVmClusterId"></a>

```csharp
private void ResetPeerCloudAutonomousVmClusterId()
```

##### `ResetPeerDbUniqueName` <a name="ResetPeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerDbUniqueName"></a>

```csharp
private void ResetPeerDbUniqueName()
```

##### `ResetStandbyMaintenanceBufferInDays` <a name="ResetStandbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetStandbyMaintenanceBufferInDays"></a>

```csharp
private void ResetStandbyMaintenanceBufferInDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousContainerDatabaseDataguardAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousContainerDatabaseDataguardAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousContainerDatabaseDataguardAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousContainerDatabaseDataguardAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseAutonomousContainerDatabaseDataguardAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseAutonomousContainerDatabaseDataguardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousContainerDatabaseDataguardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyLag">ApplyLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyRate">ApplyRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseBackupConfig">PeerAutonomousContainerDatabaseBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDataguardAssociationId">PeerAutonomousContainerDatabaseDataguardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseId">PeerAutonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerLifecycleState">PeerLifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerRole">PeerRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastRoleChanged">TimeLastRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastSynced">TimeLastSynced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.transportLag">TransportLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationIdInput">AutonomousContainerDatabaseDataguardAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseIdInput">AutonomousContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fastStartFailOverLagLimitInSecondsInput">FastStartFailOverLagLimitInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.isAutomaticFailoverEnabledInput">IsAutomaticFailoverEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseBackupConfigInput">PeerAutonomousContainerDatabaseBackupConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseCompartmentIdInput">PeerAutonomousContainerDatabaseCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDisplayNameInput">PeerAutonomousContainerDatabaseDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousVmClusterIdInput">PeerAutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerCloudAutonomousVmClusterIdInput">PeerCloudAutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerDbUniqueNameInput">PeerDbUniqueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.protectionModeInput">ProtectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.standbyMaintenanceBufferInDaysInput">StandbyMaintenanceBufferInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationId">AutonomousContainerDatabaseDataguardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fastStartFailOverLagLimitInSeconds">FastStartFailOverLagLimitInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.isAutomaticFailoverEnabled">IsAutomaticFailoverEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseCompartmentId">PeerAutonomousContainerDatabaseCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDisplayName">PeerAutonomousContainerDatabaseDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousVmClusterId">PeerAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerCloudAutonomousVmClusterId">PeerCloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerDbUniqueName">PeerDbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.protectionMode">ProtectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.standbyMaintenanceBufferInDays">StandbyMaintenanceBufferInDays</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplyLag`<sup>Required</sup> <a name="ApplyLag" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyLag"></a>

```csharp
public string ApplyLag { get; }
```

- *Type:* string

---

##### `ApplyRate`<sup>Required</sup> <a name="ApplyRate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyRate"></a>

```csharp
public string ApplyRate { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `PeerAutonomousContainerDatabaseBackupConfig`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```csharp
public DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference PeerAutonomousContainerDatabaseBackupConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference</a>

---

##### `PeerAutonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDataguardAssociationId"></a>

```csharp
public string PeerAutonomousContainerDatabaseDataguardAssociationId { get; }
```

- *Type:* string

---

##### `PeerAutonomousContainerDatabaseId`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseId"></a>

```csharp
public string PeerAutonomousContainerDatabaseId { get; }
```

- *Type:* string

---

##### `PeerLifecycleState`<sup>Required</sup> <a name="PeerLifecycleState" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerLifecycleState"></a>

```csharp
public string PeerLifecycleState { get; }
```

- *Type:* string

---

##### `PeerRole`<sup>Required</sup> <a name="PeerRole" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerRole"></a>

```csharp
public string PeerRole { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastRoleChanged`<sup>Required</sup> <a name="TimeLastRoleChanged" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastRoleChanged"></a>

```csharp
public string TimeLastRoleChanged { get; }
```

- *Type:* string

---

##### `TimeLastSynced`<sup>Required</sup> <a name="TimeLastSynced" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastSynced"></a>

```csharp
public string TimeLastSynced { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeouts"></a>

```csharp
public DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference</a>

---

##### `TransportLag`<sup>Required</sup> <a name="TransportLag" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.transportLag"></a>

```csharp
public string TransportLag { get; }
```

- *Type:* string

---

##### `AutonomousContainerDatabaseDataguardAssociationIdInput`<sup>Optional</sup> <a name="AutonomousContainerDatabaseDataguardAssociationIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationIdInput"></a>

```csharp
public string AutonomousContainerDatabaseDataguardAssociationIdInput { get; }
```

- *Type:* string

---

##### `AutonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseIdInput"></a>

```csharp
public string AutonomousContainerDatabaseIdInput { get; }
```

- *Type:* string

---

##### `FastStartFailOverLagLimitInSecondsInput`<sup>Optional</sup> <a name="FastStartFailOverLagLimitInSecondsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fastStartFailOverLagLimitInSecondsInput"></a>

```csharp
public double FastStartFailOverLagLimitInSecondsInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAutomaticFailoverEnabledInput`<sup>Optional</sup> <a name="IsAutomaticFailoverEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.isAutomaticFailoverEnabledInput"></a>

```csharp
public object IsAutomaticFailoverEnabledInput { get; }
```

- *Type:* object

---

##### `PeerAutonomousContainerDatabaseBackupConfigInput`<sup>Optional</sup> <a name="PeerAutonomousContainerDatabaseBackupConfigInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseBackupConfigInput"></a>

```csharp
public DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig PeerAutonomousContainerDatabaseBackupConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a>

---

##### `PeerAutonomousContainerDatabaseCompartmentIdInput`<sup>Optional</sup> <a name="PeerAutonomousContainerDatabaseCompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseCompartmentIdInput"></a>

```csharp
public string PeerAutonomousContainerDatabaseCompartmentIdInput { get; }
```

- *Type:* string

---

##### `PeerAutonomousContainerDatabaseDisplayNameInput`<sup>Optional</sup> <a name="PeerAutonomousContainerDatabaseDisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDisplayNameInput"></a>

```csharp
public string PeerAutonomousContainerDatabaseDisplayNameInput { get; }
```

- *Type:* string

---

##### `PeerAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="PeerAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousVmClusterIdInput"></a>

```csharp
public string PeerAutonomousVmClusterIdInput { get; }
```

- *Type:* string

---

##### `PeerCloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="PeerCloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerCloudAutonomousVmClusterIdInput"></a>

```csharp
public string PeerCloudAutonomousVmClusterIdInput { get; }
```

- *Type:* string

---

##### `PeerDbUniqueNameInput`<sup>Optional</sup> <a name="PeerDbUniqueNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerDbUniqueNameInput"></a>

```csharp
public string PeerDbUniqueNameInput { get; }
```

- *Type:* string

---

##### `ProtectionModeInput`<sup>Optional</sup> <a name="ProtectionModeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.protectionModeInput"></a>

```csharp
public string ProtectionModeInput { get; }
```

- *Type:* string

---

##### `StandbyMaintenanceBufferInDaysInput`<sup>Optional</sup> <a name="StandbyMaintenanceBufferInDaysInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.standbyMaintenanceBufferInDaysInput"></a>

```csharp
public double StandbyMaintenanceBufferInDaysInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="AutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```csharp
public string AutonomousContainerDatabaseDataguardAssociationId { get; }
```

- *Type:* string

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseId"></a>

```csharp
public string AutonomousContainerDatabaseId { get; }
```

- *Type:* string

---

##### `FastStartFailOverLagLimitInSeconds`<sup>Required</sup> <a name="FastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fastStartFailOverLagLimitInSeconds"></a>

```csharp
public double FastStartFailOverLagLimitInSeconds { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAutomaticFailoverEnabled`<sup>Required</sup> <a name="IsAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.isAutomaticFailoverEnabled"></a>

```csharp
public object IsAutomaticFailoverEnabled { get; }
```

- *Type:* object

---

##### `PeerAutonomousContainerDatabaseCompartmentId`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```csharp
public string PeerAutonomousContainerDatabaseCompartmentId { get; }
```

- *Type:* string

---

##### `PeerAutonomousContainerDatabaseDisplayName`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDisplayName"></a>

```csharp
public string PeerAutonomousContainerDatabaseDisplayName { get; }
```

- *Type:* string

---

##### `PeerAutonomousVmClusterId`<sup>Required</sup> <a name="PeerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousVmClusterId"></a>

```csharp
public string PeerAutonomousVmClusterId { get; }
```

- *Type:* string

---

##### `PeerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="PeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerCloudAutonomousVmClusterId"></a>

```csharp
public string PeerCloudAutonomousVmClusterId { get; }
```

- *Type:* string

---

##### `PeerDbUniqueName`<sup>Required</sup> <a name="PeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerDbUniqueName"></a>

```csharp
public string PeerDbUniqueName { get; }
```

- *Type:* string

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.protectionMode"></a>

```csharp
public string ProtectionMode { get; }
```

- *Type:* string

---

##### `StandbyMaintenanceBufferInDays`<sup>Required</sup> <a name="StandbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.standbyMaintenanceBufferInDays"></a>

```csharp
public double StandbyMaintenanceBufferInDays { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociationConfig <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousContainerDatabaseDataguardAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutonomousContainerDatabaseId,
    string PeerAutonomousContainerDatabaseDisplayName,
    string ProtectionMode,
    string AutonomousContainerDatabaseDataguardAssociationId = null,
    double FastStartFailOverLagLimitInSeconds = null,
    string Id = null,
    object IsAutomaticFailoverEnabled = null,
    DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig PeerAutonomousContainerDatabaseBackupConfig = null,
    string PeerAutonomousContainerDatabaseCompartmentId = null,
    string PeerAutonomousVmClusterId = null,
    string PeerCloudAutonomousVmClusterId = null,
    string PeerDbUniqueName = null,
    double StandbyMaintenanceBufferInDays = null,
    DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseDisplayName">PeerAutonomousContainerDatabaseDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.protectionMode">ProtectionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#protection_mode DatabaseAutonomousContainerDatabaseDataguardAssociation#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseDataguardAssociationId">AutonomousContainerDatabaseDataguardAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.fastStartFailOverLagLimitInSeconds">FastStartFailOverLagLimitInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabaseDataguardAssociation#fast_start_fail_over_lag_limit_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.isAutomaticFailoverEnabled">IsAutomaticFailoverEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#is_automatic_failover_enabled DatabaseAutonomousContainerDatabaseDataguardAssociation#is_automatic_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseBackupConfig">PeerAutonomousContainerDatabaseBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a></code> | peer_autonomous_container_database_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseCompartmentId">PeerAutonomousContainerDatabaseCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousVmClusterId">PeerAutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerCloudAutonomousVmClusterId">PeerCloudAutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerDbUniqueName">PeerDbUniqueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_db_unique_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.standbyMaintenanceBufferInDays">StandbyMaintenanceBufferInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#standby_maintenance_buffer_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseId"></a>

```csharp
public string AutonomousContainerDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_id}.

---

##### `PeerAutonomousContainerDatabaseDisplayName`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseDisplayName"></a>

```csharp
public string PeerAutonomousContainerDatabaseDisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_display_name}.

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.protectionMode"></a>

```csharp
public string ProtectionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#protection_mode DatabaseAutonomousContainerDatabaseDataguardAssociation#protection_mode}.

---

##### `AutonomousContainerDatabaseDataguardAssociationId`<sup>Optional</sup> <a name="AutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```csharp
public string AutonomousContainerDatabaseDataguardAssociationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_dataguard_association_id}.

---

##### `FastStartFailOverLagLimitInSeconds`<sup>Optional</sup> <a name="FastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.fastStartFailOverLagLimitInSeconds"></a>

```csharp
public double FastStartFailOverLagLimitInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabaseDataguardAssociation#fast_start_fail_over_lag_limit_in_seconds}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAutomaticFailoverEnabled`<sup>Optional</sup> <a name="IsAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.isAutomaticFailoverEnabled"></a>

```csharp
public object IsAutomaticFailoverEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#is_automatic_failover_enabled DatabaseAutonomousContainerDatabaseDataguardAssociation#is_automatic_failover_enabled}.

---

##### `PeerAutonomousContainerDatabaseBackupConfig`<sup>Optional</sup> <a name="PeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```csharp
public DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig PeerAutonomousContainerDatabaseBackupConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a>

peer_autonomous_container_database_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_backup_config DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_backup_config}

---

##### `PeerAutonomousContainerDatabaseCompartmentId`<sup>Optional</sup> <a name="PeerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```csharp
public string PeerAutonomousContainerDatabaseCompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_compartment_id}.

---

##### `PeerAutonomousVmClusterId`<sup>Optional</sup> <a name="PeerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousVmClusterId"></a>

```csharp
public string PeerAutonomousVmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_vm_cluster_id}.

---

##### `PeerCloudAutonomousVmClusterId`<sup>Optional</sup> <a name="PeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerCloudAutonomousVmClusterId"></a>

```csharp
public string PeerCloudAutonomousVmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_cloud_autonomous_vm_cluster_id}.

---

##### `PeerDbUniqueName`<sup>Optional</sup> <a name="PeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerDbUniqueName"></a>

```csharp
public string PeerDbUniqueName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_db_unique_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_db_unique_name}.

---

##### `StandbyMaintenanceBufferInDays`<sup>Optional</sup> <a name="StandbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.standbyMaintenanceBufferInDays"></a>

```csharp
public double StandbyMaintenanceBufferInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#standby_maintenance_buffer_in_days}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.timeouts"></a>

```csharp
public DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#timeouts DatabaseAutonomousContainerDatabaseDataguardAssociation#timeouts}

---

### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig {
    object BackupDestinationDetails = null,
    double RecoveryWindowInDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code>object</code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#recovery_window_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#recovery_window_in_days}. |

---

##### `BackupDestinationDetails`<sup>Optional</sup> <a name="BackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.property.backupDestinationDetails"></a>

```csharp
public object BackupDestinationDetails { get; set; }
```

- *Type:* object

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#backup_destination_details DatabaseAutonomousContainerDatabaseDataguardAssociation#backup_destination_details}

---

##### `RecoveryWindowInDays`<sup>Optional</sup> <a name="RecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.property.recoveryWindowInDays"></a>

```csharp
public double RecoveryWindowInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#recovery_window_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#recovery_window_in_days}.

---

### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails {
    string Type,
    string DbrsPolicyId = null,
    string Id = null,
    string InternetProxy = null,
    string VpcPassword = null,
    string VpcUser = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#type DatabaseAutonomousContainerDatabaseDataguardAssociation#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.dbrsPolicyId">DbrsPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#dbrs_policy_id DatabaseAutonomousContainerDatabaseDataguardAssociation#dbrs_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.internetProxy">InternetProxy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#internet_proxy DatabaseAutonomousContainerDatabaseDataguardAssociation#internet_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcPassword">VpcPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#vpc_password DatabaseAutonomousContainerDatabaseDataguardAssociation#vpc_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcUser">VpcUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#vpc_user DatabaseAutonomousContainerDatabaseDataguardAssociation#vpc_user}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#type DatabaseAutonomousContainerDatabaseDataguardAssociation#type}.

---

##### `DbrsPolicyId`<sup>Optional</sup> <a name="DbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.dbrsPolicyId"></a>

```csharp
public string DbrsPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#dbrs_policy_id DatabaseAutonomousContainerDatabaseDataguardAssociation#dbrs_policy_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternetProxy`<sup>Optional</sup> <a name="InternetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.internetProxy"></a>

```csharp
public string InternetProxy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#internet_proxy DatabaseAutonomousContainerDatabaseDataguardAssociation#internet_proxy}.

---

##### `VpcPassword`<sup>Optional</sup> <a name="VpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcPassword"></a>

```csharp
public string VpcPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#vpc_password DatabaseAutonomousContainerDatabaseDataguardAssociation#vpc_password}.

---

##### `VpcUser`<sup>Optional</sup> <a name="VpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcUser"></a>

```csharp
public string VpcUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#vpc_user DatabaseAutonomousContainerDatabaseDataguardAssociation#vpc_user}.

---

### DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#create DatabaseAutonomousContainerDatabaseDataguardAssociation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#delete DatabaseAutonomousContainerDatabaseDataguardAssociation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#update DatabaseAutonomousContainerDatabaseDataguardAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#create DatabaseAutonomousContainerDatabaseDataguardAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#delete DatabaseAutonomousContainerDatabaseDataguardAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#update DatabaseAutonomousContainerDatabaseDataguardAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get"></a>

```csharp
private DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId">ResetDbrsPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetInternetProxy">ResetInternetProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcPassword">ResetVpcPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser">ResetVpcUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbrsPolicyId` <a name="ResetDbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId"></a>

```csharp
private void ResetDbrsPolicyId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInternetProxy` <a name="ResetInternetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetInternetProxy"></a>

```csharp
private void ResetInternetProxy()
```

##### `ResetVpcPassword` <a name="ResetVpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcPassword"></a>

```csharp
private void ResetVpcPassword()
```

##### `ResetVpcUser` <a name="ResetVpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser"></a>

```csharp
private void ResetVpcUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput">DbrsPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxyInput">InternetProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPasswordInput">VpcPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput">VpcUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">DbrsPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy">InternetProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword">VpcPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">VpcUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbrsPolicyIdInput`<sup>Optional</sup> <a name="DbrsPolicyIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput"></a>

```csharp
public string DbrsPolicyIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InternetProxyInput`<sup>Optional</sup> <a name="InternetProxyInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxyInput"></a>

```csharp
public string InternetProxyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VpcPasswordInput`<sup>Optional</sup> <a name="VpcPasswordInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPasswordInput"></a>

```csharp
public string VpcPasswordInput { get; }
```

- *Type:* string

---

##### `VpcUserInput`<sup>Optional</sup> <a name="VpcUserInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput"></a>

```csharp
public string VpcUserInput { get; }
```

- *Type:* string

---

##### `DbrsPolicyId`<sup>Required</sup> <a name="DbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```csharp
public string DbrsPolicyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternetProxy`<sup>Required</sup> <a name="InternetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```csharp
public string InternetProxy { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VpcPassword`<sup>Required</sup> <a name="VpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```csharp
public string VpcPassword { get; }
```

- *Type:* string

---

##### `VpcUser`<sup>Required</sup> <a name="VpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```csharp
public string VpcUser { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails">PutBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resetBackupDestinationDetails">ResetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resetRecoveryWindowInDays">ResetRecoveryWindowInDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupDestinationDetails` <a name="PutBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails"></a>

```csharp
private void PutBackupDestinationDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* object

---

##### `ResetBackupDestinationDetails` <a name="ResetBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```csharp
private void ResetBackupDestinationDetails()
```

##### `ResetRecoveryWindowInDays` <a name="ResetRecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```csharp
private void ResetRecoveryWindowInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetailsInput">BackupDestinationDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDaysInput">RecoveryWindowInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupDestinationDetails`<sup>Required</sup> <a name="BackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails"></a>

```csharp
public DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList BackupDestinationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a>

---

##### `BackupDestinationDetailsInput`<sup>Optional</sup> <a name="BackupDestinationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```csharp
public object BackupDestinationDetailsInput { get; }
```

- *Type:* object

---

##### `RecoveryWindowInDaysInput`<sup>Optional</sup> <a name="RecoveryWindowInDaysInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```csharp
public double RecoveryWindowInDaysInput { get; }
```

- *Type:* double

---

##### `RecoveryWindowInDays`<sup>Required</sup> <a name="RecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```csharp
public double RecoveryWindowInDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue"></a>

```csharp
public DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a>

---


### DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



