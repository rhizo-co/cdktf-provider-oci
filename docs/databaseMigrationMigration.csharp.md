# `databaseMigrationMigration` Submodule <a name="`databaseMigrationMigration` Submodule" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationMigration <a name="DatabaseMigrationMigration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration oci_database_migration_migration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigration(Construct Scope, string Id, DatabaseMigrationMigrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig">DatabaseMigrationMigrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig">DatabaseMigrationMigrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters">PutAdvancedParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings">PutAdvisorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails">PutDataTransferMediumDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects">PutExcludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails">PutGgsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails">PutHubDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects">PutIncludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings">PutInitialLoadSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvancedParameters">ResetAdvancedParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvisorSettings">ResetAdvisorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetBulkIncludeExcludeData">ResetBulkIncludeExcludeData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDataTransferMediumDetails">ResetDataTransferMediumDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetExcludeObjects">ResetExcludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetGgsDetails">ResetGgsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetHubDetails">ResetHubDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetIncludeObjects">ResetIncludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetInitialLoadSettings">ResetInitialLoadSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetSourceContainerDatabaseConnectionId">ResetSourceContainerDatabaseConnectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedParameters` <a name="PutAdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters"></a>

```csharp
private void PutAdvancedParameters(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters.parameter.value"></a>

- *Type:* object

---

##### `PutAdvisorSettings` <a name="PutAdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings"></a>

```csharp
private void PutAdvisorSettings(DatabaseMigrationMigrationAdvisorSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

---

##### `PutDataTransferMediumDetails` <a name="PutDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails"></a>

```csharp
private void PutDataTransferMediumDetails(DatabaseMigrationMigrationDataTransferMediumDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

---

##### `PutExcludeObjects` <a name="PutExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects"></a>

```csharp
private void PutExcludeObjects(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects.parameter.value"></a>

- *Type:* object

---

##### `PutGgsDetails` <a name="PutGgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails"></a>

```csharp
private void PutGgsDetails(DatabaseMigrationMigrationGgsDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

---

##### `PutHubDetails` <a name="PutHubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails"></a>

```csharp
private void PutHubDetails(DatabaseMigrationMigrationHubDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

---

##### `PutIncludeObjects` <a name="PutIncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects"></a>

```csharp
private void PutIncludeObjects(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects.parameter.value"></a>

- *Type:* object

---

##### `PutInitialLoadSettings` <a name="PutInitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings"></a>

```csharp
private void PutInitialLoadSettings(DatabaseMigrationMigrationInitialLoadSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseMigrationMigrationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>

---

##### `ResetAdvancedParameters` <a name="ResetAdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvancedParameters"></a>

```csharp
private void ResetAdvancedParameters()
```

##### `ResetAdvisorSettings` <a name="ResetAdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvisorSettings"></a>

```csharp
private void ResetAdvisorSettings()
```

##### `ResetBulkIncludeExcludeData` <a name="ResetBulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetBulkIncludeExcludeData"></a>

```csharp
private void ResetBulkIncludeExcludeData()
```

##### `ResetDataTransferMediumDetails` <a name="ResetDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDataTransferMediumDetails"></a>

```csharp
private void ResetDataTransferMediumDetails()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetExcludeObjects` <a name="ResetExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetExcludeObjects"></a>

```csharp
private void ResetExcludeObjects()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetGgsDetails` <a name="ResetGgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetGgsDetails"></a>

```csharp
private void ResetGgsDetails()
```

##### `ResetHubDetails` <a name="ResetHubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetHubDetails"></a>

```csharp
private void ResetHubDetails()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeObjects` <a name="ResetIncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetIncludeObjects"></a>

```csharp
private void ResetIncludeObjects()
```

##### `ResetInitialLoadSettings` <a name="ResetInitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetInitialLoadSettings"></a>

```csharp
private void ResetInitialLoadSettings()
```

##### `ResetSourceContainerDatabaseConnectionId` <a name="ResetSourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetSourceContainerDatabaseConnectionId"></a>

```csharp
private void ResetSourceContainerDatabaseConnectionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMigrationMigration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseMigrationMigration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseMigrationMigration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseMigrationMigration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseMigrationMigration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseMigrationMigration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseMigrationMigration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseMigrationMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParameters">AdvancedParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList">DatabaseMigrationMigrationAdvancedParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettings">AdvisorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference">DatabaseMigrationMigrationAdvisorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetails">DataTransferMediumDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjects">ExcludeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList">DatabaseMigrationMigrationExcludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.executingJobId">ExecutingJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetails">GgsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference">DatabaseMigrationMigrationGgsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetails">HubDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference">DatabaseMigrationMigrationHubDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjects">IncludeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList">DatabaseMigrationMigrationIncludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettings">InitialLoadSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeLastMigration">TimeLastMigration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference">DatabaseMigrationMigrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.waitAfter">WaitAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParametersInput">AdvancedParametersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettingsInput">AdvisorSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeDataInput">BulkIncludeExcludeDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombinationInput">DatabaseCombinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetailsInput">DataTransferMediumDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjectsInput">ExcludeObjectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetailsInput">GgsDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetailsInput">HubDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjectsInput">IncludeObjectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettingsInput">InitialLoadSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionIdInput">SourceContainerDatabaseConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionIdInput">SourceDatabaseConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionIdInput">TargetDatabaseConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeData">BulkIncludeExcludeData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombination">DatabaseCombination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionId">SourceContainerDatabaseConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionId">SourceDatabaseConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionId">TargetDatabaseConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvancedParameters`<sup>Required</sup> <a name="AdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParameters"></a>

```csharp
public DatabaseMigrationMigrationAdvancedParametersList AdvancedParameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList">DatabaseMigrationMigrationAdvancedParametersList</a>

---

##### `AdvisorSettings`<sup>Required</sup> <a name="AdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettings"></a>

```csharp
public DatabaseMigrationMigrationAdvisorSettingsOutputReference AdvisorSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference">DatabaseMigrationMigrationAdvisorSettingsOutputReference</a>

---

##### `DataTransferMediumDetails`<sup>Required</sup> <a name="DataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetails"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference DataTransferMediumDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference</a>

---

##### `ExcludeObjects`<sup>Required</sup> <a name="ExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjects"></a>

```csharp
public DatabaseMigrationMigrationExcludeObjectsList ExcludeObjects { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList">DatabaseMigrationMigrationExcludeObjectsList</a>

---

##### `ExecutingJobId`<sup>Required</sup> <a name="ExecutingJobId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.executingJobId"></a>

```csharp
public string ExecutingJobId { get; }
```

- *Type:* string

---

##### `GgsDetails`<sup>Required</sup> <a name="GgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetails"></a>

```csharp
public DatabaseMigrationMigrationGgsDetailsOutputReference GgsDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference">DatabaseMigrationMigrationGgsDetailsOutputReference</a>

---

##### `HubDetails`<sup>Required</sup> <a name="HubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetails"></a>

```csharp
public DatabaseMigrationMigrationHubDetailsOutputReference HubDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference">DatabaseMigrationMigrationHubDetailsOutputReference</a>

---

##### `IncludeObjects`<sup>Required</sup> <a name="IncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjects"></a>

```csharp
public DatabaseMigrationMigrationIncludeObjectsList IncludeObjects { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList">DatabaseMigrationMigrationIncludeObjectsList</a>

---

##### `InitialLoadSettings`<sup>Required</sup> <a name="InitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettings"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsOutputReference InitialLoadSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastMigration`<sup>Required</sup> <a name="TimeLastMigration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeLastMigration"></a>

```csharp
public string TimeLastMigration { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeouts"></a>

```csharp
public DatabaseMigrationMigrationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference">DatabaseMigrationMigrationTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `WaitAfter`<sup>Required</sup> <a name="WaitAfter" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.waitAfter"></a>

```csharp
public string WaitAfter { get; }
```

- *Type:* string

---

##### `AdvancedParametersInput`<sup>Optional</sup> <a name="AdvancedParametersInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParametersInput"></a>

```csharp
public object AdvancedParametersInput { get; }
```

- *Type:* object

---

##### `AdvisorSettingsInput`<sup>Optional</sup> <a name="AdvisorSettingsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettingsInput"></a>

```csharp
public DatabaseMigrationMigrationAdvisorSettings AdvisorSettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

---

##### `BulkIncludeExcludeDataInput`<sup>Optional</sup> <a name="BulkIncludeExcludeDataInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeDataInput"></a>

```csharp
public string BulkIncludeExcludeDataInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DatabaseCombinationInput`<sup>Optional</sup> <a name="DatabaseCombinationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombinationInput"></a>

```csharp
public string DatabaseCombinationInput { get; }
```

- *Type:* string

---

##### `DataTransferMediumDetailsInput`<sup>Optional</sup> <a name="DataTransferMediumDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetailsInput"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetails DataTransferMediumDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExcludeObjectsInput`<sup>Optional</sup> <a name="ExcludeObjectsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjectsInput"></a>

```csharp
public object ExcludeObjectsInput { get; }
```

- *Type:* object

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GgsDetailsInput`<sup>Optional</sup> <a name="GgsDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetailsInput"></a>

```csharp
public DatabaseMigrationMigrationGgsDetails GgsDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

---

##### `HubDetailsInput`<sup>Optional</sup> <a name="HubDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetailsInput"></a>

```csharp
public DatabaseMigrationMigrationHubDetails HubDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeObjectsInput`<sup>Optional</sup> <a name="IncludeObjectsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjectsInput"></a>

```csharp
public object IncludeObjectsInput { get; }
```

- *Type:* object

---

##### `InitialLoadSettingsInput`<sup>Optional</sup> <a name="InitialLoadSettingsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettingsInput"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettings InitialLoadSettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

---

##### `SourceContainerDatabaseConnectionIdInput`<sup>Optional</sup> <a name="SourceContainerDatabaseConnectionIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionIdInput"></a>

```csharp
public string SourceContainerDatabaseConnectionIdInput { get; }
```

- *Type:* string

---

##### `SourceDatabaseConnectionIdInput`<sup>Optional</sup> <a name="SourceDatabaseConnectionIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionIdInput"></a>

```csharp
public string SourceDatabaseConnectionIdInput { get; }
```

- *Type:* string

---

##### `TargetDatabaseConnectionIdInput`<sup>Optional</sup> <a name="TargetDatabaseConnectionIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionIdInput"></a>

```csharp
public string TargetDatabaseConnectionIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `BulkIncludeExcludeData`<sup>Required</sup> <a name="BulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeData"></a>

```csharp
public string BulkIncludeExcludeData { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabaseCombination`<sup>Required</sup> <a name="DatabaseCombination" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombination"></a>

```csharp
public string DatabaseCombination { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SourceContainerDatabaseConnectionId`<sup>Required</sup> <a name="SourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionId"></a>

```csharp
public string SourceContainerDatabaseConnectionId { get; }
```

- *Type:* string

---

##### `SourceDatabaseConnectionId`<sup>Required</sup> <a name="SourceDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionId"></a>

```csharp
public string SourceDatabaseConnectionId { get; }
```

- *Type:* string

---

##### `TargetDatabaseConnectionId`<sup>Required</sup> <a name="TargetDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionId"></a>

```csharp
public string TargetDatabaseConnectionId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationMigrationAdvancedParameters <a name="DatabaseMigrationMigrationAdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationAdvancedParameters {
    string DataType = null,
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.dataType">DataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_type DatabaseMigrationMigration#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#value DatabaseMigrationMigration#value}. |

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_type DatabaseMigrationMigration#data_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#value DatabaseMigrationMigration#value}.

---

### DatabaseMigrationMigrationAdvisorSettings <a name="DatabaseMigrationMigrationAdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationAdvisorSettings {
    object IsIgnoreErrors = null,
    object IsSkipAdvisor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isIgnoreErrors">IsIgnoreErrors</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_errors DatabaseMigrationMigration#is_ignore_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isSkipAdvisor">IsSkipAdvisor</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_skip_advisor DatabaseMigrationMigration#is_skip_advisor}. |

---

##### `IsIgnoreErrors`<sup>Optional</sup> <a name="IsIgnoreErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isIgnoreErrors"></a>

```csharp
public object IsIgnoreErrors { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_errors DatabaseMigrationMigration#is_ignore_errors}.

---

##### `IsSkipAdvisor`<sup>Optional</sup> <a name="IsSkipAdvisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isSkipAdvisor"></a>

```csharp
public object IsSkipAdvisor { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_skip_advisor DatabaseMigrationMigration#is_skip_advisor}.

---

### DatabaseMigrationMigrationConfig <a name="DatabaseMigrationMigrationConfig" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DatabaseCombination,
    string SourceDatabaseConnectionId,
    string TargetDatabaseConnectionId,
    string Type,
    object AdvancedParameters = null,
    DatabaseMigrationMigrationAdvisorSettings AdvisorSettings = null,
    string BulkIncludeExcludeData = null,
    DatabaseMigrationMigrationDataTransferMediumDetails DataTransferMediumDetails = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    object ExcludeObjects = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    DatabaseMigrationMigrationGgsDetails GgsDetails = null,
    DatabaseMigrationMigrationHubDetails HubDetails = null,
    string Id = null,
    object IncludeObjects = null,
    DatabaseMigrationMigrationInitialLoadSettings InitialLoadSettings = null,
    string SourceContainerDatabaseConnectionId = null,
    DatabaseMigrationMigrationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.databaseCombination">DatabaseCombination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceDatabaseConnectionId">SourceDatabaseConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.targetDatabaseConnectionId">TargetDatabaseConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advancedParameters">AdvancedParameters</a></code> | <code>object</code> | advanced_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advisorSettings">AdvisorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | advisor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.bulkIncludeExcludeData">BulkIncludeExcludeData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dataTransferMediumDetails">DataTransferMediumDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | data_transfer_medium_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.excludeObjects">ExcludeObjects</a></code> | <code>object</code> | exclude_objects block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.ggsDetails">GgsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | ggs_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.hubDetails">HubDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | hub_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.includeObjects">IncludeObjects</a></code> | <code>object</code> | include_objects block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.initialLoadSettings">InitialLoadSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | initial_load_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceContainerDatabaseConnectionId">SourceContainerDatabaseConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}.

---

##### `DatabaseCombination`<sup>Required</sup> <a name="DatabaseCombination" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.databaseCombination"></a>

```csharp
public string DatabaseCombination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}.

---

##### `SourceDatabaseConnectionId`<sup>Required</sup> <a name="SourceDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceDatabaseConnectionId"></a>

```csharp
public string SourceDatabaseConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}.

---

##### `TargetDatabaseConnectionId`<sup>Required</sup> <a name="TargetDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.targetDatabaseConnectionId"></a>

```csharp
public string TargetDatabaseConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

##### `AdvancedParameters`<sup>Optional</sup> <a name="AdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advancedParameters"></a>

```csharp
public object AdvancedParameters { get; set; }
```

- *Type:* object

advanced_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#advanced_parameters DatabaseMigrationMigration#advanced_parameters}

---

##### `AdvisorSettings`<sup>Optional</sup> <a name="AdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advisorSettings"></a>

```csharp
public DatabaseMigrationMigrationAdvisorSettings AdvisorSettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

advisor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#advisor_settings DatabaseMigrationMigration#advisor_settings}

---

##### `BulkIncludeExcludeData`<sup>Optional</sup> <a name="BulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.bulkIncludeExcludeData"></a>

```csharp
public string BulkIncludeExcludeData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}.

---

##### `DataTransferMediumDetails`<sup>Optional</sup> <a name="DataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dataTransferMediumDetails"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetails DataTransferMediumDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

data_transfer_medium_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_transfer_medium_details DatabaseMigrationMigration#data_transfer_medium_details}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}.

---

##### `ExcludeObjects`<sup>Optional</sup> <a name="ExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.excludeObjects"></a>

```csharp
public object ExcludeObjects { get; set; }
```

- *Type:* object

exclude_objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_objects DatabaseMigrationMigration#exclude_objects}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}.

---

##### `GgsDetails`<sup>Optional</sup> <a name="GgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.ggsDetails"></a>

```csharp
public DatabaseMigrationMigrationGgsDetails GgsDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

ggs_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#ggs_details DatabaseMigrationMigration#ggs_details}

---

##### `HubDetails`<sup>Optional</sup> <a name="HubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.hubDetails"></a>

```csharp
public DatabaseMigrationMigrationHubDetails HubDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

hub_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#hub_details DatabaseMigrationMigration#hub_details}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeObjects`<sup>Optional</sup> <a name="IncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.includeObjects"></a>

```csharp
public object IncludeObjects { get; set; }
```

- *Type:* object

include_objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#include_objects DatabaseMigrationMigration#include_objects}

---

##### `InitialLoadSettings`<sup>Optional</sup> <a name="InitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.initialLoadSettings"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettings InitialLoadSettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

initial_load_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#initial_load_settings DatabaseMigrationMigration#initial_load_settings}

---

##### `SourceContainerDatabaseConnectionId`<sup>Optional</sup> <a name="SourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceContainerDatabaseConnectionId"></a>

```csharp
public string SourceContainerDatabaseConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.timeouts"></a>

```csharp
public DatabaseMigrationMigrationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#timeouts DatabaseMigrationMigration#timeouts}

---

### DatabaseMigrationMigrationDataTransferMediumDetails <a name="DatabaseMigrationMigrationDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationDataTransferMediumDetails {
    string Type,
    string AccessKeyId = null,
    string Name = null,
    DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket ObjectStorageBucket = null,
    string Region = null,
    string SecretAccessKey = null,
    string SharedStorageMountTargetId = null,
    DatabaseMigrationMigrationDataTransferMediumDetailsSource Source = null,
    DatabaseMigrationMigrationDataTransferMediumDetailsTarget Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#access_key_id DatabaseMigrationMigration#access_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.objectStorageBucket">ObjectStorageBucket</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | object_storage_bucket block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#region DatabaseMigrationMigration#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#secret_access_key DatabaseMigrationMigration#secret_access_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.sharedStorageMountTargetId">SharedStorageMountTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#shared_storage_mount_target_id DatabaseMigrationMigration#shared_storage_mount_target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | target block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#access_key_id DatabaseMigrationMigration#access_key_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `ObjectStorageBucket`<sup>Optional</sup> <a name="ObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.objectStorageBucket"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket ObjectStorageBucket { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

object_storage_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object_storage_bucket DatabaseMigrationMigration#object_storage_bucket}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#region DatabaseMigrationMigration#region}.

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#secret_access_key DatabaseMigrationMigration#secret_access_key}.

---

##### `SharedStorageMountTargetId`<sup>Optional</sup> <a name="SharedStorageMountTargetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.sharedStorageMountTargetId"></a>

```csharp
public string SharedStorageMountTargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#shared_storage_mount_target_id DatabaseMigrationMigration#shared_storage_mount_target_id}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.source"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetailsSource Source { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source DatabaseMigrationMigration#source}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.target"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetailsTarget Target { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target DatabaseMigrationMigration#target}

---

### DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket <a name="DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket {
    string Bucket = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}.

---

### DatabaseMigrationMigrationDataTransferMediumDetailsSource <a name="DatabaseMigrationMigrationDataTransferMediumDetailsSource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationDataTransferMediumDetailsSource {
    string Kind,
    string OciHome = null,
    string WalletLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.ociHome">OciHome</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.walletLocation">WalletLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}.

---

##### `OciHome`<sup>Optional</sup> <a name="OciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.ociHome"></a>

```csharp
public string OciHome { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}.

---

##### `WalletLocation`<sup>Optional</sup> <a name="WalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.walletLocation"></a>

```csharp
public string WalletLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}.

---

### DatabaseMigrationMigrationDataTransferMediumDetailsTarget <a name="DatabaseMigrationMigrationDataTransferMediumDetailsTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationDataTransferMediumDetailsTarget {
    string Kind,
    string OciHome = null,
    string WalletLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.ociHome">OciHome</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.walletLocation">WalletLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}.

---

##### `OciHome`<sup>Optional</sup> <a name="OciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.ociHome"></a>

```csharp
public string OciHome { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}.

---

##### `WalletLocation`<sup>Optional</sup> <a name="WalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.walletLocation"></a>

```csharp
public string WalletLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}.

---

### DatabaseMigrationMigrationExcludeObjects <a name="DatabaseMigrationMigrationExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationExcludeObjects {
    string Object,
    object IsOmitExcludedTableFromReplication = null,
    string Owner = null,
    string Schema = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.isOmitExcludedTableFromReplication">IsOmitExcludedTableFromReplication</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.schema">Schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}.

---

##### `IsOmitExcludedTableFromReplication`<sup>Optional</sup> <a name="IsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.isOmitExcludedTableFromReplication"></a>

```csharp
public object IsOmitExcludedTableFromReplication { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationGgsDetails <a name="DatabaseMigrationMigrationGgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationGgsDetails {
    double AcceptableLag = null,
    DatabaseMigrationMigrationGgsDetailsExtract Extract = null,
    DatabaseMigrationMigrationGgsDetailsReplicat Replicat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.acceptableLag">AcceptableLag</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.extract">Extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | extract block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.replicat">Replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | replicat block. |

---

##### `AcceptableLag`<sup>Optional</sup> <a name="AcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.acceptableLag"></a>

```csharp
public double AcceptableLag { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}.

---

##### `Extract`<sup>Optional</sup> <a name="Extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.extract"></a>

```csharp
public DatabaseMigrationMigrationGgsDetailsExtract Extract { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}

---

##### `Replicat`<sup>Optional</sup> <a name="Replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.replicat"></a>

```csharp
public DatabaseMigrationMigrationGgsDetailsReplicat Replicat { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

replicat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}

---

### DatabaseMigrationMigrationGgsDetailsExtract <a name="DatabaseMigrationMigrationGgsDetailsExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationGgsDetailsExtract {
    double LongTransDuration = null,
    string PerformanceProfile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.longTransDuration">LongTransDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.performanceProfile">PerformanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `LongTransDuration`<sup>Optional</sup> <a name="LongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.longTransDuration"></a>

```csharp
public double LongTransDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}.

---

##### `PerformanceProfile`<sup>Optional</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.performanceProfile"></a>

```csharp
public string PerformanceProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationGgsDetailsGgsDeployment <a name="DatabaseMigrationMigrationGgsDetailsGgsDeployment" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationGgsDetailsGgsDeployment {

};
```


### DatabaseMigrationMigrationGgsDetailsReplicat <a name="DatabaseMigrationMigrationGgsDetailsReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationGgsDetailsReplicat {
    string PerformanceProfile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.property.performanceProfile">PerformanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `PerformanceProfile`<sup>Optional</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.property.performanceProfile"></a>

```csharp
public string PerformanceProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetails <a name="DatabaseMigrationMigrationHubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationHubDetails {
    string KeyId,
    DatabaseMigrationMigrationHubDetailsRestAdminCredentials RestAdminCredentials,
    string Url,
    string VaultId,
    double AcceptableLag = null,
    string ComputeId = null,
    DatabaseMigrationMigrationHubDetailsExtract Extract = null,
    DatabaseMigrationMigrationHubDetailsReplicat Replicat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#key_id DatabaseMigrationMigration#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.restAdminCredentials">RestAdminCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | rest_admin_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#url DatabaseMigrationMigration#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#vault_id DatabaseMigrationMigration#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.acceptableLag">AcceptableLag</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.computeId">ComputeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compute_id DatabaseMigrationMigration#compute_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.extract">Extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | extract block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.replicat">Replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | replicat block. |

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#key_id DatabaseMigrationMigration#key_id}.

---

##### `RestAdminCredentials`<sup>Required</sup> <a name="RestAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.restAdminCredentials"></a>

```csharp
public DatabaseMigrationMigrationHubDetailsRestAdminCredentials RestAdminCredentials { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

rest_admin_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#rest_admin_credentials DatabaseMigrationMigration#rest_admin_credentials}

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#url DatabaseMigrationMigration#url}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#vault_id DatabaseMigrationMigration#vault_id}.

---

##### `AcceptableLag`<sup>Optional</sup> <a name="AcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.acceptableLag"></a>

```csharp
public double AcceptableLag { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}.

---

##### `ComputeId`<sup>Optional</sup> <a name="ComputeId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.computeId"></a>

```csharp
public string ComputeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compute_id DatabaseMigrationMigration#compute_id}.

---

##### `Extract`<sup>Optional</sup> <a name="Extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.extract"></a>

```csharp
public DatabaseMigrationMigrationHubDetailsExtract Extract { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}

---

##### `Replicat`<sup>Optional</sup> <a name="Replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.replicat"></a>

```csharp
public DatabaseMigrationMigrationHubDetailsReplicat Replicat { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

replicat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}

---

### DatabaseMigrationMigrationHubDetailsExtract <a name="DatabaseMigrationMigrationHubDetailsExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationHubDetailsExtract {
    double LongTransDuration = null,
    string PerformanceProfile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.longTransDuration">LongTransDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.performanceProfile">PerformanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `LongTransDuration`<sup>Optional</sup> <a name="LongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.longTransDuration"></a>

```csharp
public double LongTransDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}.

---

##### `PerformanceProfile`<sup>Optional</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.performanceProfile"></a>

```csharp
public string PerformanceProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetailsReplicat <a name="DatabaseMigrationMigrationHubDetailsReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationHubDetailsReplicat {
    string PerformanceProfile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.property.performanceProfile">PerformanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `PerformanceProfile`<sup>Optional</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.property.performanceProfile"></a>

```csharp
public string PerformanceProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetailsRestAdminCredentials <a name="DatabaseMigrationMigrationHubDetailsRestAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationHubDetailsRestAdminCredentials {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}.

---

### DatabaseMigrationMigrationIncludeObjects <a name="DatabaseMigrationMigrationIncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationIncludeObjects {
    string Object,
    object IsOmitExcludedTableFromReplication = null,
    string Owner = null,
    string Schema = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.isOmitExcludedTableFromReplication">IsOmitExcludedTableFromReplication</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.schema">Schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}.

---

##### `IsOmitExcludedTableFromReplication`<sup>Optional</sup> <a name="IsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.isOmitExcludedTableFromReplication"></a>

```csharp
public object IsOmitExcludedTableFromReplication { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationInitialLoadSettings <a name="DatabaseMigrationMigrationInitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationInitialLoadSettings {
    string JobMode,
    string[] Compatibility = null,
    DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters DataPumpParameters = null,
    DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject ExportDirectoryObject = null,
    string HandleGrantErrors = null,
    DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject ImportDirectoryObject = null,
    object IsConsistent = null,
    object IsIgnoreExistingObjects = null,
    object IsTzUtc = null,
    object MetadataRemaps = null,
    string PrimaryKeyCompatibility = null,
    DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails TablespaceDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.jobMode">JobMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#job_mode DatabaseMigrationMigration#job_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.compatibility">Compatibility</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compatibility DatabaseMigrationMigration#compatibility}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.dataPumpParameters">DataPumpParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | data_pump_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.exportDirectoryObject">ExportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | export_directory_object block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.handleGrantErrors">HandleGrantErrors</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#handle_grant_errors DatabaseMigrationMigration#handle_grant_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.importDirectoryObject">ImportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | import_directory_object block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isConsistent">IsConsistent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_consistent DatabaseMigrationMigration#is_consistent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isIgnoreExistingObjects">IsIgnoreExistingObjects</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_existing_objects DatabaseMigrationMigration#is_ignore_existing_objects}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isTzUtc">IsTzUtc</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_tz_utc DatabaseMigrationMigration#is_tz_utc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.metadataRemaps">MetadataRemaps</a></code> | <code>object</code> | metadata_remaps block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.primaryKeyCompatibility">PrimaryKeyCompatibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#primary_key_compatibility DatabaseMigrationMigration#primary_key_compatibility}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.tablespaceDetails">TablespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | tablespace_details block. |

---

##### `JobMode`<sup>Required</sup> <a name="JobMode" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.jobMode"></a>

```csharp
public string JobMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#job_mode DatabaseMigrationMigration#job_mode}.

---

##### `Compatibility`<sup>Optional</sup> <a name="Compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.compatibility"></a>

```csharp
public string[] Compatibility { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compatibility DatabaseMigrationMigration#compatibility}.

---

##### `DataPumpParameters`<sup>Optional</sup> <a name="DataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.dataPumpParameters"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters DataPumpParameters { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

data_pump_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_pump_parameters DatabaseMigrationMigration#data_pump_parameters}

---

##### `ExportDirectoryObject`<sup>Optional</sup> <a name="ExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.exportDirectoryObject"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject ExportDirectoryObject { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

export_directory_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_directory_object DatabaseMigrationMigration#export_directory_object}

---

##### `HandleGrantErrors`<sup>Optional</sup> <a name="HandleGrantErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.handleGrantErrors"></a>

```csharp
public string HandleGrantErrors { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#handle_grant_errors DatabaseMigrationMigration#handle_grant_errors}.

---

##### `ImportDirectoryObject`<sup>Optional</sup> <a name="ImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.importDirectoryObject"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject ImportDirectoryObject { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

import_directory_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_directory_object DatabaseMigrationMigration#import_directory_object}

---

##### `IsConsistent`<sup>Optional</sup> <a name="IsConsistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isConsistent"></a>

```csharp
public object IsConsistent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_consistent DatabaseMigrationMigration#is_consistent}.

---

##### `IsIgnoreExistingObjects`<sup>Optional</sup> <a name="IsIgnoreExistingObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isIgnoreExistingObjects"></a>

```csharp
public object IsIgnoreExistingObjects { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_existing_objects DatabaseMigrationMigration#is_ignore_existing_objects}.

---

##### `IsTzUtc`<sup>Optional</sup> <a name="IsTzUtc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isTzUtc"></a>

```csharp
public object IsTzUtc { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_tz_utc DatabaseMigrationMigration#is_tz_utc}.

---

##### `MetadataRemaps`<sup>Optional</sup> <a name="MetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.metadataRemaps"></a>

```csharp
public object MetadataRemaps { get; set; }
```

- *Type:* object

metadata_remaps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#metadata_remaps DatabaseMigrationMigration#metadata_remaps}

---

##### `PrimaryKeyCompatibility`<sup>Optional</sup> <a name="PrimaryKeyCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.primaryKeyCompatibility"></a>

```csharp
public string PrimaryKeyCompatibility { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#primary_key_compatibility DatabaseMigrationMigration#primary_key_compatibility}.

---

##### `TablespaceDetails`<sup>Optional</sup> <a name="TablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.tablespaceDetails"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails TablespaceDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

tablespace_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#tablespace_details DatabaseMigrationMigration#tablespace_details}

---

### DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters <a name="DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters {
    string Estimate = null,
    string[] ExcludeParameters = null,
    double ExportParallelismDegree = null,
    double ImportParallelismDegree = null,
    object IsCluster = null,
    string TableExistsAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.estimate">Estimate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#estimate DatabaseMigrationMigration#estimate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.excludeParameters">ExcludeParameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_parameters DatabaseMigrationMigration#exclude_parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.exportParallelismDegree">ExportParallelismDegree</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_parallelism_degree DatabaseMigrationMigration#export_parallelism_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.importParallelismDegree">ImportParallelismDegree</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_parallelism_degree DatabaseMigrationMigration#import_parallelism_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.isCluster">IsCluster</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_cluster DatabaseMigrationMigration#is_cluster}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.tableExistsAction">TableExistsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#table_exists_action DatabaseMigrationMigration#table_exists_action}. |

---

##### `Estimate`<sup>Optional</sup> <a name="Estimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.estimate"></a>

```csharp
public string Estimate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#estimate DatabaseMigrationMigration#estimate}.

---

##### `ExcludeParameters`<sup>Optional</sup> <a name="ExcludeParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.excludeParameters"></a>

```csharp
public string[] ExcludeParameters { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_parameters DatabaseMigrationMigration#exclude_parameters}.

---

##### `ExportParallelismDegree`<sup>Optional</sup> <a name="ExportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.exportParallelismDegree"></a>

```csharp
public double ExportParallelismDegree { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_parallelism_degree DatabaseMigrationMigration#export_parallelism_degree}.

---

##### `ImportParallelismDegree`<sup>Optional</sup> <a name="ImportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.importParallelismDegree"></a>

```csharp
public double ImportParallelismDegree { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_parallelism_degree DatabaseMigrationMigration#import_parallelism_degree}.

---

##### `IsCluster`<sup>Optional</sup> <a name="IsCluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.isCluster"></a>

```csharp
public object IsCluster { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_cluster DatabaseMigrationMigration#is_cluster}.

---

##### `TableExistsAction`<sup>Optional</sup> <a name="TableExistsAction" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.tableExistsAction"></a>

```csharp
public string TableExistsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#table_exists_action DatabaseMigrationMigration#table_exists_action}.

---

### DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject <a name="DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject {
    string Name = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}.

---

### DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject <a name="DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject {
    string Name = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}.

---

### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps {
    string NewValue = null,
    string OldValue = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.newValue">NewValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#new_value DatabaseMigrationMigration#new_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.oldValue">OldValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#old_value DatabaseMigrationMigration#old_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `NewValue`<sup>Optional</sup> <a name="NewValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.newValue"></a>

```csharp
public string NewValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#new_value DatabaseMigrationMigration#new_value}.

---

##### `OldValue`<sup>Optional</sup> <a name="OldValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.oldValue"></a>

```csharp
public string OldValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#old_value DatabaseMigrationMigration#old_value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails <a name="DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails {
    string TargetType,
    string BlockSizeInKbs = null,
    double ExtendSizeInMbs = null,
    object IsAutoCreate = null,
    object IsBigFile = null,
    string RemapTarget = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.targetType">TargetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_type DatabaseMigrationMigration#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.blockSizeInKbs">BlockSizeInKbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#block_size_in_kbs DatabaseMigrationMigration#block_size_in_kbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.extendSizeInMbs">ExtendSizeInMbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extend_size_in_mbs DatabaseMigrationMigration#extend_size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isAutoCreate">IsAutoCreate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_auto_create DatabaseMigrationMigration#is_auto_create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isBigFile">IsBigFile</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_big_file DatabaseMigrationMigration#is_big_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.remapTarget">RemapTarget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#remap_target DatabaseMigrationMigration#remap_target}. |

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.targetType"></a>

```csharp
public string TargetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_type DatabaseMigrationMigration#target_type}.

---

##### `BlockSizeInKbs`<sup>Optional</sup> <a name="BlockSizeInKbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.blockSizeInKbs"></a>

```csharp
public string BlockSizeInKbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#block_size_in_kbs DatabaseMigrationMigration#block_size_in_kbs}.

---

##### `ExtendSizeInMbs`<sup>Optional</sup> <a name="ExtendSizeInMbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.extendSizeInMbs"></a>

```csharp
public double ExtendSizeInMbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extend_size_in_mbs DatabaseMigrationMigration#extend_size_in_mbs}.

---

##### `IsAutoCreate`<sup>Optional</sup> <a name="IsAutoCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isAutoCreate"></a>

```csharp
public object IsAutoCreate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_auto_create DatabaseMigrationMigration#is_auto_create}.

---

##### `IsBigFile`<sup>Optional</sup> <a name="IsBigFile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isBigFile"></a>

```csharp
public object IsBigFile { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_big_file DatabaseMigrationMigration#is_big_file}.

---

##### `RemapTarget`<sup>Optional</sup> <a name="RemapTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.remapTarget"></a>

```csharp
public string RemapTarget { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#remap_target DatabaseMigrationMigration#remap_target}.

---

### DatabaseMigrationMigrationTimeouts <a name="DatabaseMigrationMigrationTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#create DatabaseMigrationMigration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#delete DatabaseMigrationMigration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#update DatabaseMigrationMigration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#create DatabaseMigrationMigration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#delete DatabaseMigrationMigration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#update DatabaseMigrationMigration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationMigrationAdvancedParametersList <a name="DatabaseMigrationMigrationAdvancedParametersList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationAdvancedParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get"></a>

```csharp
private DatabaseMigrationMigrationAdvancedParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseMigrationMigrationAdvancedParametersOutputReference <a name="DatabaseMigrationMigrationAdvancedParametersOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationAdvancedParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataType` <a name="ResetDataType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetDataType"></a>

```csharp
private void ResetDataType()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseMigrationMigrationAdvisorSettingsOutputReference <a name="DatabaseMigrationMigrationAdvisorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationAdvisorSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsIgnoreErrors">ResetIsIgnoreErrors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsSkipAdvisor">ResetIsSkipAdvisor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsIgnoreErrors` <a name="ResetIsIgnoreErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsIgnoreErrors"></a>

```csharp
private void ResetIsIgnoreErrors()
```

##### `ResetIsSkipAdvisor` <a name="ResetIsSkipAdvisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsSkipAdvisor"></a>

```csharp
private void ResetIsSkipAdvisor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrorsInput">IsIgnoreErrorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisorInput">IsSkipAdvisorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrors">IsIgnoreErrors</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisor">IsSkipAdvisor</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsIgnoreErrorsInput`<sup>Optional</sup> <a name="IsIgnoreErrorsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrorsInput"></a>

```csharp
public object IsIgnoreErrorsInput { get; }
```

- *Type:* object

---

##### `IsSkipAdvisorInput`<sup>Optional</sup> <a name="IsSkipAdvisorInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisorInput"></a>

```csharp
public object IsSkipAdvisorInput { get; }
```

- *Type:* object

---

##### `IsIgnoreErrors`<sup>Required</sup> <a name="IsIgnoreErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrors"></a>

```csharp
public object IsIgnoreErrors { get; }
```

- *Type:* object

---

##### `IsSkipAdvisor`<sup>Required</sup> <a name="IsSkipAdvisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisor"></a>

```csharp
public object IsSkipAdvisor { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationAdvisorSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket">PutObjectStorageBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetObjectStorageBucket">ResetObjectStorageBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSecretAccessKey">ResetSecretAccessKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSharedStorageMountTargetId">ResetSharedStorageMountTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectStorageBucket` <a name="PutObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket"></a>

```csharp
private void PutObjectStorageBucket(DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---

##### `PutSource` <a name="PutSource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource"></a>

```csharp
private void PutSource(DatabaseMigrationMigrationDataTransferMediumDetailsSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---

##### `PutTarget` <a name="PutTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget"></a>

```csharp
private void PutTarget(DatabaseMigrationMigrationDataTransferMediumDetailsTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetAccessKeyId"></a>

```csharp
private void ResetAccessKeyId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetObjectStorageBucket` <a name="ResetObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetObjectStorageBucket"></a>

```csharp
private void ResetObjectStorageBucket()
```

##### `ResetRegion` <a name="ResetRegion" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSecretAccessKey"></a>

```csharp
private void ResetSecretAccessKey()
```

##### `ResetSharedStorageMountTargetId` <a name="ResetSharedStorageMountTargetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSharedStorageMountTargetId"></a>

```csharp
private void ResetSharedStorageMountTargetId()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetTarget` <a name="ResetTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucket">ObjectStorageBucket</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucketInput">ObjectStorageBucketInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetIdInput">SharedStorageMountTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId">SharedStorageMountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectStorageBucket`<sup>Required</sup> <a name="ObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucket"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference ObjectStorageBucket { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.source"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference Source { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.target"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference Target { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference</a>

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ObjectStorageBucketInput`<sup>Optional</sup> <a name="ObjectStorageBucketInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucketInput"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket ObjectStorageBucketInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKeyInput"></a>

```csharp
public string SecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `SharedStorageMountTargetIdInput`<sup>Optional</sup> <a name="SharedStorageMountTargetIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetIdInput"></a>

```csharp
public string SharedStorageMountTargetIdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sourceInput"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetailsSource SourceInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.targetInput"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetailsTarget TargetInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; }
```

- *Type:* string

---

##### `SharedStorageMountTargetId`<sup>Required</sup> <a name="SharedStorageMountTargetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId"></a>

```csharp
public string SharedStorageMountTargetId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetOciHome">ResetOciHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetWalletLocation">ResetWalletLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOciHome` <a name="ResetOciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetOciHome"></a>

```csharp
private void ResetOciHome()
```

##### `ResetWalletLocation` <a name="ResetWalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetWalletLocation"></a>

```csharp
private void ResetWalletLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHomeInput">OciHomeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocationInput">WalletLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHome">OciHome</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocation">WalletLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `OciHomeInput`<sup>Optional</sup> <a name="OciHomeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHomeInput"></a>

```csharp
public string OciHomeInput { get; }
```

- *Type:* string

---

##### `WalletLocationInput`<sup>Optional</sup> <a name="WalletLocationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocationInput"></a>

```csharp
public string WalletLocationInput { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `OciHome`<sup>Required</sup> <a name="OciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHome"></a>

```csharp
public string OciHome { get; }
```

- *Type:* string

---

##### `WalletLocation`<sup>Required</sup> <a name="WalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocation"></a>

```csharp
public string WalletLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetailsSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetOciHome">ResetOciHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetWalletLocation">ResetWalletLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOciHome` <a name="ResetOciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetOciHome"></a>

```csharp
private void ResetOciHome()
```

##### `ResetWalletLocation` <a name="ResetWalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetWalletLocation"></a>

```csharp
private void ResetWalletLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHomeInput">OciHomeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocationInput">WalletLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHome">OciHome</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocation">WalletLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `OciHomeInput`<sup>Optional</sup> <a name="OciHomeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHomeInput"></a>

```csharp
public string OciHomeInput { get; }
```

- *Type:* string

---

##### `WalletLocationInput`<sup>Optional</sup> <a name="WalletLocationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocationInput"></a>

```csharp
public string WalletLocationInput { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `OciHome`<sup>Required</sup> <a name="OciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHome"></a>

```csharp
public string OciHome { get; }
```

- *Type:* string

---

##### `WalletLocation`<sup>Required</sup> <a name="WalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocation"></a>

```csharp
public string WalletLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationDataTransferMediumDetailsTarget InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---


### DatabaseMigrationMigrationExcludeObjectsList <a name="DatabaseMigrationMigrationExcludeObjectsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationExcludeObjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get"></a>

```csharp
private DatabaseMigrationMigrationExcludeObjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseMigrationMigrationExcludeObjectsOutputReference <a name="DatabaseMigrationMigrationExcludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationExcludeObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication">ResetIsOmitExcludedTableFromReplication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsOmitExcludedTableFromReplication` <a name="ResetIsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication"></a>

```csharp
private void ResetIsOmitExcludedTableFromReplication()
```

##### `ResetOwner` <a name="ResetOwner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetSchema` <a name="ResetSchema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput">IsOmitExcludedTableFromReplicationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">IsOmitExcludedTableFromReplication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsOmitExcludedTableFromReplicationInput`<sup>Optional</sup> <a name="IsOmitExcludedTableFromReplicationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput"></a>

```csharp
public object IsOmitExcludedTableFromReplicationInput { get; }
```

- *Type:* object

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IsOmitExcludedTableFromReplication`<sup>Required</sup> <a name="IsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```csharp
public object IsOmitExcludedTableFromReplication { get; }
```

- *Type:* object

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseMigrationMigrationGgsDetailsExtractOutputReference <a name="DatabaseMigrationMigrationGgsDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationGgsDetailsExtractOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetLongTransDuration">ResetLongTransDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetPerformanceProfile">ResetPerformanceProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLongTransDuration` <a name="ResetLongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetLongTransDuration"></a>

```csharp
private void ResetLongTransDuration()
```

##### `ResetPerformanceProfile` <a name="ResetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetPerformanceProfile"></a>

```csharp
private void ResetPerformanceProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDurationInput">LongTransDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfileInput">PerformanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDuration">LongTransDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfile">PerformanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LongTransDurationInput`<sup>Optional</sup> <a name="LongTransDurationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDurationInput"></a>

```csharp
public double LongTransDurationInput { get; }
```

- *Type:* double

---

##### `PerformanceProfileInput`<sup>Optional</sup> <a name="PerformanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfileInput"></a>

```csharp
public string PerformanceProfileInput { get; }
```

- *Type:* string

---

##### `LongTransDuration`<sup>Required</sup> <a name="LongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDuration"></a>

```csharp
public double LongTransDuration { get; }
```

- *Type:* double

---

##### `PerformanceProfile`<sup>Required</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfile"></a>

```csharp
public string PerformanceProfile { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationGgsDetailsExtract InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

---


### DatabaseMigrationMigrationGgsDetailsGgsDeploymentList <a name="DatabaseMigrationMigrationGgsDetailsGgsDeploymentList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationGgsDetailsGgsDeploymentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get"></a>

```csharp
private DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference <a name="DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId">GgsAdminCredentialsSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment">DatabaseMigrationMigrationGgsDetailsGgsDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `GgsAdminCredentialsSecretId`<sup>Required</sup> <a name="GgsAdminCredentialsSecretId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId"></a>

```csharp
public string GgsAdminCredentialsSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationGgsDetailsGgsDeployment InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment">DatabaseMigrationMigrationGgsDetailsGgsDeployment</a>

---


### DatabaseMigrationMigrationGgsDetailsOutputReference <a name="DatabaseMigrationMigrationGgsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationGgsDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract">PutExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat">PutReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetAcceptableLag">ResetAcceptableLag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetExtract">ResetExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetReplicat">ResetReplicat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtract` <a name="PutExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract"></a>

```csharp
private void PutExtract(DatabaseMigrationMigrationGgsDetailsExtract Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

---

##### `PutReplicat` <a name="PutReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat"></a>

```csharp
private void PutReplicat(DatabaseMigrationMigrationGgsDetailsReplicat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

---

##### `ResetAcceptableLag` <a name="ResetAcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetAcceptableLag"></a>

```csharp
private void ResetAcceptableLag()
```

##### `ResetExtract` <a name="ResetExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetExtract"></a>

```csharp
private void ResetExtract()
```

##### `ResetReplicat` <a name="ResetReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetReplicat"></a>

```csharp
private void ResetReplicat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extract">Extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference">DatabaseMigrationMigrationGgsDetailsExtractOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.ggsDeployment">GgsDeployment</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList">DatabaseMigrationMigrationGgsDetailsGgsDeploymentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicat">Replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference">DatabaseMigrationMigrationGgsDetailsReplicatOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLagInput">AcceptableLagInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extractInput">ExtractInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicatInput">ReplicatInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLag">AcceptableLag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Extract`<sup>Required</sup> <a name="Extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extract"></a>

```csharp
public DatabaseMigrationMigrationGgsDetailsExtractOutputReference Extract { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference">DatabaseMigrationMigrationGgsDetailsExtractOutputReference</a>

---

##### `GgsDeployment`<sup>Required</sup> <a name="GgsDeployment" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.ggsDeployment"></a>

```csharp
public DatabaseMigrationMigrationGgsDetailsGgsDeploymentList GgsDeployment { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList">DatabaseMigrationMigrationGgsDetailsGgsDeploymentList</a>

---

##### `Replicat`<sup>Required</sup> <a name="Replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicat"></a>

```csharp
public DatabaseMigrationMigrationGgsDetailsReplicatOutputReference Replicat { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference">DatabaseMigrationMigrationGgsDetailsReplicatOutputReference</a>

---

##### `AcceptableLagInput`<sup>Optional</sup> <a name="AcceptableLagInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLagInput"></a>

```csharp
public double AcceptableLagInput { get; }
```

- *Type:* double

---

##### `ExtractInput`<sup>Optional</sup> <a name="ExtractInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extractInput"></a>

```csharp
public DatabaseMigrationMigrationGgsDetailsExtract ExtractInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

---

##### `ReplicatInput`<sup>Optional</sup> <a name="ReplicatInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicatInput"></a>

```csharp
public DatabaseMigrationMigrationGgsDetailsReplicat ReplicatInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

---

##### `AcceptableLag`<sup>Required</sup> <a name="AcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLag"></a>

```csharp
public double AcceptableLag { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationGgsDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

---


### DatabaseMigrationMigrationGgsDetailsReplicatOutputReference <a name="DatabaseMigrationMigrationGgsDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationGgsDetailsReplicatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resetPerformanceProfile">ResetPerformanceProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPerformanceProfile` <a name="ResetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resetPerformanceProfile"></a>

```csharp
private void ResetPerformanceProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfileInput">PerformanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfile">PerformanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PerformanceProfileInput`<sup>Optional</sup> <a name="PerformanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfileInput"></a>

```csharp
public string PerformanceProfileInput { get; }
```

- *Type:* string

---

##### `PerformanceProfile`<sup>Required</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfile"></a>

```csharp
public string PerformanceProfile { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationGgsDetailsReplicat InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

---


### DatabaseMigrationMigrationHubDetailsExtractOutputReference <a name="DatabaseMigrationMigrationHubDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationHubDetailsExtractOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetLongTransDuration">ResetLongTransDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetPerformanceProfile">ResetPerformanceProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLongTransDuration` <a name="ResetLongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetLongTransDuration"></a>

```csharp
private void ResetLongTransDuration()
```

##### `ResetPerformanceProfile` <a name="ResetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetPerformanceProfile"></a>

```csharp
private void ResetPerformanceProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDurationInput">LongTransDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfileInput">PerformanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDuration">LongTransDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfile">PerformanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LongTransDurationInput`<sup>Optional</sup> <a name="LongTransDurationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDurationInput"></a>

```csharp
public double LongTransDurationInput { get; }
```

- *Type:* double

---

##### `PerformanceProfileInput`<sup>Optional</sup> <a name="PerformanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfileInput"></a>

```csharp
public string PerformanceProfileInput { get; }
```

- *Type:* string

---

##### `LongTransDuration`<sup>Required</sup> <a name="LongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDuration"></a>

```csharp
public double LongTransDuration { get; }
```

- *Type:* double

---

##### `PerformanceProfile`<sup>Required</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfile"></a>

```csharp
public string PerformanceProfile { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationHubDetailsExtract InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

---


### DatabaseMigrationMigrationHubDetailsOutputReference <a name="DatabaseMigrationMigrationHubDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationHubDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract">PutExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat">PutReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials">PutRestAdminCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetAcceptableLag">ResetAcceptableLag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetComputeId">ResetComputeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetExtract">ResetExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetReplicat">ResetReplicat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtract` <a name="PutExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract"></a>

```csharp
private void PutExtract(DatabaseMigrationMigrationHubDetailsExtract Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

---

##### `PutReplicat` <a name="PutReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat"></a>

```csharp
private void PutReplicat(DatabaseMigrationMigrationHubDetailsReplicat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

---

##### `PutRestAdminCredentials` <a name="PutRestAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials"></a>

```csharp
private void PutRestAdminCredentials(DatabaseMigrationMigrationHubDetailsRestAdminCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---

##### `ResetAcceptableLag` <a name="ResetAcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetAcceptableLag"></a>

```csharp
private void ResetAcceptableLag()
```

##### `ResetComputeId` <a name="ResetComputeId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetComputeId"></a>

```csharp
private void ResetComputeId()
```

##### `ResetExtract` <a name="ResetExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetExtract"></a>

```csharp
private void ResetExtract()
```

##### `ResetReplicat` <a name="ResetReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetReplicat"></a>

```csharp
private void ResetReplicat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extract">Extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference">DatabaseMigrationMigrationHubDetailsExtractOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicat">Replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference">DatabaseMigrationMigrationHubDetailsReplicatOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentials">RestAdminCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference">DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLagInput">AcceptableLagInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeIdInput">ComputeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extractInput">ExtractInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicatInput">ReplicatInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentialsInput">RestAdminCredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLag">AcceptableLag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeId">ComputeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Extract`<sup>Required</sup> <a name="Extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extract"></a>

```csharp
public DatabaseMigrationMigrationHubDetailsExtractOutputReference Extract { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference">DatabaseMigrationMigrationHubDetailsExtractOutputReference</a>

---

##### `Replicat`<sup>Required</sup> <a name="Replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicat"></a>

```csharp
public DatabaseMigrationMigrationHubDetailsReplicatOutputReference Replicat { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference">DatabaseMigrationMigrationHubDetailsReplicatOutputReference</a>

---

##### `RestAdminCredentials`<sup>Required</sup> <a name="RestAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentials"></a>

```csharp
public DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference RestAdminCredentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference">DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference</a>

---

##### `AcceptableLagInput`<sup>Optional</sup> <a name="AcceptableLagInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLagInput"></a>

```csharp
public double AcceptableLagInput { get; }
```

- *Type:* double

---

##### `ComputeIdInput`<sup>Optional</sup> <a name="ComputeIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeIdInput"></a>

```csharp
public string ComputeIdInput { get; }
```

- *Type:* string

---

##### `ExtractInput`<sup>Optional</sup> <a name="ExtractInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extractInput"></a>

```csharp
public DatabaseMigrationMigrationHubDetailsExtract ExtractInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `ReplicatInput`<sup>Optional</sup> <a name="ReplicatInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicatInput"></a>

```csharp
public DatabaseMigrationMigrationHubDetailsReplicat ReplicatInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

---

##### `RestAdminCredentialsInput`<sup>Optional</sup> <a name="RestAdminCredentialsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentialsInput"></a>

```csharp
public DatabaseMigrationMigrationHubDetailsRestAdminCredentials RestAdminCredentialsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `AcceptableLag`<sup>Required</sup> <a name="AcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLag"></a>

```csharp
public double AcceptableLag { get; }
```

- *Type:* double

---

##### `ComputeId`<sup>Required</sup> <a name="ComputeId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeId"></a>

```csharp
public string ComputeId { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationHubDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

---


### DatabaseMigrationMigrationHubDetailsReplicatOutputReference <a name="DatabaseMigrationMigrationHubDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationHubDetailsReplicatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resetPerformanceProfile">ResetPerformanceProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPerformanceProfile` <a name="ResetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resetPerformanceProfile"></a>

```csharp
private void ResetPerformanceProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfileInput">PerformanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfile">PerformanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PerformanceProfileInput`<sup>Optional</sup> <a name="PerformanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfileInput"></a>

```csharp
public string PerformanceProfileInput { get; }
```

- *Type:* string

---

##### `PerformanceProfile`<sup>Required</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfile"></a>

```csharp
public string PerformanceProfile { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationHubDetailsReplicat InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

---


### DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference <a name="DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationHubDetailsRestAdminCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---


### DatabaseMigrationMigrationIncludeObjectsList <a name="DatabaseMigrationMigrationIncludeObjectsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationIncludeObjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get"></a>

```csharp
private DatabaseMigrationMigrationIncludeObjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseMigrationMigrationIncludeObjectsOutputReference <a name="DatabaseMigrationMigrationIncludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationIncludeObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication">ResetIsOmitExcludedTableFromReplication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsOmitExcludedTableFromReplication` <a name="ResetIsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication"></a>

```csharp
private void ResetIsOmitExcludedTableFromReplication()
```

##### `ResetOwner` <a name="ResetOwner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetSchema` <a name="ResetSchema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput">IsOmitExcludedTableFromReplicationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">IsOmitExcludedTableFromReplication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsOmitExcludedTableFromReplicationInput`<sup>Optional</sup> <a name="IsOmitExcludedTableFromReplicationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput"></a>

```csharp
public object IsOmitExcludedTableFromReplicationInput { get; }
```

- *Type:* object

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IsOmitExcludedTableFromReplication`<sup>Required</sup> <a name="IsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```csharp
public object IsOmitExcludedTableFromReplication { get; }
```

- *Type:* object

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetEstimate">ResetEstimate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExcludeParameters">ResetExcludeParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExportParallelismDegree">ResetExportParallelismDegree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetImportParallelismDegree">ResetImportParallelismDegree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetIsCluster">ResetIsCluster</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetTableExistsAction">ResetTableExistsAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEstimate` <a name="ResetEstimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetEstimate"></a>

```csharp
private void ResetEstimate()
```

##### `ResetExcludeParameters` <a name="ResetExcludeParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExcludeParameters"></a>

```csharp
private void ResetExcludeParameters()
```

##### `ResetExportParallelismDegree` <a name="ResetExportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExportParallelismDegree"></a>

```csharp
private void ResetExportParallelismDegree()
```

##### `ResetImportParallelismDegree` <a name="ResetImportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetImportParallelismDegree"></a>

```csharp
private void ResetImportParallelismDegree()
```

##### `ResetIsCluster` <a name="ResetIsCluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetIsCluster"></a>

```csharp
private void ResetIsCluster()
```

##### `ResetTableExistsAction` <a name="ResetTableExistsAction" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetTableExistsAction"></a>

```csharp
private void ResetTableExistsAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimateInput">EstimateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParametersInput">ExcludeParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegreeInput">ExportParallelismDegreeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegreeInput">ImportParallelismDegreeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isClusterInput">IsClusterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsActionInput">TableExistsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimate">Estimate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters">ExcludeParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree">ExportParallelismDegree</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree">ImportParallelismDegree</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster">IsCluster</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction">TableExistsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimateInput`<sup>Optional</sup> <a name="EstimateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimateInput"></a>

```csharp
public string EstimateInput { get; }
```

- *Type:* string

---

##### `ExcludeParametersInput`<sup>Optional</sup> <a name="ExcludeParametersInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParametersInput"></a>

```csharp
public string[] ExcludeParametersInput { get; }
```

- *Type:* string[]

---

##### `ExportParallelismDegreeInput`<sup>Optional</sup> <a name="ExportParallelismDegreeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegreeInput"></a>

```csharp
public double ExportParallelismDegreeInput { get; }
```

- *Type:* double

---

##### `ImportParallelismDegreeInput`<sup>Optional</sup> <a name="ImportParallelismDegreeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegreeInput"></a>

```csharp
public double ImportParallelismDegreeInput { get; }
```

- *Type:* double

---

##### `IsClusterInput`<sup>Optional</sup> <a name="IsClusterInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isClusterInput"></a>

```csharp
public object IsClusterInput { get; }
```

- *Type:* object

---

##### `TableExistsActionInput`<sup>Optional</sup> <a name="TableExistsActionInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsActionInput"></a>

```csharp
public string TableExistsActionInput { get; }
```

- *Type:* string

---

##### `Estimate`<sup>Required</sup> <a name="Estimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimate"></a>

```csharp
public string Estimate { get; }
```

- *Type:* string

---

##### `ExcludeParameters`<sup>Required</sup> <a name="ExcludeParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters"></a>

```csharp
public string[] ExcludeParameters { get; }
```

- *Type:* string[]

---

##### `ExportParallelismDegree`<sup>Required</sup> <a name="ExportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree"></a>

```csharp
public double ExportParallelismDegree { get; }
```

- *Type:* double

---

##### `ImportParallelismDegree`<sup>Required</sup> <a name="ImportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree"></a>

```csharp
public double ImportParallelismDegree { get; }
```

- *Type:* double

---

##### `IsCluster`<sup>Required</sup> <a name="IsCluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster"></a>

```csharp
public object IsCluster { get; }
```

- *Type:* object

---

##### `TableExistsAction`<sup>Required</sup> <a name="TableExistsAction" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction"></a>

```csharp
public string TableExistsAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get"></a>

```csharp
private DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetNewValue">ResetNewValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetOldValue">ResetOldValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNewValue` <a name="ResetNewValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetNewValue"></a>

```csharp
private void ResetNewValue()
```

##### `ResetOldValue` <a name="ResetOldValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetOldValue"></a>

```csharp
private void ResetOldValue()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValueInput">NewValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValueInput">OldValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValue">NewValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue">OldValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NewValueInput`<sup>Optional</sup> <a name="NewValueInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValueInput"></a>

```csharp
public string NewValueInput { get; }
```

- *Type:* string

---

##### `OldValueInput`<sup>Optional</sup> <a name="OldValueInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValueInput"></a>

```csharp
public string OldValueInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `NewValue`<sup>Required</sup> <a name="NewValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValue"></a>

```csharp
public string NewValue { get; }
```

- *Type:* string

---

##### `OldValue`<sup>Required</sup> <a name="OldValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue"></a>

```csharp
public string OldValue { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseMigrationMigrationInitialLoadSettingsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationInitialLoadSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters">PutDataPumpParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject">PutExportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject">PutImportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps">PutMetadataRemaps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails">PutTablespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetCompatibility">ResetCompatibility</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetDataPumpParameters">ResetDataPumpParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetExportDirectoryObject">ResetExportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetHandleGrantErrors">ResetHandleGrantErrors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetImportDirectoryObject">ResetImportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsConsistent">ResetIsConsistent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsIgnoreExistingObjects">ResetIsIgnoreExistingObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsTzUtc">ResetIsTzUtc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetMetadataRemaps">ResetMetadataRemaps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetPrimaryKeyCompatibility">ResetPrimaryKeyCompatibility</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetTablespaceDetails">ResetTablespaceDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataPumpParameters` <a name="PutDataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters"></a>

```csharp
private void PutDataPumpParameters(DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---

##### `PutExportDirectoryObject` <a name="PutExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject"></a>

```csharp
private void PutExportDirectoryObject(DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---

##### `PutImportDirectoryObject` <a name="PutImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject"></a>

```csharp
private void PutImportDirectoryObject(DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---

##### `PutMetadataRemaps` <a name="PutMetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps"></a>

```csharp
private void PutMetadataRemaps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps.parameter.value"></a>

- *Type:* object

---

##### `PutTablespaceDetails` <a name="PutTablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails"></a>

```csharp
private void PutTablespaceDetails(DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---

##### `ResetCompatibility` <a name="ResetCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetCompatibility"></a>

```csharp
private void ResetCompatibility()
```

##### `ResetDataPumpParameters` <a name="ResetDataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetDataPumpParameters"></a>

```csharp
private void ResetDataPumpParameters()
```

##### `ResetExportDirectoryObject` <a name="ResetExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetExportDirectoryObject"></a>

```csharp
private void ResetExportDirectoryObject()
```

##### `ResetHandleGrantErrors` <a name="ResetHandleGrantErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetHandleGrantErrors"></a>

```csharp
private void ResetHandleGrantErrors()
```

##### `ResetImportDirectoryObject` <a name="ResetImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetImportDirectoryObject"></a>

```csharp
private void ResetImportDirectoryObject()
```

##### `ResetIsConsistent` <a name="ResetIsConsistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsConsistent"></a>

```csharp
private void ResetIsConsistent()
```

##### `ResetIsIgnoreExistingObjects` <a name="ResetIsIgnoreExistingObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsIgnoreExistingObjects"></a>

```csharp
private void ResetIsIgnoreExistingObjects()
```

##### `ResetIsTzUtc` <a name="ResetIsTzUtc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsTzUtc"></a>

```csharp
private void ResetIsTzUtc()
```

##### `ResetMetadataRemaps` <a name="ResetMetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetMetadataRemaps"></a>

```csharp
private void ResetMetadataRemaps()
```

##### `ResetPrimaryKeyCompatibility` <a name="ResetPrimaryKeyCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetPrimaryKeyCompatibility"></a>

```csharp
private void ResetPrimaryKeyCompatibility()
```

##### `ResetTablespaceDetails` <a name="ResetTablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetTablespaceDetails"></a>

```csharp
private void ResetTablespaceDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParameters">DataPumpParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObject">ExportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObject">ImportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemaps">MetadataRemaps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetails">TablespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibilityInput">CompatibilityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParametersInput">DataPumpParametersInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObjectInput">ExportDirectoryObjectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrorsInput">HandleGrantErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObjectInput">ImportDirectoryObjectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistentInput">IsConsistentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjectsInput">IsIgnoreExistingObjectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtcInput">IsTzUtcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobModeInput">JobModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemapsInput">MetadataRemapsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibilityInput">PrimaryKeyCompatibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetailsInput">TablespaceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibility">Compatibility</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrors">HandleGrantErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistent">IsConsistent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects">IsIgnoreExistingObjects</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtc">IsTzUtc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobMode">JobMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibility">PrimaryKeyCompatibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataPumpParameters`<sup>Required</sup> <a name="DataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParameters"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference DataPumpParameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference</a>

---

##### `ExportDirectoryObject`<sup>Required</sup> <a name="ExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObject"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference ExportDirectoryObject { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference</a>

---

##### `ImportDirectoryObject`<sup>Required</sup> <a name="ImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObject"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference ImportDirectoryObject { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference</a>

---

##### `MetadataRemaps`<sup>Required</sup> <a name="MetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemaps"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList MetadataRemaps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList</a>

---

##### `TablespaceDetails`<sup>Required</sup> <a name="TablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetails"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference TablespaceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference</a>

---

##### `CompatibilityInput`<sup>Optional</sup> <a name="CompatibilityInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibilityInput"></a>

```csharp
public string[] CompatibilityInput { get; }
```

- *Type:* string[]

---

##### `DataPumpParametersInput`<sup>Optional</sup> <a name="DataPumpParametersInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParametersInput"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters DataPumpParametersInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---

##### `ExportDirectoryObjectInput`<sup>Optional</sup> <a name="ExportDirectoryObjectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObjectInput"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject ExportDirectoryObjectInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---

##### `HandleGrantErrorsInput`<sup>Optional</sup> <a name="HandleGrantErrorsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrorsInput"></a>

```csharp
public string HandleGrantErrorsInput { get; }
```

- *Type:* string

---

##### `ImportDirectoryObjectInput`<sup>Optional</sup> <a name="ImportDirectoryObjectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObjectInput"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject ImportDirectoryObjectInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---

##### `IsConsistentInput`<sup>Optional</sup> <a name="IsConsistentInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistentInput"></a>

```csharp
public object IsConsistentInput { get; }
```

- *Type:* object

---

##### `IsIgnoreExistingObjectsInput`<sup>Optional</sup> <a name="IsIgnoreExistingObjectsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjectsInput"></a>

```csharp
public object IsIgnoreExistingObjectsInput { get; }
```

- *Type:* object

---

##### `IsTzUtcInput`<sup>Optional</sup> <a name="IsTzUtcInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtcInput"></a>

```csharp
public object IsTzUtcInput { get; }
```

- *Type:* object

---

##### `JobModeInput`<sup>Optional</sup> <a name="JobModeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobModeInput"></a>

```csharp
public string JobModeInput { get; }
```

- *Type:* string

---

##### `MetadataRemapsInput`<sup>Optional</sup> <a name="MetadataRemapsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemapsInput"></a>

```csharp
public object MetadataRemapsInput { get; }
```

- *Type:* object

---

##### `PrimaryKeyCompatibilityInput`<sup>Optional</sup> <a name="PrimaryKeyCompatibilityInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibilityInput"></a>

```csharp
public string PrimaryKeyCompatibilityInput { get; }
```

- *Type:* string

---

##### `TablespaceDetailsInput`<sup>Optional</sup> <a name="TablespaceDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetailsInput"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails TablespaceDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---

##### `Compatibility`<sup>Required</sup> <a name="Compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibility"></a>

```csharp
public string[] Compatibility { get; }
```

- *Type:* string[]

---

##### `HandleGrantErrors`<sup>Required</sup> <a name="HandleGrantErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrors"></a>

```csharp
public string HandleGrantErrors { get; }
```

- *Type:* string

---

##### `IsConsistent`<sup>Required</sup> <a name="IsConsistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistent"></a>

```csharp
public object IsConsistent { get; }
```

- *Type:* object

---

##### `IsIgnoreExistingObjects`<sup>Required</sup> <a name="IsIgnoreExistingObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects"></a>

```csharp
public object IsIgnoreExistingObjects { get; }
```

- *Type:* object

---

##### `IsTzUtc`<sup>Required</sup> <a name="IsTzUtc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtc"></a>

```csharp
public object IsTzUtc { get; }
```

- *Type:* object

---

##### `JobMode`<sup>Required</sup> <a name="JobMode" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobMode"></a>

```csharp
public string JobMode { get; }
```

- *Type:* string

---

##### `PrimaryKeyCompatibility`<sup>Required</sup> <a name="PrimaryKeyCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibility"></a>

```csharp
public string PrimaryKeyCompatibility { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetBlockSizeInKbs">ResetBlockSizeInKbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetExtendSizeInMbs">ResetExtendSizeInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsAutoCreate">ResetIsAutoCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsBigFile">ResetIsBigFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetRemapTarget">ResetRemapTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockSizeInKbs` <a name="ResetBlockSizeInKbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetBlockSizeInKbs"></a>

```csharp
private void ResetBlockSizeInKbs()
```

##### `ResetExtendSizeInMbs` <a name="ResetExtendSizeInMbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetExtendSizeInMbs"></a>

```csharp
private void ResetExtendSizeInMbs()
```

##### `ResetIsAutoCreate` <a name="ResetIsAutoCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsAutoCreate"></a>

```csharp
private void ResetIsAutoCreate()
```

##### `ResetIsBigFile` <a name="ResetIsBigFile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsBigFile"></a>

```csharp
private void ResetIsBigFile()
```

##### `ResetRemapTarget` <a name="ResetRemapTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetRemapTarget"></a>

```csharp
private void ResetRemapTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbsInput">BlockSizeInKbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbsInput">ExtendSizeInMbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreateInput">IsAutoCreateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFileInput">IsBigFileInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTargetInput">RemapTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetTypeInput">TargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs">BlockSizeInKbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs">ExtendSizeInMbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate">IsAutoCreate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile">IsBigFile</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget">RemapTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockSizeInKbsInput`<sup>Optional</sup> <a name="BlockSizeInKbsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbsInput"></a>

```csharp
public string BlockSizeInKbsInput { get; }
```

- *Type:* string

---

##### `ExtendSizeInMbsInput`<sup>Optional</sup> <a name="ExtendSizeInMbsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbsInput"></a>

```csharp
public double ExtendSizeInMbsInput { get; }
```

- *Type:* double

---

##### `IsAutoCreateInput`<sup>Optional</sup> <a name="IsAutoCreateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreateInput"></a>

```csharp
public object IsAutoCreateInput { get; }
```

- *Type:* object

---

##### `IsBigFileInput`<sup>Optional</sup> <a name="IsBigFileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFileInput"></a>

```csharp
public object IsBigFileInput { get; }
```

- *Type:* object

---

##### `RemapTargetInput`<sup>Optional</sup> <a name="RemapTargetInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTargetInput"></a>

```csharp
public string RemapTargetInput { get; }
```

- *Type:* string

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetTypeInput"></a>

```csharp
public string TargetTypeInput { get; }
```

- *Type:* string

---

##### `BlockSizeInKbs`<sup>Required</sup> <a name="BlockSizeInKbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs"></a>

```csharp
public string BlockSizeInKbs { get; }
```

- *Type:* string

---

##### `ExtendSizeInMbs`<sup>Required</sup> <a name="ExtendSizeInMbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs"></a>

```csharp
public double ExtendSizeInMbs { get; }
```

- *Type:* double

---

##### `IsAutoCreate`<sup>Required</sup> <a name="IsAutoCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate"></a>

```csharp
public object IsAutoCreate { get; }
```

- *Type:* object

---

##### `IsBigFile`<sup>Required</sup> <a name="IsBigFile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile"></a>

```csharp
public object IsBigFile { get; }
```

- *Type:* object

---

##### `RemapTarget`<sup>Required</sup> <a name="RemapTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget"></a>

```csharp
public string RemapTarget { get; }
```

- *Type:* string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---


### DatabaseMigrationMigrationTimeoutsOutputReference <a name="DatabaseMigrationMigrationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseMigrationMigrationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



