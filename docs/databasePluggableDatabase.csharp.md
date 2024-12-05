# `databasePluggableDatabase` Submodule <a name="`databasePluggableDatabase` Submodule" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePluggableDatabase <a name="DatabasePluggableDatabase" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database oci_database_pluggable_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabase(Construct Scope, string Id, DatabasePluggableDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig">DatabasePluggableDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig">DatabasePluggableDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putPdbCreationTypeDetails">PutPdbCreationTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetContainerDatabaseAdminPassword">ResetContainerDatabaseAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetConvertToRegularTrigger">ResetConvertToRegularTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetKmsKeyVersionId">ResetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetPdbAdminPassword">ResetPdbAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetPdbCreationTypeDetails">ResetPdbCreationTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetRefreshTrigger">ResetRefreshTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetRotateKeyTrigger">ResetRotateKeyTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetShouldCreatePdbBackup">ResetShouldCreatePdbBackup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetShouldPdbAdminAccountBeLocked">ResetShouldPdbAdminAccountBeLocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetTdeWalletPassword">ResetTdeWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPdbCreationTypeDetails` <a name="PutPdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putPdbCreationTypeDetails"></a>

```csharp
private void PutPdbCreationTypeDetails(DatabasePluggableDatabasePdbCreationTypeDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putPdbCreationTypeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabasePluggableDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a>

---

##### `ResetContainerDatabaseAdminPassword` <a name="ResetContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetContainerDatabaseAdminPassword"></a>

```csharp
private void ResetContainerDatabaseAdminPassword()
```

##### `ResetConvertToRegularTrigger` <a name="ResetConvertToRegularTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetConvertToRegularTrigger"></a>

```csharp
private void ResetConvertToRegularTrigger()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyVersionId` <a name="ResetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetKmsKeyVersionId"></a>

```csharp
private void ResetKmsKeyVersionId()
```

##### `ResetPdbAdminPassword` <a name="ResetPdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetPdbAdminPassword"></a>

```csharp
private void ResetPdbAdminPassword()
```

##### `ResetPdbCreationTypeDetails` <a name="ResetPdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetPdbCreationTypeDetails"></a>

```csharp
private void ResetPdbCreationTypeDetails()
```

##### `ResetRefreshTrigger` <a name="ResetRefreshTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetRefreshTrigger"></a>

```csharp
private void ResetRefreshTrigger()
```

##### `ResetRotateKeyTrigger` <a name="ResetRotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetRotateKeyTrigger"></a>

```csharp
private void ResetRotateKeyTrigger()
```

##### `ResetShouldCreatePdbBackup` <a name="ResetShouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetShouldCreatePdbBackup"></a>

```csharp
private void ResetShouldCreatePdbBackup()
```

##### `ResetShouldPdbAdminAccountBeLocked` <a name="ResetShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetShouldPdbAdminAccountBeLocked"></a>

```csharp
private void ResetShouldPdbAdminAccountBeLocked()
```

##### `ResetTdeWalletPassword` <a name="ResetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetTdeWalletPassword"></a>

```csharp
private void ResetTdeWalletPassword()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabasePluggableDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabasePluggableDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabasePluggableDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabasePluggableDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabasePluggableDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabasePluggableDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabasePluggableDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabasePluggableDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePluggableDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList">DatabasePluggableDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.isRestricted">IsRestricted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.openMode">OpenMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbCreationTypeDetails">PdbCreationTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference">DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbNodeLevelDetails">PdbNodeLevelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList">DatabasePluggableDatabasePdbNodeLevelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pluggableDatabaseManagementConfig">PluggableDatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList">DatabasePluggableDatabasePluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshableCloneConfig">RefreshableCloneConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList">DatabasePluggableDatabaseRefreshableCloneConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference">DatabasePluggableDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseAdminPasswordInput">ContainerDatabaseAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseIdInput">ContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.convertToRegularTriggerInput">ConvertToRegularTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.kmsKeyVersionIdInput">KmsKeyVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbAdminPasswordInput">PdbAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbCreationTypeDetailsInput">PdbCreationTypeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbNameInput">PdbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshTriggerInput">RefreshTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.rotateKeyTriggerInput">RotateKeyTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldCreatePdbBackupInput">ShouldCreatePdbBackupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldPdbAdminAccountBeLockedInput">ShouldPdbAdminAccountBeLockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tdeWalletPasswordInput">TdeWalletPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseAdminPassword">ContainerDatabaseAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseId">ContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.convertToRegularTrigger">ConvertToRegularTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbAdminPassword">PdbAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbName">PdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshTrigger">RefreshTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.rotateKeyTrigger">RotateKeyTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldCreatePdbBackup">ShouldCreatePdbBackup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldPdbAdminAccountBeLocked">ShouldPdbAdminAccountBeLocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.connectionStrings"></a>

```csharp
public DatabasePluggableDatabaseConnectionStringsList ConnectionStrings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList">DatabasePluggableDatabaseConnectionStringsList</a>

---

##### `IsRestricted`<sup>Required</sup> <a name="IsRestricted" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.isRestricted"></a>

```csharp
public IResolvable IsRestricted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.openMode"></a>

```csharp
public string OpenMode { get; }
```

- *Type:* string

---

##### `PdbCreationTypeDetails`<sup>Required</sup> <a name="PdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbCreationTypeDetails"></a>

```csharp
public DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference PdbCreationTypeDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference">DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference</a>

---

##### `PdbNodeLevelDetails`<sup>Required</sup> <a name="PdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbNodeLevelDetails"></a>

```csharp
public DatabasePluggableDatabasePdbNodeLevelDetailsList PdbNodeLevelDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList">DatabasePluggableDatabasePdbNodeLevelDetailsList</a>

---

##### `PluggableDatabaseManagementConfig`<sup>Required</sup> <a name="PluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pluggableDatabaseManagementConfig"></a>

```csharp
public DatabasePluggableDatabasePluggableDatabaseManagementConfigList PluggableDatabaseManagementConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList">DatabasePluggableDatabasePluggableDatabaseManagementConfigList</a>

---

##### `RefreshableCloneConfig`<sup>Required</sup> <a name="RefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshableCloneConfig"></a>

```csharp
public DatabasePluggableDatabaseRefreshableCloneConfigList RefreshableCloneConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList">DatabasePluggableDatabaseRefreshableCloneConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeouts"></a>

```csharp
public DatabasePluggableDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference">DatabasePluggableDatabaseTimeoutsOutputReference</a>

---

##### `ContainerDatabaseAdminPasswordInput`<sup>Optional</sup> <a name="ContainerDatabaseAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseAdminPasswordInput"></a>

```csharp
public string ContainerDatabaseAdminPasswordInput { get; }
```

- *Type:* string

---

##### `ContainerDatabaseIdInput`<sup>Optional</sup> <a name="ContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseIdInput"></a>

```csharp
public string ContainerDatabaseIdInput { get; }
```

- *Type:* string

---

##### `ConvertToRegularTriggerInput`<sup>Optional</sup> <a name="ConvertToRegularTriggerInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.convertToRegularTriggerInput"></a>

```csharp
public double ConvertToRegularTriggerInput { get; }
```

- *Type:* double

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyVersionIdInput`<sup>Optional</sup> <a name="KmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.kmsKeyVersionIdInput"></a>

```csharp
public string KmsKeyVersionIdInput { get; }
```

- *Type:* string

---

##### `PdbAdminPasswordInput`<sup>Optional</sup> <a name="PdbAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbAdminPasswordInput"></a>

```csharp
public string PdbAdminPasswordInput { get; }
```

- *Type:* string

---

##### `PdbCreationTypeDetailsInput`<sup>Optional</sup> <a name="PdbCreationTypeDetailsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbCreationTypeDetailsInput"></a>

```csharp
public DatabasePluggableDatabasePdbCreationTypeDetails PdbCreationTypeDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a>

---

##### `PdbNameInput`<sup>Optional</sup> <a name="PdbNameInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbNameInput"></a>

```csharp
public string PdbNameInput { get; }
```

- *Type:* string

---

##### `RefreshTriggerInput`<sup>Optional</sup> <a name="RefreshTriggerInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshTriggerInput"></a>

```csharp
public double RefreshTriggerInput { get; }
```

- *Type:* double

---

##### `RotateKeyTriggerInput`<sup>Optional</sup> <a name="RotateKeyTriggerInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.rotateKeyTriggerInput"></a>

```csharp
public double RotateKeyTriggerInput { get; }
```

- *Type:* double

---

##### `ShouldCreatePdbBackupInput`<sup>Optional</sup> <a name="ShouldCreatePdbBackupInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldCreatePdbBackupInput"></a>

```csharp
public object ShouldCreatePdbBackupInput { get; }
```

- *Type:* object

---

##### `ShouldPdbAdminAccountBeLockedInput`<sup>Optional</sup> <a name="ShouldPdbAdminAccountBeLockedInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldPdbAdminAccountBeLockedInput"></a>

```csharp
public object ShouldPdbAdminAccountBeLockedInput { get; }
```

- *Type:* object

---

##### `TdeWalletPasswordInput`<sup>Optional</sup> <a name="TdeWalletPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tdeWalletPasswordInput"></a>

```csharp
public string TdeWalletPasswordInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ContainerDatabaseAdminPassword`<sup>Required</sup> <a name="ContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseAdminPassword"></a>

```csharp
public string ContainerDatabaseAdminPassword { get; }
```

- *Type:* string

---

##### `ContainerDatabaseId`<sup>Required</sup> <a name="ContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseId"></a>

```csharp
public string ContainerDatabaseId { get; }
```

- *Type:* string

---

##### `ConvertToRegularTrigger`<sup>Required</sup> <a name="ConvertToRegularTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.convertToRegularTrigger"></a>

```csharp
public double ConvertToRegularTrigger { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `PdbAdminPassword`<sup>Required</sup> <a name="PdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbAdminPassword"></a>

```csharp
public string PdbAdminPassword { get; }
```

- *Type:* string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbName"></a>

```csharp
public string PdbName { get; }
```

- *Type:* string

---

##### `RefreshTrigger`<sup>Required</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshTrigger"></a>

```csharp
public double RefreshTrigger { get; }
```

- *Type:* double

---

##### `RotateKeyTrigger`<sup>Required</sup> <a name="RotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.rotateKeyTrigger"></a>

```csharp
public double RotateKeyTrigger { get; }
```

- *Type:* double

---

##### `ShouldCreatePdbBackup`<sup>Required</sup> <a name="ShouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldCreatePdbBackup"></a>

```csharp
public object ShouldCreatePdbBackup { get; }
```

- *Type:* object

---

##### `ShouldPdbAdminAccountBeLocked`<sup>Required</sup> <a name="ShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldPdbAdminAccountBeLocked"></a>

```csharp
public object ShouldPdbAdminAccountBeLocked { get; }
```

- *Type:* object

---

##### `TdeWalletPassword`<sup>Required</sup> <a name="TdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tdeWalletPassword"></a>

```csharp
public string TdeWalletPassword { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePluggableDatabaseConfig <a name="DatabasePluggableDatabaseConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContainerDatabaseId,
    string PdbName,
    string ContainerDatabaseAdminPassword = null,
    double ConvertToRegularTrigger = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string KmsKeyVersionId = null,
    string PdbAdminPassword = null,
    DatabasePluggableDatabasePdbCreationTypeDetails PdbCreationTypeDetails = null,
    double RefreshTrigger = null,
    double RotateKeyTrigger = null,
    object ShouldCreatePdbBackup = null,
    object ShouldPdbAdminAccountBeLocked = null,
    string TdeWalletPassword = null,
    DatabasePluggableDatabaseTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.containerDatabaseId">ContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_id DatabasePluggableDatabase#container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbName">PdbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_name DatabasePluggableDatabase#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.containerDatabaseAdminPassword">ContainerDatabaseAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_admin_password DatabasePluggableDatabase#container_database_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.convertToRegularTrigger">ConvertToRegularTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#convert_to_regular_trigger DatabasePluggableDatabase#convert_to_regular_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#defined_tags DatabasePluggableDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#freeform_tags DatabasePluggableDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#id DatabasePluggableDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#kms_key_version_id DatabasePluggableDatabase#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbAdminPassword">PdbAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_admin_password DatabasePluggableDatabase#pdb_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbCreationTypeDetails">PdbCreationTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a></code> | pdb_creation_type_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.refreshTrigger">RefreshTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#refresh_trigger DatabasePluggableDatabase#refresh_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.rotateKeyTrigger">RotateKeyTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#rotate_key_trigger DatabasePluggableDatabase#rotate_key_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.shouldCreatePdbBackup">ShouldCreatePdbBackup</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_create_pdb_backup DatabasePluggableDatabase#should_create_pdb_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.shouldPdbAdminAccountBeLocked">ShouldPdbAdminAccountBeLocked</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_pdb_admin_account_be_locked DatabasePluggableDatabase#should_pdb_admin_account_be_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#tde_wallet_password DatabasePluggableDatabase#tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContainerDatabaseId`<sup>Required</sup> <a name="ContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.containerDatabaseId"></a>

```csharp
public string ContainerDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_id DatabasePluggableDatabase#container_database_id}.

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbName"></a>

```csharp
public string PdbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_name DatabasePluggableDatabase#pdb_name}.

---

##### `ContainerDatabaseAdminPassword`<sup>Optional</sup> <a name="ContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.containerDatabaseAdminPassword"></a>

```csharp
public string ContainerDatabaseAdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_admin_password DatabasePluggableDatabase#container_database_admin_password}.

---

##### `ConvertToRegularTrigger`<sup>Optional</sup> <a name="ConvertToRegularTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.convertToRegularTrigger"></a>

```csharp
public double ConvertToRegularTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#convert_to_regular_trigger DatabasePluggableDatabase#convert_to_regular_trigger}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#defined_tags DatabasePluggableDatabase#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#freeform_tags DatabasePluggableDatabase#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#id DatabasePluggableDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyVersionId`<sup>Optional</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#kms_key_version_id DatabasePluggableDatabase#kms_key_version_id}.

---

##### `PdbAdminPassword`<sup>Optional</sup> <a name="PdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbAdminPassword"></a>

```csharp
public string PdbAdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_admin_password DatabasePluggableDatabase#pdb_admin_password}.

---

##### `PdbCreationTypeDetails`<sup>Optional</sup> <a name="PdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbCreationTypeDetails"></a>

```csharp
public DatabasePluggableDatabasePdbCreationTypeDetails PdbCreationTypeDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a>

pdb_creation_type_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_creation_type_details DatabasePluggableDatabase#pdb_creation_type_details}

---

##### `RefreshTrigger`<sup>Optional</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.refreshTrigger"></a>

```csharp
public double RefreshTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#refresh_trigger DatabasePluggableDatabase#refresh_trigger}.

---

##### `RotateKeyTrigger`<sup>Optional</sup> <a name="RotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.rotateKeyTrigger"></a>

```csharp
public double RotateKeyTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#rotate_key_trigger DatabasePluggableDatabase#rotate_key_trigger}.

---

##### `ShouldCreatePdbBackup`<sup>Optional</sup> <a name="ShouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.shouldCreatePdbBackup"></a>

```csharp
public object ShouldCreatePdbBackup { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_create_pdb_backup DatabasePluggableDatabase#should_create_pdb_backup}.

---

##### `ShouldPdbAdminAccountBeLocked`<sup>Optional</sup> <a name="ShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.shouldPdbAdminAccountBeLocked"></a>

```csharp
public object ShouldPdbAdminAccountBeLocked { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_pdb_admin_account_be_locked DatabasePluggableDatabase#should_pdb_admin_account_be_locked}.

---

##### `TdeWalletPassword`<sup>Optional</sup> <a name="TdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.tdeWalletPassword"></a>

```csharp
public string TdeWalletPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#tde_wallet_password DatabasePluggableDatabase#tde_wallet_password}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.timeouts"></a>

```csharp
public DatabasePluggableDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#timeouts DatabasePluggableDatabase#timeouts}

---

### DatabasePluggableDatabaseConnectionStrings <a name="DatabasePluggableDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabaseConnectionStrings {

};
```


### DatabasePluggableDatabasePdbCreationTypeDetails <a name="DatabasePluggableDatabasePdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasePdbCreationTypeDetails {
    string CreationType,
    string SourcePluggableDatabaseId,
    string DblinkUsername = null,
    string DblinkUserPassword = null,
    object IsThinClone = null,
    DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails RefreshableCloneDetails = null,
    string SourceContainerDatabaseAdminPassword = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.creationType">CreationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#creation_type DatabasePluggableDatabase#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.sourcePluggableDatabaseId">SourcePluggableDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#source_pluggable_database_id DatabasePluggableDatabase#source_pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.dblinkUsername">DblinkUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#dblink_username DatabasePluggableDatabase#dblink_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.dblinkUserPassword">DblinkUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#dblink_user_password DatabasePluggableDatabase#dblink_user_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.isThinClone">IsThinClone</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#is_thin_clone DatabasePluggableDatabase#is_thin_clone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.refreshableCloneDetails">RefreshableCloneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a></code> | refreshable_clone_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.sourceContainerDatabaseAdminPassword">SourceContainerDatabaseAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#source_container_database_admin_password DatabasePluggableDatabase#source_container_database_admin_password}. |

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.creationType"></a>

```csharp
public string CreationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#creation_type DatabasePluggableDatabase#creation_type}.

---

##### `SourcePluggableDatabaseId`<sup>Required</sup> <a name="SourcePluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.sourcePluggableDatabaseId"></a>

```csharp
public string SourcePluggableDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#source_pluggable_database_id DatabasePluggableDatabase#source_pluggable_database_id}.

---

##### `DblinkUsername`<sup>Optional</sup> <a name="DblinkUsername" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.dblinkUsername"></a>

```csharp
public string DblinkUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#dblink_username DatabasePluggableDatabase#dblink_username}.

---

##### `DblinkUserPassword`<sup>Optional</sup> <a name="DblinkUserPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.dblinkUserPassword"></a>

```csharp
public string DblinkUserPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#dblink_user_password DatabasePluggableDatabase#dblink_user_password}.

---

##### `IsThinClone`<sup>Optional</sup> <a name="IsThinClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.isThinClone"></a>

```csharp
public object IsThinClone { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#is_thin_clone DatabasePluggableDatabase#is_thin_clone}.

---

##### `RefreshableCloneDetails`<sup>Optional</sup> <a name="RefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.refreshableCloneDetails"></a>

```csharp
public DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails RefreshableCloneDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

refreshable_clone_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#refreshable_clone_details DatabasePluggableDatabase#refreshable_clone_details}

---

##### `SourceContainerDatabaseAdminPassword`<sup>Optional</sup> <a name="SourceContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.sourceContainerDatabaseAdminPassword"></a>

```csharp
public string SourceContainerDatabaseAdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#source_container_database_admin_password DatabasePluggableDatabase#source_container_database_admin_password}.

---

### DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails <a name="DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails {
    object IsRefreshableClone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#is_refreshable_clone DatabasePluggableDatabase#is_refreshable_clone}. |

---

##### `IsRefreshableClone`<sup>Optional</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails.property.isRefreshableClone"></a>

```csharp
public object IsRefreshableClone { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#is_refreshable_clone DatabasePluggableDatabase#is_refreshable_clone}.

---

### DatabasePluggableDatabasePdbNodeLevelDetails <a name="DatabasePluggableDatabasePdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasePdbNodeLevelDetails {

};
```


### DatabasePluggableDatabasePluggableDatabaseManagementConfig <a name="DatabasePluggableDatabasePluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasePluggableDatabaseManagementConfig {

};
```


### DatabasePluggableDatabaseRefreshableCloneConfig <a name="DatabasePluggableDatabaseRefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabaseRefreshableCloneConfig {

};
```


### DatabasePluggableDatabaseTimeouts <a name="DatabasePluggableDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabaseTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#create DatabasePluggableDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#delete DatabasePluggableDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#update DatabasePluggableDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#create DatabasePluggableDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#delete DatabasePluggableDatabase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#update DatabasePluggableDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePluggableDatabaseConnectionStringsList <a name="DatabasePluggableDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabaseConnectionStringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.get"></a>

```csharp
private DatabasePluggableDatabaseConnectionStringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabasePluggableDatabaseConnectionStringsOutputReference <a name="DatabasePluggableDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabaseConnectionStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbDefault">PdbDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbIpDefault">PdbIpDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStrings">DatabasePluggableDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```csharp
public StringMap AllConnectionStrings { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `PdbDefault`<sup>Required</sup> <a name="PdbDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbDefault"></a>

```csharp
public string PdbDefault { get; }
```

- *Type:* string

---

##### `PdbIpDefault`<sup>Required</sup> <a name="PdbIpDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbIpDefault"></a>

```csharp
public string PdbIpDefault { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```csharp
public DatabasePluggableDatabaseConnectionStrings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStrings">DatabasePluggableDatabaseConnectionStrings</a>

---


### DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference <a name="DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.putRefreshableCloneDetails">PutRefreshableCloneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetDblinkUsername">ResetDblinkUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetDblinkUserPassword">ResetDblinkUserPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetIsThinClone">ResetIsThinClone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetRefreshableCloneDetails">ResetRefreshableCloneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetSourceContainerDatabaseAdminPassword">ResetSourceContainerDatabaseAdminPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRefreshableCloneDetails` <a name="PutRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.putRefreshableCloneDetails"></a>

```csharp
private void PutRefreshableCloneDetails(DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.putRefreshableCloneDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

---

##### `ResetDblinkUsername` <a name="ResetDblinkUsername" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetDblinkUsername"></a>

```csharp
private void ResetDblinkUsername()
```

##### `ResetDblinkUserPassword` <a name="ResetDblinkUserPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetDblinkUserPassword"></a>

```csharp
private void ResetDblinkUserPassword()
```

##### `ResetIsThinClone` <a name="ResetIsThinClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetIsThinClone"></a>

```csharp
private void ResetIsThinClone()
```

##### `ResetRefreshableCloneDetails` <a name="ResetRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetRefreshableCloneDetails"></a>

```csharp
private void ResetRefreshableCloneDetails()
```

##### `ResetSourceContainerDatabaseAdminPassword` <a name="ResetSourceContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetSourceContainerDatabaseAdminPassword"></a>

```csharp
private void ResetSourceContainerDatabaseAdminPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails">RefreshableCloneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationTypeInput">CreationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsernameInput">DblinkUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPasswordInput">DblinkUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinCloneInput">IsThinCloneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetailsInput">RefreshableCloneDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPasswordInput">SourceContainerDatabaseAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseIdInput">SourcePluggableDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationType">CreationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsername">DblinkUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPassword">DblinkUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinClone">IsThinClone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword">SourceContainerDatabaseAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId">SourcePluggableDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RefreshableCloneDetails`<sup>Required</sup> <a name="RefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails"></a>

```csharp
public DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference RefreshableCloneDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference</a>

---

##### `CreationTypeInput`<sup>Optional</sup> <a name="CreationTypeInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationTypeInput"></a>

```csharp
public string CreationTypeInput { get; }
```

- *Type:* string

---

##### `DblinkUsernameInput`<sup>Optional</sup> <a name="DblinkUsernameInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsernameInput"></a>

```csharp
public string DblinkUsernameInput { get; }
```

- *Type:* string

---

##### `DblinkUserPasswordInput`<sup>Optional</sup> <a name="DblinkUserPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPasswordInput"></a>

```csharp
public string DblinkUserPasswordInput { get; }
```

- *Type:* string

---

##### `IsThinCloneInput`<sup>Optional</sup> <a name="IsThinCloneInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinCloneInput"></a>

```csharp
public object IsThinCloneInput { get; }
```

- *Type:* object

---

##### `RefreshableCloneDetailsInput`<sup>Optional</sup> <a name="RefreshableCloneDetailsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetailsInput"></a>

```csharp
public DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails RefreshableCloneDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

---

##### `SourceContainerDatabaseAdminPasswordInput`<sup>Optional</sup> <a name="SourceContainerDatabaseAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPasswordInput"></a>

```csharp
public string SourceContainerDatabaseAdminPasswordInput { get; }
```

- *Type:* string

---

##### `SourcePluggableDatabaseIdInput`<sup>Optional</sup> <a name="SourcePluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseIdInput"></a>

```csharp
public string SourcePluggableDatabaseIdInput { get; }
```

- *Type:* string

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationType"></a>

```csharp
public string CreationType { get; }
```

- *Type:* string

---

##### `DblinkUsername`<sup>Required</sup> <a name="DblinkUsername" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsername"></a>

```csharp
public string DblinkUsername { get; }
```

- *Type:* string

---

##### `DblinkUserPassword`<sup>Required</sup> <a name="DblinkUserPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPassword"></a>

```csharp
public string DblinkUserPassword { get; }
```

- *Type:* string

---

##### `IsThinClone`<sup>Required</sup> <a name="IsThinClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinClone"></a>

```csharp
public object IsThinClone { get; }
```

- *Type:* object

---

##### `SourceContainerDatabaseAdminPassword`<sup>Required</sup> <a name="SourceContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword"></a>

```csharp
public string SourceContainerDatabaseAdminPassword { get; }
```

- *Type:* string

---

##### `SourcePluggableDatabaseId`<sup>Required</sup> <a name="SourcePluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId"></a>

```csharp
public string SourcePluggableDatabaseId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabasePluggableDatabasePdbCreationTypeDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a>

---


### DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference <a name="DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resetIsRefreshableClone">ResetIsRefreshableClone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsRefreshableClone` <a name="ResetIsRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resetIsRefreshableClone"></a>

```csharp
private void ResetIsRefreshableClone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableCloneInput">IsRefreshableCloneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsRefreshableCloneInput`<sup>Optional</sup> <a name="IsRefreshableCloneInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableCloneInput"></a>

```csharp
public object IsRefreshableCloneInput { get; }
```

- *Type:* object

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone"></a>

```csharp
public object IsRefreshableClone { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

---


### DatabasePluggableDatabasePdbNodeLevelDetailsList <a name="DatabasePluggableDatabasePdbNodeLevelDetailsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasePdbNodeLevelDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.get"></a>

```csharp
private DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference <a name="DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.nodeName">NodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.openMode">OpenMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetails">DatabasePluggableDatabasePdbNodeLevelDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.nodeName"></a>

```csharp
public string NodeName { get; }
```

- *Type:* string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.openMode"></a>

```csharp
public string OpenMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabasePluggableDatabasePdbNodeLevelDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetails">DatabasePluggableDatabasePdbNodeLevelDetails</a>

---


### DatabasePluggableDatabasePluggableDatabaseManagementConfigList <a name="DatabasePluggableDatabasePluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasePluggableDatabaseManagementConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.get"></a>

```csharp
private DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference <a name="DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.managementStatus">ManagementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfig">DatabasePluggableDatabasePluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagementStatus`<sup>Required</sup> <a name="ManagementStatus" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```csharp
public string ManagementStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```csharp
public DatabasePluggableDatabasePluggableDatabaseManagementConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfig">DatabasePluggableDatabasePluggableDatabaseManagementConfig</a>

---


### DatabasePluggableDatabaseRefreshableCloneConfigList <a name="DatabasePluggableDatabaseRefreshableCloneConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabaseRefreshableCloneConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.get"></a>

```csharp
private DatabasePluggableDatabaseRefreshableCloneConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabasePluggableDatabaseRefreshableCloneConfigOutputReference <a name="DatabasePluggableDatabaseRefreshableCloneConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabaseRefreshableCloneConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfig">DatabasePluggableDatabaseRefreshableCloneConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.isRefreshableClone"></a>

```csharp
public IResolvable IsRefreshableClone { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.internalValue"></a>

```csharp
public DatabasePluggableDatabaseRefreshableCloneConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfig">DatabasePluggableDatabaseRefreshableCloneConfig</a>

---


### DatabasePluggableDatabaseTimeoutsOutputReference <a name="DatabasePluggableDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabasePluggableDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



