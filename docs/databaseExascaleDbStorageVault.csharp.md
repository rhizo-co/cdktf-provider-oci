# `databaseExascaleDbStorageVault` Submodule <a name="`databaseExascaleDbStorageVault` Submodule" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExascaleDbStorageVault <a name="DatabaseExascaleDbStorageVault" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault oci_database_exascale_db_storage_vault}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExascaleDbStorageVault(Construct Scope, string Id, DatabaseExascaleDbStorageVaultConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig">DatabaseExascaleDbStorageVaultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig">DatabaseExascaleDbStorageVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putHighCapacityDatabaseStorage">PutHighCapacityDatabaseStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetAdditionalFlashCacheInPercent">ResetAdditionalFlashCacheInPercent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHighCapacityDatabaseStorage` <a name="PutHighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putHighCapacityDatabaseStorage"></a>

```csharp
private void PutHighCapacityDatabaseStorage(DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putHighCapacityDatabaseStorage.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseExascaleDbStorageVaultTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts">DatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `ResetAdditionalFlashCacheInPercent` <a name="ResetAdditionalFlashCacheInPercent" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetAdditionalFlashCacheInPercent"></a>

```csharp
private void ResetAdditionalFlashCacheInPercent()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExascaleDbStorageVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExascaleDbStorageVault.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExascaleDbStorageVault.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExascaleDbStorageVault.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExascaleDbStorageVault.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseExascaleDbStorageVault resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseExascaleDbStorageVault to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseExascaleDbStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExascaleDbStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.highCapacityDatabaseStorage">HighCapacityDatabaseStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference">DatabaseExascaleDbStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.vmClusterCount">VmClusterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.vmClusterIds">VmClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.additionalFlashCacheInPercentInput">AdditionalFlashCacheInPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.highCapacityDatabaseStorageInput">HighCapacityDatabaseStorageInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.additionalFlashCacheInPercent">AdditionalFlashCacheInPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `HighCapacityDatabaseStorage`<sup>Required</sup> <a name="HighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.highCapacityDatabaseStorage"></a>

```csharp
public DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference HighCapacityDatabaseStorage { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeouts"></a>

```csharp
public DatabaseExascaleDbStorageVaultTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference">DatabaseExascaleDbStorageVaultTimeoutsOutputReference</a>

---

##### `VmClusterCount`<sup>Required</sup> <a name="VmClusterCount" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.vmClusterCount"></a>

```csharp
public double VmClusterCount { get; }
```

- *Type:* double

---

##### `VmClusterIds`<sup>Required</sup> <a name="VmClusterIds" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.vmClusterIds"></a>

```csharp
public string[] VmClusterIds { get; }
```

- *Type:* string[]

---

##### `AdditionalFlashCacheInPercentInput`<sup>Optional</sup> <a name="AdditionalFlashCacheInPercentInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.additionalFlashCacheInPercentInput"></a>

```csharp
public double AdditionalFlashCacheInPercentInput { get; }
```

- *Type:* double

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HighCapacityDatabaseStorageInput`<sup>Optional</sup> <a name="HighCapacityDatabaseStorageInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.highCapacityDatabaseStorageInput"></a>

```csharp
public DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage HighCapacityDatabaseStorageInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `AdditionalFlashCacheInPercent`<sup>Required</sup> <a name="AdditionalFlashCacheInPercent" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.additionalFlashCacheInPercent"></a>

```csharp
public double AdditionalFlashCacheInPercent { get; }
```

- *Type:* double

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExascaleDbStorageVaultConfig <a name="DatabaseExascaleDbStorageVaultConfig" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExascaleDbStorageVaultConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityDomain,
    string CompartmentId,
    string DisplayName,
    DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage HighCapacityDatabaseStorage,
    double AdditionalFlashCacheInPercent = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    DatabaseExascaleDbStorageVaultTimeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#availability_domain DatabaseExascaleDbStorageVault#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#compartment_id DatabaseExascaleDbStorageVault#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#display_name DatabaseExascaleDbStorageVault#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.highCapacityDatabaseStorage">HighCapacityDatabaseStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a></code> | high_capacity_database_storage block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.additionalFlashCacheInPercent">AdditionalFlashCacheInPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#additional_flash_cache_in_percent DatabaseExascaleDbStorageVault#additional_flash_cache_in_percent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#defined_tags DatabaseExascaleDbStorageVault#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#description DatabaseExascaleDbStorageVault#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#freeform_tags DatabaseExascaleDbStorageVault#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#id DatabaseExascaleDbStorageVault#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts">DatabaseExascaleDbStorageVaultTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#time_zone DatabaseExascaleDbStorageVault#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#availability_domain DatabaseExascaleDbStorageVault#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#compartment_id DatabaseExascaleDbStorageVault#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#display_name DatabaseExascaleDbStorageVault#display_name}.

---

##### `HighCapacityDatabaseStorage`<sup>Required</sup> <a name="HighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.highCapacityDatabaseStorage"></a>

```csharp
public DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage HighCapacityDatabaseStorage { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a>

high_capacity_database_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#high_capacity_database_storage DatabaseExascaleDbStorageVault#high_capacity_database_storage}

---

##### `AdditionalFlashCacheInPercent`<sup>Optional</sup> <a name="AdditionalFlashCacheInPercent" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.additionalFlashCacheInPercent"></a>

```csharp
public double AdditionalFlashCacheInPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#additional_flash_cache_in_percent DatabaseExascaleDbStorageVault#additional_flash_cache_in_percent}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#defined_tags DatabaseExascaleDbStorageVault#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#description DatabaseExascaleDbStorageVault#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#freeform_tags DatabaseExascaleDbStorageVault#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#id DatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.timeouts"></a>

```csharp
public DatabaseExascaleDbStorageVaultTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts">DatabaseExascaleDbStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#timeouts DatabaseExascaleDbStorageVault#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#time_zone DatabaseExascaleDbStorageVault#time_zone}.

---

### DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage <a name="DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage {
    double TotalSizeInGbs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGbs">TotalSizeInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#total_size_in_gbs DatabaseExascaleDbStorageVault#total_size_in_gbs}. |

---

##### `TotalSizeInGbs`<sup>Required</sup> <a name="TotalSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGbs"></a>

```csharp
public double TotalSizeInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#total_size_in_gbs DatabaseExascaleDbStorageVault#total_size_in_gbs}.

---

### DatabaseExascaleDbStorageVaultTimeouts <a name="DatabaseExascaleDbStorageVaultTimeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExascaleDbStorageVaultTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#create DatabaseExascaleDbStorageVault#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#delete DatabaseExascaleDbStorageVault#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#update DatabaseExascaleDbStorageVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#create DatabaseExascaleDbStorageVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#delete DatabaseExascaleDbStorageVault#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#update DatabaseExascaleDbStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference <a name="DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs">AvailableSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbsInput">TotalSizeInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs">TotalSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableSizeInGbs`<sup>Required</sup> <a name="AvailableSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs"></a>

```csharp
public double AvailableSizeInGbs { get; }
```

- *Type:* double

---

##### `TotalSizeInGbsInput`<sup>Optional</sup> <a name="TotalSizeInGbsInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbsInput"></a>

```csharp
public double TotalSizeInGbsInput { get; }
```

- *Type:* double

---

##### `TotalSizeInGbs`<sup>Required</sup> <a name="TotalSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs"></a>

```csharp
public double TotalSizeInGbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```csharp
public DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a>

---


### DatabaseExascaleDbStorageVaultTimeoutsOutputReference <a name="DatabaseExascaleDbStorageVaultTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExascaleDbStorageVaultTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



