# `databaseDbSystem` Submodule <a name="`databaseDbSystem` Submodule" id="rhizo-co-terraform-provider-oci.databaseDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDbSystem <a name="DatabaseDbSystem" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system oci_database_db_system}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystem(Construct Scope, string Id, DatabaseDbSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig">DatabaseDbSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig">DatabaseDbSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDataCollectionOptions">PutDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome">PutDbHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbSystemOptions">PutDbSystemOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails">PutMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupNetworkNsgIds">ResetBackupNetworkNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupSubnetId">ResetBackupSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetCpuCoreCount">ResetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDatabaseEdition">ResetDatabaseEdition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataCollectionOptions">ResetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStoragePercentage">ResetDataStoragePercentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStorageSizeInGb">ResetDataStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDbSystemOptions">ResetDbSystemOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDiskRedundancy">ResetDiskRedundancy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFaultDomains">ResetFaultDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyVersionId">ResetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetMaintenanceWindowDetails">ResetMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetRecoStorageSizeInGb">ResetRecoStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSecurityAttributes">ResetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSourceDbSystemId">ResetSourceDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSparseDiskgroup">ResetSparseDiskgroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetStorageVolumePerformanceMode">ResetStorageVolumePerformanceMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataCollectionOptions` <a name="PutDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDataCollectionOptions"></a>

```csharp
private void PutDataCollectionOptions(DatabaseDbSystemDataCollectionOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

---

##### `PutDbHome` <a name="PutDbHome" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome"></a>

```csharp
private void PutDbHome(DatabaseDbSystemDbHome Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

---

##### `PutDbSystemOptions` <a name="PutDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbSystemOptions"></a>

```csharp
private void PutDbSystemOptions(DatabaseDbSystemDbSystemOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbSystemOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

---

##### `PutMaintenanceWindowDetails` <a name="PutMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails"></a>

```csharp
private void PutMaintenanceWindowDetails(DatabaseDbSystemMaintenanceWindowDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseDbSystemTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>

---

##### `ResetBackupNetworkNsgIds` <a name="ResetBackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupNetworkNsgIds"></a>

```csharp
private void ResetBackupNetworkNsgIds()
```

##### `ResetBackupSubnetId` <a name="ResetBackupSubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupSubnetId"></a>

```csharp
private void ResetBackupSubnetId()
```

##### `ResetClusterName` <a name="ResetClusterName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetClusterName"></a>

```csharp
private void ResetClusterName()
```

##### `ResetCpuCoreCount` <a name="ResetCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetCpuCoreCount"></a>

```csharp
private void ResetCpuCoreCount()
```

##### `ResetDatabaseEdition` <a name="ResetDatabaseEdition" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDatabaseEdition"></a>

```csharp
private void ResetDatabaseEdition()
```

##### `ResetDataCollectionOptions` <a name="ResetDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataCollectionOptions"></a>

```csharp
private void ResetDataCollectionOptions()
```

##### `ResetDataStoragePercentage` <a name="ResetDataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStoragePercentage"></a>

```csharp
private void ResetDataStoragePercentage()
```

##### `ResetDataStorageSizeInGb` <a name="ResetDataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStorageSizeInGb"></a>

```csharp
private void ResetDataStorageSizeInGb()
```

##### `ResetDbSystemOptions` <a name="ResetDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDbSystemOptions"></a>

```csharp
private void ResetDbSystemOptions()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDiskRedundancy` <a name="ResetDiskRedundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDiskRedundancy"></a>

```csharp
private void ResetDiskRedundancy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDomain` <a name="ResetDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetFaultDomains` <a name="ResetFaultDomains" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFaultDomains"></a>

```csharp
private void ResetFaultDomains()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetKmsKeyVersionId` <a name="ResetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyVersionId"></a>

```csharp
private void ResetKmsKeyVersionId()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetMaintenanceWindowDetails` <a name="ResetMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetMaintenanceWindowDetails"></a>

```csharp
private void ResetMaintenanceWindowDetails()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNodeCount"></a>

```csharp
private void ResetNodeCount()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```

##### `ResetRecoStorageSizeInGb` <a name="ResetRecoStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetRecoStorageSizeInGb"></a>

```csharp
private void ResetRecoStorageSizeInGb()
```

##### `ResetSecurityAttributes` <a name="ResetSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSecurityAttributes"></a>

```csharp
private void ResetSecurityAttributes()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetSourceDbSystemId` <a name="ResetSourceDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSourceDbSystemId"></a>

```csharp
private void ResetSourceDbSystemId()
```

##### `ResetSparseDiskgroup` <a name="ResetSparseDiskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSparseDiskgroup"></a>

```csharp
private void ResetSparseDiskgroup()
```

##### `ResetStorageVolumePerformanceMode` <a name="ResetStorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetStorageVolumePerformanceMode"></a>

```csharp
private void ResetStorageVolumePerformanceMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDbSystem resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDbSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDbSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDbSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDbSystem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseDbSystem resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseDbSystem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference">DatabaseDbSystemDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHome">DbHome</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference">DatabaseDbSystemDbHomeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptions">DbSystemOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference">DatabaseDbSystemDbSystemOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.iormConfigCache">IormConfigCache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList">DatabaseDbSystemIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastMaintenanceRunId">LastMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastPatchHistoryEntryId">LastPatchHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList">DatabaseDbSystemMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetails">MaintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference">DatabaseDbSystemMaintenanceWindowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nextMaintenanceRunId">NextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.osVersion">OsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.pointInTimeDataDiskCloneTimestamp">PointInTimeDataDiskCloneTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsName">ScanDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsRecordId">ScanDnsRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanIpIds">ScanIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference">DatabaseDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.vipIds">VipIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIdsInput">BackupNetworkNsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetIdInput">BackupSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEditionInput">DatabaseEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptionsInput">DataCollectionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentageInput">DataStoragePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGbInput">DataStorageSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHomeInput">DbHomeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptionsInput">DbSystemOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancyInput">DiskRedundancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomainsInput">FaultDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionIdInput">KmsKeyVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetailsInput">MaintenanceWindowDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGbInput">RecoStorageSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributesInput">SecurityAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemIdInput">SourceDbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroupInput">SparseDiskgroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceModeInput">StorageVolumePerformanceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetId">BackupSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentage">DataStoragePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancy">DiskRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomains">FaultDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGb">RecoStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributes">SecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemId">SourceDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroup">SparseDiskgroup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceMode">StorageVolumePerformanceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptions"></a>

```csharp
public DatabaseDbSystemDataCollectionOptionsOutputReference DataCollectionOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference">DatabaseDbSystemDataCollectionOptionsOutputReference</a>

---

##### `DbHome`<sup>Required</sup> <a name="DbHome" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHome"></a>

```csharp
public DatabaseDbSystemDbHomeOutputReference DbHome { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference">DatabaseDbSystemDbHomeOutputReference</a>

---

##### `DbSystemOptions`<sup>Required</sup> <a name="DbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptions"></a>

```csharp
public DatabaseDbSystemDbSystemOptionsOutputReference DbSystemOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference">DatabaseDbSystemDbSystemOptionsOutputReference</a>

---

##### `IormConfigCache`<sup>Required</sup> <a name="IormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.iormConfigCache"></a>

```csharp
public DatabaseDbSystemIormConfigCacheList IormConfigCache { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList">DatabaseDbSystemIormConfigCacheList</a>

---

##### `LastMaintenanceRunId`<sup>Required</sup> <a name="LastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastMaintenanceRunId"></a>

```csharp
public string LastMaintenanceRunId { get; }
```

- *Type:* string

---

##### `LastPatchHistoryEntryId`<sup>Required</sup> <a name="LastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastPatchHistoryEntryId"></a>

```csharp
public string LastPatchHistoryEntryId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindow"></a>

```csharp
public DatabaseDbSystemMaintenanceWindowList MaintenanceWindow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList">DatabaseDbSystemMaintenanceWindowList</a>

---

##### `MaintenanceWindowDetails`<sup>Required</sup> <a name="MaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetails"></a>

```csharp
public DatabaseDbSystemMaintenanceWindowDetailsOutputReference MaintenanceWindowDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference">DatabaseDbSystemMaintenanceWindowDetailsOutputReference</a>

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.memorySizeInGbs"></a>

```csharp
public double MemorySizeInGbs { get; }
```

- *Type:* double

---

##### `NextMaintenanceRunId`<sup>Required</sup> <a name="NextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nextMaintenanceRunId"></a>

```csharp
public string NextMaintenanceRunId { get; }
```

- *Type:* string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.osVersion"></a>

```csharp
public string OsVersion { get; }
```

- *Type:* string

---

##### `PointInTimeDataDiskCloneTimestamp`<sup>Required</sup> <a name="PointInTimeDataDiskCloneTimestamp" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.pointInTimeDataDiskCloneTimestamp"></a>

```csharp
public string PointInTimeDataDiskCloneTimestamp { get; }
```

- *Type:* string

---

##### `ScanDnsName`<sup>Required</sup> <a name="ScanDnsName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsName"></a>

```csharp
public string ScanDnsName { get; }
```

- *Type:* string

---

##### `ScanDnsRecordId`<sup>Required</sup> <a name="ScanDnsRecordId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsRecordId"></a>

```csharp
public string ScanDnsRecordId { get; }
```

- *Type:* string

---

##### `ScanIpIds`<sup>Required</sup> <a name="ScanIpIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanIpIds"></a>

```csharp
public string[] ScanIpIds { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeouts"></a>

```csharp
public DatabaseDbSystemTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference">DatabaseDbSystemTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VipIds`<sup>Required</sup> <a name="VipIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.vipIds"></a>

```csharp
public string[] VipIds { get; }
```

- *Type:* string[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `BackupNetworkNsgIdsInput`<sup>Optional</sup> <a name="BackupNetworkNsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIdsInput"></a>

```csharp
public string[] BackupNetworkNsgIdsInput { get; }
```

- *Type:* string[]

---

##### `BackupSubnetIdInput`<sup>Optional</sup> <a name="BackupSubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetIdInput"></a>

```csharp
public string BackupSubnetIdInput { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCountInput"></a>

```csharp
public double CpuCoreCountInput { get; }
```

- *Type:* double

---

##### `DatabaseEditionInput`<sup>Optional</sup> <a name="DatabaseEditionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEditionInput"></a>

```csharp
public string DatabaseEditionInput { get; }
```

- *Type:* string

---

##### `DataCollectionOptionsInput`<sup>Optional</sup> <a name="DataCollectionOptionsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptionsInput"></a>

```csharp
public DatabaseDbSystemDataCollectionOptions DataCollectionOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

---

##### `DataStoragePercentageInput`<sup>Optional</sup> <a name="DataStoragePercentageInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentageInput"></a>

```csharp
public double DataStoragePercentageInput { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGbInput`<sup>Optional</sup> <a name="DataStorageSizeInGbInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGbInput"></a>

```csharp
public double DataStorageSizeInGbInput { get; }
```

- *Type:* double

---

##### `DbHomeInput`<sup>Optional</sup> <a name="DbHomeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHomeInput"></a>

```csharp
public DatabaseDbSystemDbHome DbHomeInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

---

##### `DbSystemOptionsInput`<sup>Optional</sup> <a name="DbSystemOptionsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptionsInput"></a>

```csharp
public DatabaseDbSystemDbSystemOptions DbSystemOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DiskRedundancyInput`<sup>Optional</sup> <a name="DiskRedundancyInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancyInput"></a>

```csharp
public string DiskRedundancyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `FaultDomainsInput`<sup>Optional</sup> <a name="FaultDomainsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomainsInput"></a>

```csharp
public string[] FaultDomainsInput { get; }
```

- *Type:* string[]

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyVersionIdInput`<sup>Optional</sup> <a name="KmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionIdInput"></a>

```csharp
public string KmsKeyVersionIdInput { get; }
```

- *Type:* string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowDetailsInput`<sup>Optional</sup> <a name="MaintenanceWindowDetailsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetailsInput"></a>

```csharp
public DatabaseDbSystemMaintenanceWindowDetails MaintenanceWindowDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `RecoStorageSizeInGbInput`<sup>Optional</sup> <a name="RecoStorageSizeInGbInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGbInput"></a>

```csharp
public double RecoStorageSizeInGbInput { get; }
```

- *Type:* double

---

##### `SecurityAttributesInput`<sup>Optional</sup> <a name="SecurityAttributesInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `SourceDbSystemIdInput`<sup>Optional</sup> <a name="SourceDbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemIdInput"></a>

```csharp
public string SourceDbSystemIdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `SparseDiskgroupInput`<sup>Optional</sup> <a name="SparseDiskgroupInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroupInput"></a>

```csharp
public object SparseDiskgroupInput { get; }
```

- *Type:* object

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeysInput"></a>

```csharp
public string[] SshPublicKeysInput { get; }
```

- *Type:* string[]

---

##### `StorageVolumePerformanceModeInput`<sup>Optional</sup> <a name="StorageVolumePerformanceModeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceModeInput"></a>

```csharp
public string StorageVolumePerformanceModeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `BackupNetworkNsgIds`<sup>Required</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIds"></a>

```csharp
public string[] BackupNetworkNsgIds { get; }
```

- *Type:* string[]

---

##### `BackupSubnetId`<sup>Required</sup> <a name="BackupSubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetId"></a>

```csharp
public string BackupSubnetId { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; }
```

- *Type:* string

---

##### `DataStoragePercentage`<sup>Required</sup> <a name="DataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentage"></a>

```csharp
public double DataStoragePercentage { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DiskRedundancy`<sup>Required</sup> <a name="DiskRedundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancy"></a>

```csharp
public string DiskRedundancy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FaultDomains`<sup>Required</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomains"></a>

```csharp
public string[] FaultDomains { get; }
```

- *Type:* string[]

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `RecoStorageSizeInGb`<sup>Required</sup> <a name="RecoStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGb"></a>

```csharp
public double RecoStorageSizeInGb { get; }
```

- *Type:* double

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceDbSystemId`<sup>Required</sup> <a name="SourceDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemId"></a>

```csharp
public string SourceDbSystemId { get; }
```

- *Type:* string

---

##### `SparseDiskgroup`<sup>Required</sup> <a name="SparseDiskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroup"></a>

```csharp
public object SparseDiskgroup { get; }
```

- *Type:* object

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; }
```

- *Type:* string[]

---

##### `StorageVolumePerformanceMode`<sup>Required</sup> <a name="StorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceMode"></a>

```csharp
public string StorageVolumePerformanceMode { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDbSystemConfig <a name="DatabaseDbSystemConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityDomain,
    string CompartmentId,
    DatabaseDbSystemDbHome DbHome,
    string Hostname,
    string Shape,
    string[] SshPublicKeys,
    string SubnetId,
    string[] BackupNetworkNsgIds = null,
    string BackupSubnetId = null,
    string ClusterName = null,
    double CpuCoreCount = null,
    string DatabaseEdition = null,
    DatabaseDbSystemDataCollectionOptions DataCollectionOptions = null,
    double DataStoragePercentage = null,
    double DataStorageSizeInGb = null,
    DatabaseDbSystemDbSystemOptions DbSystemOptions = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DiskRedundancy = null,
    string DisplayName = null,
    string Domain = null,
    string[] FaultDomains = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string KmsKeyId = null,
    string KmsKeyVersionId = null,
    string LicenseModel = null,
    DatabaseDbSystemMaintenanceWindowDetails MaintenanceWindowDetails = null,
    double NodeCount = null,
    string[] NsgIds = null,
    string PrivateIp = null,
    double RecoStorageSizeInGb = null,
    System.Collections.Generic.IDictionary<string, string> SecurityAttributes = null,
    string Source = null,
    string SourceDbSystemId = null,
    object SparseDiskgroup = null,
    string StorageVolumePerformanceMode = null,
    DatabaseDbSystemTimeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#availability_domain DatabaseDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#compartment_id DatabaseDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbHome">DbHome</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a></code> | db_home block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hostname DatabaseDbSystem#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#shape DatabaseDbSystem#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ssh_public_keys DatabaseDbSystem#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#subnet_id DatabaseDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_network_nsg_ids DatabaseDbSystem#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupSubnetId">BackupSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_subnet_id DatabaseDbSystem#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cluster_name DatabaseDbSystem#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cpu_core_count DatabaseDbSystem#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_edition DatabaseDbSystem#database_edition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStoragePercentage">DataStoragePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_percentage DatabaseDbSystem#data_storage_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_size_in_gb DatabaseDbSystem#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbSystemOptions">DbSystemOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a></code> | db_system_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.diskRedundancy">DiskRedundancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#disk_redundancy DatabaseDbSystem#disk_redundancy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#domain DatabaseDbSystem#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.faultDomains">FaultDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#fault_domains DatabaseDbSystem#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#license_model DatabaseDbSystem#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.maintenanceWindowDetails">MaintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a></code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nodeCount">NodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#node_count DatabaseDbSystem#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#nsg_ids DatabaseDbSystem#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#private_ip DatabaseDbSystem#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.recoStorageSizeInGb">RecoStorageSizeInGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#reco_storage_size_in_gb DatabaseDbSystem#reco_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.securityAttributes">SecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#security_attributes DatabaseDbSystem#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source DatabaseDbSystem#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sourceDbSystemId">SourceDbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source_db_system_id DatabaseDbSystem#source_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sparseDiskgroup">SparseDiskgroup</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#sparse_diskgroup DatabaseDbSystem#sparse_diskgroup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.storageVolumePerformanceMode">StorageVolumePerformanceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_volume_performance_mode DatabaseDbSystem#storage_volume_performance_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_zone DatabaseDbSystem#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#availability_domain DatabaseDbSystem#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#compartment_id DatabaseDbSystem#compartment_id}.

---

##### `DbHome`<sup>Required</sup> <a name="DbHome" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbHome"></a>

```csharp
public DatabaseDbSystemDbHome DbHome { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

db_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_home DatabaseDbSystem#db_home}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hostname DatabaseDbSystem#hostname}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#shape DatabaseDbSystem#shape}.

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ssh_public_keys DatabaseDbSystem#ssh_public_keys}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#subnet_id DatabaseDbSystem#subnet_id}.

---

##### `BackupNetworkNsgIds`<sup>Optional</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupNetworkNsgIds"></a>

```csharp
public string[] BackupNetworkNsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_network_nsg_ids DatabaseDbSystem#backup_network_nsg_ids}.

---

##### `BackupSubnetId`<sup>Optional</sup> <a name="BackupSubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupSubnetId"></a>

```csharp
public string BackupSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_subnet_id DatabaseDbSystem#backup_subnet_id}.

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cluster_name DatabaseDbSystem#cluster_name}.

---

##### `CpuCoreCount`<sup>Optional</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cpu_core_count DatabaseDbSystem#cpu_core_count}.

---

##### `DatabaseEdition`<sup>Optional</sup> <a name="DatabaseEdition" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_edition DatabaseDbSystem#database_edition}.

---

##### `DataCollectionOptions`<sup>Optional</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataCollectionOptions"></a>

```csharp
public DatabaseDbSystemDataCollectionOptions DataCollectionOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_collection_options DatabaseDbSystem#data_collection_options}

---

##### `DataStoragePercentage`<sup>Optional</sup> <a name="DataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStoragePercentage"></a>

```csharp
public double DataStoragePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_percentage DatabaseDbSystem#data_storage_percentage}.

---

##### `DataStorageSizeInGb`<sup>Optional</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_size_in_gb DatabaseDbSystem#data_storage_size_in_gb}.

---

##### `DbSystemOptions`<sup>Optional</sup> <a name="DbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbSystemOptions"></a>

```csharp
public DatabaseDbSystemDbSystemOptions DbSystemOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

db_system_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_system_options DatabaseDbSystem#db_system_options}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

##### `DiskRedundancy`<sup>Optional</sup> <a name="DiskRedundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.diskRedundancy"></a>

```csharp
public string DiskRedundancy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#disk_redundancy DatabaseDbSystem#disk_redundancy}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#domain DatabaseDbSystem#domain}.

---

##### `FaultDomains`<sup>Optional</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.faultDomains"></a>

```csharp
public string[] FaultDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#fault_domains DatabaseDbSystem#fault_domains}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}.

---

##### `KmsKeyVersionId`<sup>Optional</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#license_model DatabaseDbSystem#license_model}.

---

##### `MaintenanceWindowDetails`<sup>Optional</sup> <a name="MaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.maintenanceWindowDetails"></a>

```csharp
public DatabaseDbSystemMaintenanceWindowDetails MaintenanceWindowDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#maintenance_window_details DatabaseDbSystem#maintenance_window_details}

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#node_count DatabaseDbSystem#node_count}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#nsg_ids DatabaseDbSystem#nsg_ids}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#private_ip DatabaseDbSystem#private_ip}.

---

##### `RecoStorageSizeInGb`<sup>Optional</sup> <a name="RecoStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.recoStorageSizeInGb"></a>

```csharp
public double RecoStorageSizeInGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#reco_storage_size_in_gb DatabaseDbSystem#reco_storage_size_in_gb}.

---

##### `SecurityAttributes`<sup>Optional</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.securityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#security_attributes DatabaseDbSystem#security_attributes}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source DatabaseDbSystem#source}.

---

##### `SourceDbSystemId`<sup>Optional</sup> <a name="SourceDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sourceDbSystemId"></a>

```csharp
public string SourceDbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source_db_system_id DatabaseDbSystem#source_db_system_id}.

---

##### `SparseDiskgroup`<sup>Optional</sup> <a name="SparseDiskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sparseDiskgroup"></a>

```csharp
public object SparseDiskgroup { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#sparse_diskgroup DatabaseDbSystem#sparse_diskgroup}.

---

##### `StorageVolumePerformanceMode`<sup>Optional</sup> <a name="StorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.storageVolumePerformanceMode"></a>

```csharp
public string StorageVolumePerformanceMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_volume_performance_mode DatabaseDbSystem#storage_volume_performance_mode}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeouts"></a>

```csharp
public DatabaseDbSystemTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#timeouts DatabaseDbSystem#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_zone DatabaseDbSystem#time_zone}.

---

### DatabaseDbSystemDataCollectionOptions <a name="DatabaseDbSystemDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDataCollectionOptions {
    object IsDiagnosticsEventsEnabled = null,
    object IsHealthMonitoringEnabled = null,
    object IsIncidentLogsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_diagnostics_events_enabled DatabaseDbSystem#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_health_monitoring_enabled DatabaseDbSystem#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_incident_logs_enabled DatabaseDbSystem#is_incident_logs_enabled}. |

---

##### `IsDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```csharp
public object IsDiagnosticsEventsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_diagnostics_events_enabled DatabaseDbSystem#is_diagnostics_events_enabled}.

---

##### `IsHealthMonitoringEnabled`<sup>Optional</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```csharp
public object IsHealthMonitoringEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_health_monitoring_enabled DatabaseDbSystem#is_health_monitoring_enabled}.

---

##### `IsIncidentLogsEnabled`<sup>Optional</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```csharp
public object IsIncidentLogsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_incident_logs_enabled DatabaseDbSystem#is_incident_logs_enabled}.

---

### DatabaseDbSystemDbHome <a name="DatabaseDbSystemDbHome" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDbHome {
    DatabaseDbSystemDbHomeDatabase Database,
    object CreateAsync = null,
    string DatabaseSoftwareImageId = null,
    string DbVersion = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.database">Database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a></code> | database block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.createAsync">CreateAsync</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create_async DatabaseDbSystem#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.dbVersion">DbVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_version DatabaseDbSystem#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.database"></a>

```csharp
public DatabaseDbSystemDbHomeDatabase Database { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database DatabaseDbSystem#database}

---

##### `CreateAsync`<sup>Optional</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.createAsync"></a>

```csharp
public object CreateAsync { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create_async DatabaseDbSystem#create_async}.

---

##### `DatabaseSoftwareImageId`<sup>Optional</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}.

---

##### `DbVersion`<sup>Optional</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.dbVersion"></a>

```csharp
public string DbVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_version DatabaseDbSystem#db_version}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

### DatabaseDbSystemDbHomeDatabase <a name="DatabaseDbSystemDbHomeDatabase" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDbHomeDatabase {
    string AdminPassword,
    string BackupId = null,
    string BackupTdePassword = null,
    string CharacterSet = null,
    string DatabaseId = null,
    string DatabaseSoftwareImageId = null,
    DatabaseDbSystemDbHomeDatabaseDbBackupConfig DbBackupConfig = null,
    string DbDomain = null,
    string DbName = null,
    string DbUniqueName = null,
    string DbWorkload = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string KmsKeyId = null,
    string KmsKeyVersionId = null,
    string NcharacterSet = null,
    string PdbName = null,
    string[] PluggableDatabases = null,
    string TdeWalletPassword = null,
    string TimeStampForPointInTimeRecovery = null,
    string VaultId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#admin_password DatabaseDbSystem#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupId">BackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_id DatabaseDbSystem#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupTdePassword">BackupTdePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_tde_password DatabaseDbSystem#backup_tde_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#character_set DatabaseDbSystem#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseId">DatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_id DatabaseDbSystem#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbBackupConfig">DbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a></code> | db_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbDomain">DbDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_domain DatabaseDbSystem#db_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbName">DbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_name DatabaseDbSystem#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbUniqueName">DbUniqueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_unique_name DatabaseDbSystem#db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_workload DatabaseDbSystem#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ncharacter_set DatabaseDbSystem#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pdbName">PdbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pdb_name DatabaseDbSystem#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pluggableDatabases">PluggableDatabases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pluggable_databases DatabaseDbSystem#pluggable_databases}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#tde_wallet_password DatabaseDbSystem#tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.timeStampForPointInTimeRecovery">TimeStampForPointInTimeRecovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_stamp_for_point_in_time_recovery DatabaseDbSystem#time_stamp_for_point_in_time_recovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#vault_id DatabaseDbSystem#vault_id}. |

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#admin_password DatabaseDbSystem#admin_password}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupId"></a>

```csharp
public string BackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_id DatabaseDbSystem#backup_id}.

---

##### `BackupTdePassword`<sup>Optional</sup> <a name="BackupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupTdePassword"></a>

```csharp
public string BackupTdePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_tde_password DatabaseDbSystem#backup_tde_password}.

---

##### `CharacterSet`<sup>Optional</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#character_set DatabaseDbSystem#character_set}.

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_id DatabaseDbSystem#database_id}.

---

##### `DatabaseSoftwareImageId`<sup>Optional</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}.

---

##### `DbBackupConfig`<sup>Optional</sup> <a name="DbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbBackupConfig"></a>

```csharp
public DatabaseDbSystemDbHomeDatabaseDbBackupConfig DbBackupConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_backup_config DatabaseDbSystem#db_backup_config}

---

##### `DbDomain`<sup>Optional</sup> <a name="DbDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbDomain"></a>

```csharp
public string DbDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_domain DatabaseDbSystem#db_domain}.

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbName"></a>

```csharp
public string DbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_name DatabaseDbSystem#db_name}.

---

##### `DbUniqueName`<sup>Optional</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbUniqueName"></a>

```csharp
public string DbUniqueName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_unique_name DatabaseDbSystem#db_unique_name}.

---

##### `DbWorkload`<sup>Optional</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_workload DatabaseDbSystem#db_workload}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}.

---

##### `KmsKeyVersionId`<sup>Optional</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}.

---

##### `NcharacterSet`<sup>Optional</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ncharacter_set DatabaseDbSystem#ncharacter_set}.

---

##### `PdbName`<sup>Optional</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pdbName"></a>

```csharp
public string PdbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pdb_name DatabaseDbSystem#pdb_name}.

---

##### `PluggableDatabases`<sup>Optional</sup> <a name="PluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pluggableDatabases"></a>

```csharp
public string[] PluggableDatabases { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pluggable_databases DatabaseDbSystem#pluggable_databases}.

---

##### `TdeWalletPassword`<sup>Optional</sup> <a name="TdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.tdeWalletPassword"></a>

```csharp
public string TdeWalletPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#tde_wallet_password DatabaseDbSystem#tde_wallet_password}.

---

##### `TimeStampForPointInTimeRecovery`<sup>Optional</sup> <a name="TimeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.timeStampForPointInTimeRecovery"></a>

```csharp
public string TimeStampForPointInTimeRecovery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_stamp_for_point_in_time_recovery DatabaseDbSystem#time_stamp_for_point_in_time_recovery}.

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#vault_id DatabaseDbSystem#vault_id}.

---

### DatabaseDbSystemDbHomeDatabaseConnectionStrings <a name="DatabaseDbSystemDbHomeDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDbHomeDatabaseConnectionStrings {

};
```


### DatabaseDbSystemDbHomeDatabaseDbBackupConfig <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDbHomeDatabaseDbBackupConfig {
    object AutoBackupEnabled = null,
    string AutoBackupWindow = null,
    string AutoFullBackupDay = null,
    string AutoFullBackupWindow = null,
    string BackupDeletionPolicy = null,
    object BackupDestinationDetails = null,
    double RecoveryWindowInDays = null,
    object RunImmediateFullBackup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupEnabled">AutoBackupEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_enabled DatabaseDbSystem#auto_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupWindow">AutoBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_window DatabaseDbSystem#auto_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupDay">AutoFullBackupDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_day DatabaseDbSystem#auto_full_backup_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupWindow">AutoFullBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_window DatabaseDbSystem#auto_full_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDeletionPolicy">BackupDeletionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_deletion_policy DatabaseDbSystem#backup_deletion_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code>object</code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#recovery_window_in_days DatabaseDbSystem#recovery_window_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.runImmediateFullBackup">RunImmediateFullBackup</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#run_immediate_full_backup DatabaseDbSystem#run_immediate_full_backup}. |

---

##### `AutoBackupEnabled`<sup>Optional</sup> <a name="AutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupEnabled"></a>

```csharp
public object AutoBackupEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_enabled DatabaseDbSystem#auto_backup_enabled}.

---

##### `AutoBackupWindow`<sup>Optional</sup> <a name="AutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupWindow"></a>

```csharp
public string AutoBackupWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_window DatabaseDbSystem#auto_backup_window}.

---

##### `AutoFullBackupDay`<sup>Optional</sup> <a name="AutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupDay"></a>

```csharp
public string AutoFullBackupDay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_day DatabaseDbSystem#auto_full_backup_day}.

---

##### `AutoFullBackupWindow`<sup>Optional</sup> <a name="AutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupWindow"></a>

```csharp
public string AutoFullBackupWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_window DatabaseDbSystem#auto_full_backup_window}.

---

##### `BackupDeletionPolicy`<sup>Optional</sup> <a name="BackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDeletionPolicy"></a>

```csharp
public string BackupDeletionPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_deletion_policy DatabaseDbSystem#backup_deletion_policy}.

---

##### `BackupDestinationDetails`<sup>Optional</sup> <a name="BackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDestinationDetails"></a>

```csharp
public object BackupDestinationDetails { get; set; }
```

- *Type:* object

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_destination_details DatabaseDbSystem#backup_destination_details}

---

##### `RecoveryWindowInDays`<sup>Optional</sup> <a name="RecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.recoveryWindowInDays"></a>

```csharp
public double RecoveryWindowInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#recovery_window_in_days DatabaseDbSystem#recovery_window_in_days}.

---

##### `RunImmediateFullBackup`<sup>Optional</sup> <a name="RunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.runImmediateFullBackup"></a>

```csharp
public object RunImmediateFullBackup { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#run_immediate_full_backup DatabaseDbSystem#run_immediate_full_backup}.

---

### DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails {
    string DbrsPolicyId = null,
    string Id = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId">DbrsPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#dbrs_policy_id DatabaseDbSystem#dbrs_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#type DatabaseDbSystem#type}. |

---

##### `DbrsPolicyId`<sup>Optional</sup> <a name="DbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId"></a>

```csharp
public string DbrsPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#dbrs_policy_id DatabaseDbSystem#dbrs_policy_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#type DatabaseDbSystem#type}.

---

### DatabaseDbSystemDbSystemOptions <a name="DatabaseDbSystemDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDbSystemOptions {
    string StorageManagement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions.property.storageManagement">StorageManagement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_management DatabaseDbSystem#storage_management}. |

---

##### `StorageManagement`<sup>Optional</sup> <a name="StorageManagement" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions.property.storageManagement"></a>

```csharp
public string StorageManagement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_management DatabaseDbSystem#storage_management}.

---

### DatabaseDbSystemIormConfigCache <a name="DatabaseDbSystemIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemIormConfigCache {

};
```


### DatabaseDbSystemIormConfigCacheDbPlans <a name="DatabaseDbSystemIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemIormConfigCacheDbPlans {

};
```


### DatabaseDbSystemMaintenanceWindow <a name="DatabaseDbSystemMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindow {

};
```


### DatabaseDbSystemMaintenanceWindowDaysOfWeek <a name="DatabaseDbSystemMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowDaysOfWeek {

};
```


### DatabaseDbSystemMaintenanceWindowDetails <a name="DatabaseDbSystemMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowDetails {
    double CustomActionTimeoutInMins = null,
    object DaysOfWeek = null,
    double[] HoursOfDay = null,
    object IsCustomActionTimeoutEnabled = null,
    object IsMonthlyPatchingEnabled = null,
    double LeadTimeInWeeks = null,
    object Months = null,
    string PatchingMode = null,
    string Preference = null,
    object SkipRu = null,
    double[] WeeksOfMonth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#custom_action_timeout_in_mins DatabaseDbSystem#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.daysOfWeek">DaysOfWeek</a></code> | <code>object</code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hours_of_day DatabaseDbSystem#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_custom_action_timeout_enabled DatabaseDbSystem#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_monthly_patching_enabled DatabaseDbSystem#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#lead_time_in_weeks DatabaseDbSystem#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.months">Months</a></code> | <code>object</code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.patchingMode">PatchingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#patching_mode DatabaseDbSystem#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.preference">Preference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#preference DatabaseDbSystem#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.skipRu">SkipRu</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#skip_ru DatabaseDbSystem#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#weeks_of_month DatabaseDbSystem#weeks_of_month}. |

---

##### `CustomActionTimeoutInMins`<sup>Optional</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#custom_action_timeout_in_mins DatabaseDbSystem#custom_action_timeout_in_mins}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.daysOfWeek"></a>

```csharp
public object DaysOfWeek { get; set; }
```

- *Type:* object

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#days_of_week DatabaseDbSystem#days_of_week}

---

##### `HoursOfDay`<sup>Optional</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hours_of_day DatabaseDbSystem#hours_of_day}.

---

##### `IsCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled"></a>

```csharp
public object IsCustomActionTimeoutEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_custom_action_timeout_enabled DatabaseDbSystem#is_custom_action_timeout_enabled}.

---

##### `IsMonthlyPatchingEnabled`<sup>Optional</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isMonthlyPatchingEnabled"></a>

```csharp
public object IsMonthlyPatchingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_monthly_patching_enabled DatabaseDbSystem#is_monthly_patching_enabled}.

---

##### `LeadTimeInWeeks`<sup>Optional</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#lead_time_in_weeks DatabaseDbSystem#lead_time_in_weeks}.

---

##### `Months`<sup>Optional</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.months"></a>

```csharp
public object Months { get; set; }
```

- *Type:* object

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#months DatabaseDbSystem#months}

---

##### `PatchingMode`<sup>Optional</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.patchingMode"></a>

```csharp
public string PatchingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#patching_mode DatabaseDbSystem#patching_mode}.

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.preference"></a>

```csharp
public string Preference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#preference DatabaseDbSystem#preference}.

---

##### `SkipRu`<sup>Optional</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.skipRu"></a>

```csharp
public object SkipRu { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#skip_ru DatabaseDbSystem#skip_ru}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#weeks_of_month DatabaseDbSystem#weeks_of_month}.

---

### DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek <a name="DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}.

---

### DatabaseDbSystemMaintenanceWindowDetailsMonths <a name="DatabaseDbSystemMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowDetailsMonths {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}.

---

### DatabaseDbSystemMaintenanceWindowMonths <a name="DatabaseDbSystemMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowMonths {

};
```


### DatabaseDbSystemTimeouts <a name="DatabaseDbSystemTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create DatabaseDbSystem#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#delete DatabaseDbSystem#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#update DatabaseDbSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create DatabaseDbSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#delete DatabaseDbSystem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#update DatabaseDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDbSystemDataCollectionOptionsOutputReference <a name="DatabaseDbSystemDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDataCollectionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">ResetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">ResetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">ResetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDiagnosticsEventsEnabled` <a name="ResetIsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```csharp
private void ResetIsDiagnosticsEventsEnabled()
```

##### `ResetIsHealthMonitoringEnabled` <a name="ResetIsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```csharp
private void ResetIsHealthMonitoringEnabled()
```

##### `ResetIsIncidentLogsEnabled` <a name="ResetIsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```csharp
private void ResetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">IsDiagnosticsEventsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">IsHealthMonitoringEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">IsIncidentLogsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```csharp
public object IsDiagnosticsEventsEnabledInput { get; }
```

- *Type:* object

---

##### `IsHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="IsHealthMonitoringEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```csharp
public object IsHealthMonitoringEnabledInput { get; }
```

- *Type:* object

---

##### `IsIncidentLogsEnabledInput`<sup>Optional</sup> <a name="IsIncidentLogsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```csharp
public object IsIncidentLogsEnabledInput { get; }
```

- *Type:* object

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```csharp
public object IsDiagnosticsEventsEnabled { get; }
```

- *Type:* object

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```csharp
public object IsHealthMonitoringEnabled { get; }
```

- *Type:* object

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```csharp
public object IsIncidentLogsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemDataCollectionOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

---


### DatabaseDbSystemDbHomeDatabaseConnectionStringsList <a name="DatabaseDbSystemDbHomeDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDbHomeDatabaseConnectionStringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.get"></a>

```csharp
private DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference <a name="DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbDefault">CdbDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbIpDefault">CdbIpDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings">DatabaseDbSystemDbHomeDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```csharp
public StringMap AllConnectionStrings { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CdbDefault`<sup>Required</sup> <a name="CdbDefault" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbDefault"></a>

```csharp
public string CdbDefault { get; }
```

- *Type:* string

---

##### `CdbIpDefault`<sup>Required</sup> <a name="CdbIpDefault" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbIpDefault"></a>

```csharp
public string CdbIpDefault { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemDbHomeDatabaseConnectionStrings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings">DatabaseDbSystemDbHomeDatabaseConnectionStrings</a>

---


### DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get"></a>

```csharp
private DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId">ResetDbrsPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbrsPolicyId` <a name="ResetDbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId"></a>

```csharp
private void ResetDbrsPolicyId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput">DbrsPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">DbrsPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbrsPolicyIdInput`<sup>Optional</sup> <a name="DbrsPolicyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput"></a>

```csharp
public string DbrsPolicyIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DbrsPolicyId`<sup>Required</sup> <a name="DbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```csharp
public string DbrsPolicyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails">PutBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled">ResetAutoBackupEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow">ResetAutoBackupWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay">ResetAutoFullBackupDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow">ResetAutoFullBackupWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy">ResetBackupDeletionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails">ResetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays">ResetRecoveryWindowInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup">ResetRunImmediateFullBackup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupDestinationDetails` <a name="PutBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails"></a>

```csharp
private void PutBackupDestinationDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoBackupEnabled` <a name="ResetAutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled"></a>

```csharp
private void ResetAutoBackupEnabled()
```

##### `ResetAutoBackupWindow` <a name="ResetAutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow"></a>

```csharp
private void ResetAutoBackupWindow()
```

##### `ResetAutoFullBackupDay` <a name="ResetAutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay"></a>

```csharp
private void ResetAutoFullBackupDay()
```

##### `ResetAutoFullBackupWindow` <a name="ResetAutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow"></a>

```csharp
private void ResetAutoFullBackupWindow()
```

##### `ResetBackupDeletionPolicy` <a name="ResetBackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy"></a>

```csharp
private void ResetBackupDeletionPolicy()
```

##### `ResetBackupDestinationDetails` <a name="ResetBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```csharp
private void ResetBackupDestinationDetails()
```

##### `ResetRecoveryWindowInDays` <a name="ResetRecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```csharp
private void ResetRecoveryWindowInDays()
```

##### `ResetRunImmediateFullBackup` <a name="ResetRunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup"></a>

```csharp
private void ResetRunImmediateFullBackup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput">AutoBackupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput">AutoBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput">AutoFullBackupDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput">AutoFullBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput">BackupDeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput">BackupDestinationDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput">RecoveryWindowInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput">RunImmediateFullBackupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled">AutoBackupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindow">AutoBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay">AutoFullBackupDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow">AutoFullBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy">BackupDeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup">RunImmediateFullBackup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupDestinationDetails`<sup>Required</sup> <a name="BackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```csharp
public DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList BackupDestinationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList</a>

---

##### `AutoBackupEnabledInput`<sup>Optional</sup> <a name="AutoBackupEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput"></a>

```csharp
public object AutoBackupEnabledInput { get; }
```

- *Type:* object

---

##### `AutoBackupWindowInput`<sup>Optional</sup> <a name="AutoBackupWindowInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput"></a>

```csharp
public string AutoBackupWindowInput { get; }
```

- *Type:* string

---

##### `AutoFullBackupDayInput`<sup>Optional</sup> <a name="AutoFullBackupDayInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput"></a>

```csharp
public string AutoFullBackupDayInput { get; }
```

- *Type:* string

---

##### `AutoFullBackupWindowInput`<sup>Optional</sup> <a name="AutoFullBackupWindowInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput"></a>

```csharp
public string AutoFullBackupWindowInput { get; }
```

- *Type:* string

---

##### `BackupDeletionPolicyInput`<sup>Optional</sup> <a name="BackupDeletionPolicyInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput"></a>

```csharp
public string BackupDeletionPolicyInput { get; }
```

- *Type:* string

---

##### `BackupDestinationDetailsInput`<sup>Optional</sup> <a name="BackupDestinationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```csharp
public object BackupDestinationDetailsInput { get; }
```

- *Type:* object

---

##### `RecoveryWindowInDaysInput`<sup>Optional</sup> <a name="RecoveryWindowInDaysInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```csharp
public double RecoveryWindowInDaysInput { get; }
```

- *Type:* double

---

##### `RunImmediateFullBackupInput`<sup>Optional</sup> <a name="RunImmediateFullBackupInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput"></a>

```csharp
public object RunImmediateFullBackupInput { get; }
```

- *Type:* object

---

##### `AutoBackupEnabled`<sup>Required</sup> <a name="AutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```csharp
public object AutoBackupEnabled { get; }
```

- *Type:* object

---

##### `AutoBackupWindow`<sup>Required</sup> <a name="AutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindow"></a>

```csharp
public string AutoBackupWindow { get; }
```

- *Type:* string

---

##### `AutoFullBackupDay`<sup>Required</sup> <a name="AutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```csharp
public string AutoFullBackupDay { get; }
```

- *Type:* string

---

##### `AutoFullBackupWindow`<sup>Required</sup> <a name="AutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```csharp
public string AutoFullBackupWindow { get; }
```

- *Type:* string

---

##### `BackupDeletionPolicy`<sup>Required</sup> <a name="BackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```csharp
public string BackupDeletionPolicy { get; }
```

- *Type:* string

---

##### `RecoveryWindowInDays`<sup>Required</sup> <a name="RecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```csharp
public double RecoveryWindowInDays { get; }
```

- *Type:* double

---

##### `RunImmediateFullBackup`<sup>Required</sup> <a name="RunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup"></a>

```csharp
public object RunImmediateFullBackup { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemDbHomeDatabaseDbBackupConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

---


### DatabaseDbSystemDbHomeDatabaseOutputReference <a name="DatabaseDbSystemDbHomeDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDbHomeDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig">PutDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupTdePassword">ResetBackupTdePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetCharacterSet">ResetCharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseSoftwareImageId">ResetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbBackupConfig">ResetDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbDomain">ResetDbDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbName">ResetDbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbUniqueName">ResetDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbWorkload">ResetDbWorkload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyVersionId">ResetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetNcharacterSet">ResetNcharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPdbName">ResetPdbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPluggableDatabases">ResetPluggableDatabases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTdeWalletPassword">ResetTdeWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTimeStampForPointInTimeRecovery">ResetTimeStampForPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetVaultId">ResetVaultId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDbBackupConfig` <a name="PutDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig"></a>

```csharp
private void PutDbBackupConfig(DatabaseDbSystemDbHomeDatabaseDbBackupConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

---

##### `ResetBackupId` <a name="ResetBackupId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupId"></a>

```csharp
private void ResetBackupId()
```

##### `ResetBackupTdePassword` <a name="ResetBackupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupTdePassword"></a>

```csharp
private void ResetBackupTdePassword()
```

##### `ResetCharacterSet` <a name="ResetCharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetCharacterSet"></a>

```csharp
private void ResetCharacterSet()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseId"></a>

```csharp
private void ResetDatabaseId()
```

##### `ResetDatabaseSoftwareImageId` <a name="ResetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseSoftwareImageId"></a>

```csharp
private void ResetDatabaseSoftwareImageId()
```

##### `ResetDbBackupConfig` <a name="ResetDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbBackupConfig"></a>

```csharp
private void ResetDbBackupConfig()
```

##### `ResetDbDomain` <a name="ResetDbDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbDomain"></a>

```csharp
private void ResetDbDomain()
```

##### `ResetDbName` <a name="ResetDbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbName"></a>

```csharp
private void ResetDbName()
```

##### `ResetDbUniqueName` <a name="ResetDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbUniqueName"></a>

```csharp
private void ResetDbUniqueName()
```

##### `ResetDbWorkload` <a name="ResetDbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbWorkload"></a>

```csharp
private void ResetDbWorkload()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetKmsKeyVersionId` <a name="ResetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyVersionId"></a>

```csharp
private void ResetKmsKeyVersionId()
```

##### `ResetNcharacterSet` <a name="ResetNcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetNcharacterSet"></a>

```csharp
private void ResetNcharacterSet()
```

##### `ResetPdbName` <a name="ResetPdbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPdbName"></a>

```csharp
private void ResetPdbName()
```

##### `ResetPluggableDatabases` <a name="ResetPluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPluggableDatabases"></a>

```csharp
private void ResetPluggableDatabases()
```

##### `ResetTdeWalletPassword` <a name="ResetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTdeWalletPassword"></a>

```csharp
private void ResetTdeWalletPassword()
```

##### `ResetTimeStampForPointInTimeRecovery` <a name="ResetTimeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTimeStampForPointInTimeRecovery"></a>

```csharp
private void ResetTimeStampForPointInTimeRecovery()
```

##### `ResetVaultId` <a name="ResetVaultId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetVaultId"></a>

```csharp
private void ResetVaultId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList">DatabaseDbSystemDbHomeDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfig">DbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference">DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupIdInput">BackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePasswordInput">BackupTdePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSetInput">CharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageIdInput">DatabaseSoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfigInput">DbBackupConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomainInput">DbDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbNameInput">DbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueNameInput">DbUniqueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkloadInput">DbWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionIdInput">KmsKeyVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSetInput">NcharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbNameInput">PdbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabasesInput">PluggableDatabasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput">TdeWalletPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecoveryInput">TimeStampForPointInTimeRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePassword">BackupTdePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomain">DbDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueName">DbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbName">PdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabases">PluggableDatabases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecovery">TimeStampForPointInTimeRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.connectionStrings"></a>

```csharp
public DatabaseDbSystemDbHomeDatabaseConnectionStringsList ConnectionStrings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList">DatabaseDbSystemDbHomeDatabaseConnectionStringsList</a>

---

##### `DbBackupConfig`<sup>Required</sup> <a name="DbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfig"></a>

```csharp
public DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference DbBackupConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference">DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupIdInput"></a>

```csharp
public string BackupIdInput { get; }
```

- *Type:* string

---

##### `BackupTdePasswordInput`<sup>Optional</sup> <a name="BackupTdePasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePasswordInput"></a>

```csharp
public string BackupTdePasswordInput { get; }
```

- *Type:* string

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSetInput"></a>

```csharp
public string CharacterSetInput { get; }
```

- *Type:* string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageIdInput`<sup>Optional</sup> <a name="DatabaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageIdInput"></a>

```csharp
public string DatabaseSoftwareImageIdInput { get; }
```

- *Type:* string

---

##### `DbBackupConfigInput`<sup>Optional</sup> <a name="DbBackupConfigInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfigInput"></a>

```csharp
public DatabaseDbSystemDbHomeDatabaseDbBackupConfig DbBackupConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

---

##### `DbDomainInput`<sup>Optional</sup> <a name="DbDomainInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomainInput"></a>

```csharp
public string DbDomainInput { get; }
```

- *Type:* string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbNameInput"></a>

```csharp
public string DbNameInput { get; }
```

- *Type:* string

---

##### `DbUniqueNameInput`<sup>Optional</sup> <a name="DbUniqueNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueNameInput"></a>

```csharp
public string DbUniqueNameInput { get; }
```

- *Type:* string

---

##### `DbWorkloadInput`<sup>Optional</sup> <a name="DbWorkloadInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkloadInput"></a>

```csharp
public string DbWorkloadInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyVersionIdInput`<sup>Optional</sup> <a name="KmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionIdInput"></a>

```csharp
public string KmsKeyVersionIdInput { get; }
```

- *Type:* string

---

##### `NcharacterSetInput`<sup>Optional</sup> <a name="NcharacterSetInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSetInput"></a>

```csharp
public string NcharacterSetInput { get; }
```

- *Type:* string

---

##### `PdbNameInput`<sup>Optional</sup> <a name="PdbNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbNameInput"></a>

```csharp
public string PdbNameInput { get; }
```

- *Type:* string

---

##### `PluggableDatabasesInput`<sup>Optional</sup> <a name="PluggableDatabasesInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabasesInput"></a>

```csharp
public string[] PluggableDatabasesInput { get; }
```

- *Type:* string[]

---

##### `TdeWalletPasswordInput`<sup>Optional</sup> <a name="TdeWalletPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput"></a>

```csharp
public string TdeWalletPasswordInput { get; }
```

- *Type:* string

---

##### `TimeStampForPointInTimeRecoveryInput`<sup>Optional</sup> <a name="TimeStampForPointInTimeRecoveryInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecoveryInput"></a>

```csharp
public string TimeStampForPointInTimeRecoveryInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `BackupTdePassword`<sup>Required</sup> <a name="BackupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePassword"></a>

```csharp
public string BackupTdePassword { get; }
```

- *Type:* string

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; }
```

- *Type:* string

---

##### `DbDomain`<sup>Required</sup> <a name="DbDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomain"></a>

```csharp
public string DbDomain { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueName"></a>

```csharp
public string DbUniqueName { get; }
```

- *Type:* string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionId"></a>

```csharp
public string KmsKeyVersionId { get; }
```

- *Type:* string

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; }
```

- *Type:* string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbName"></a>

```csharp
public string PdbName { get; }
```

- *Type:* string

---

##### `PluggableDatabases`<sup>Required</sup> <a name="PluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabases"></a>

```csharp
public string[] PluggableDatabases { get; }
```

- *Type:* string[]

---

##### `TdeWalletPassword`<sup>Required</sup> <a name="TdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPassword"></a>

```csharp
public string TdeWalletPassword { get; }
```

- *Type:* string

---

##### `TimeStampForPointInTimeRecovery`<sup>Required</sup> <a name="TimeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecovery"></a>

```csharp
public string TimeStampForPointInTimeRecovery { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemDbHomeDatabase InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

---


### DatabaseDbSystemDbHomeOutputReference <a name="DatabaseDbSystemDbHomeOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDbHomeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetCreateAsync">ResetCreateAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDatabaseSoftwareImageId">ResetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDbVersion">ResetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabase` <a name="PutDatabase" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase"></a>

```csharp
private void PutDatabase(DatabaseDbSystemDbHomeDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

---

##### `ResetCreateAsync` <a name="ResetCreateAsync" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetCreateAsync"></a>

```csharp
private void ResetCreateAsync()
```

##### `ResetDatabaseSoftwareImageId` <a name="ResetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDatabaseSoftwareImageId"></a>

```csharp
private void ResetDatabaseSoftwareImageId()
```

##### `ResetDbVersion` <a name="ResetDbVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDbVersion"></a>

```csharp
private void ResetDbVersion()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.database">Database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference">DatabaseDbSystemDbHomeDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbHomeLocation">DbHomeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lastPatchHistoryEntryId">LastPatchHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsyncInput">CreateAsyncInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseInput">DatabaseInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageIdInput">DatabaseSoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersionInput">DbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsync">CreateAsync</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.database"></a>

```csharp
public DatabaseDbSystemDbHomeDatabaseOutputReference Database { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference">DatabaseDbSystemDbHomeDatabaseOutputReference</a>

---

##### `DbHomeLocation`<sup>Required</sup> <a name="DbHomeLocation" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbHomeLocation"></a>

```csharp
public string DbHomeLocation { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastPatchHistoryEntryId`<sup>Required</sup> <a name="LastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lastPatchHistoryEntryId"></a>

```csharp
public string LastPatchHistoryEntryId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `CreateAsyncInput`<sup>Optional</sup> <a name="CreateAsyncInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsyncInput"></a>

```csharp
public object CreateAsyncInput { get; }
```

- *Type:* object

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseInput"></a>

```csharp
public DatabaseDbSystemDbHomeDatabase DatabaseInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

---

##### `DatabaseSoftwareImageIdInput`<sup>Optional</sup> <a name="DatabaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageIdInput"></a>

```csharp
public string DatabaseSoftwareImageIdInput { get; }
```

- *Type:* string

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersionInput"></a>

```csharp
public string DbVersionInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CreateAsync`<sup>Required</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsync"></a>

```csharp
public object CreateAsync { get; }
```

- *Type:* object

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemDbHome InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

---


### DatabaseDbSystemDbSystemOptionsOutputReference <a name="DatabaseDbSystemDbSystemOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemDbSystemOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resetStorageManagement">ResetStorageManagement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageManagement` <a name="ResetStorageManagement" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resetStorageManagement"></a>

```csharp
private void ResetStorageManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagementInput">StorageManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagement">StorageManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageManagementInput`<sup>Optional</sup> <a name="StorageManagementInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagementInput"></a>

```csharp
public string StorageManagementInput { get; }
```

- *Type:* string

---

##### `StorageManagement`<sup>Required</sup> <a name="StorageManagement" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagement"></a>

```csharp
public string StorageManagement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemDbSystemOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

---


### DatabaseDbSystemIormConfigCacheDbPlansList <a name="DatabaseDbSystemIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemIormConfigCacheDbPlansList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.get"></a>

```csharp
private DatabaseDbSystemIormConfigCacheDbPlansOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDbSystemIormConfigCacheDbPlansOutputReference <a name="DatabaseDbSystemIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemIormConfigCacheDbPlansOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">FlashCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.share">Share</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans">DatabaseDbSystemIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `FlashCacheLimit`<sup>Required</sup> <a name="FlashCacheLimit" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```csharp
public string FlashCacheLimit { get; }
```

- *Type:* string

---

##### `Share`<sup>Required</sup> <a name="Share" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.share"></a>

```csharp
public double Share { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemIormConfigCacheDbPlans InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans">DatabaseDbSystemIormConfigCacheDbPlans</a>

---


### DatabaseDbSystemIormConfigCacheList <a name="DatabaseDbSystemIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemIormConfigCacheList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.get"></a>

```csharp
private DatabaseDbSystemIormConfigCacheOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDbSystemIormConfigCacheOutputReference <a name="DatabaseDbSystemIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemIormConfigCacheOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbPlans">DbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList">DatabaseDbSystemIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.objective">Objective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache">DatabaseDbSystemIormConfigCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbPlans`<sup>Required</sup> <a name="DbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbPlans"></a>

```csharp
public DatabaseDbSystemIormConfigCacheDbPlansList DbPlans { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList">DatabaseDbSystemIormConfigCacheDbPlansList</a>

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Objective`<sup>Required</sup> <a name="Objective" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.objective"></a>

```csharp
public string Objective { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemIormConfigCache InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache">DatabaseDbSystemIormConfigCache</a>

---


### DatabaseDbSystemMaintenanceWindowDaysOfWeekList <a name="DatabaseDbSystemMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.get"></a>

```csharp
private DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek">DatabaseDbSystemMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemMaintenanceWindowDaysOfWeek InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek">DatabaseDbSystemMaintenanceWindowDaysOfWeek</a>

---


### DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList <a name="DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```csharp
private DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseDbSystemMaintenanceWindowDetailsMonthsList <a name="DatabaseDbSystemMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowDetailsMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.get"></a>

```csharp
private DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference <a name="DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseDbSystemMaintenanceWindowDetailsOutputReference <a name="DatabaseDbSystemMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putDaysOfWeek">PutDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putMonths">PutMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins">ResetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetHoursOfDay">ResetHoursOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled">ResetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled">ResetIsMonthlyPatchingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks">ResetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetMonths">ResetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPatchingMode">ResetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetSkipRu">ResetSkipRu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDaysOfWeek` <a name="PutDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putDaysOfWeek"></a>

```csharp
private void PutDaysOfWeek(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* object

---

##### `PutMonths` <a name="PutMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putMonths"></a>

```csharp
private void PutMonths(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putMonths.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomActionTimeoutInMins` <a name="ResetCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins"></a>

```csharp
private void ResetCustomActionTimeoutInMins()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetHoursOfDay` <a name="ResetHoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetHoursOfDay"></a>

```csharp
private void ResetHoursOfDay()
```

##### `ResetIsCustomActionTimeoutEnabled` <a name="ResetIsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```csharp
private void ResetIsCustomActionTimeoutEnabled()
```

##### `ResetIsMonthlyPatchingEnabled` <a name="ResetIsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled"></a>

```csharp
private void ResetIsMonthlyPatchingEnabled()
```

##### `ResetLeadTimeInWeeks` <a name="ResetLeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks"></a>

```csharp
private void ResetLeadTimeInWeeks()
```

##### `ResetMonths` <a name="ResetMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetMonths"></a>

```csharp
private void ResetMonths()
```

##### `ResetPatchingMode` <a name="ResetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPatchingMode"></a>

```csharp
private void ResetPatchingMode()
```

##### `ResetPreference` <a name="ResetPreference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPreference"></a>

```csharp
private void ResetPreference()
```

##### `ResetSkipRu` <a name="ResetSkipRu" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetSkipRu"></a>

```csharp
private void ResetSkipRu()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList">DatabaseDbSystemMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput">CustomActionTimeoutInMinsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput">HoursOfDayInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput">IsCustomActionTimeoutEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput">IsMonthlyPatchingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput">LeadTimeInWeeksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.monthsInput">MonthsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingModeInput">PatchingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRuInput">SkipRuInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRu">SkipRu</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```csharp
public DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.months"></a>

```csharp
public DatabaseDbSystemMaintenanceWindowDetailsMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList">DatabaseDbSystemMaintenanceWindowDetailsMonthsList</a>

---

##### `CustomActionTimeoutInMinsInput`<sup>Optional</sup> <a name="CustomActionTimeoutInMinsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput"></a>

```csharp
public double CustomActionTimeoutInMinsInput { get; }
```

- *Type:* double

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput"></a>

```csharp
public object DaysOfWeekInput { get; }
```

- *Type:* object

---

##### `HoursOfDayInput`<sup>Optional</sup> <a name="HoursOfDayInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput"></a>

```csharp
public double[] HoursOfDayInput { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```csharp
public object IsCustomActionTimeoutEnabledInput { get; }
```

- *Type:* object

---

##### `IsMonthlyPatchingEnabledInput`<sup>Optional</sup> <a name="IsMonthlyPatchingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```csharp
public object IsMonthlyPatchingEnabledInput { get; }
```

- *Type:* object

---

##### `LeadTimeInWeeksInput`<sup>Optional</sup> <a name="LeadTimeInWeeksInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput"></a>

```csharp
public double LeadTimeInWeeksInput { get; }
```

- *Type:* double

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.monthsInput"></a>

```csharp
public object MonthsInput { get; }
```

- *Type:* object

---

##### `PatchingModeInput`<sup>Optional</sup> <a name="PatchingModeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingModeInput"></a>

```csharp
public string PatchingModeInput { get; }
```

- *Type:* string

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preferenceInput"></a>

```csharp
public string PreferenceInput { get; }
```

- *Type:* string

---

##### `SkipRuInput`<sup>Optional</sup> <a name="SkipRuInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRuInput"></a>

```csharp
public object SkipRuInput { get; }
```

- *Type:* object

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput"></a>

```csharp
public double[] WeeksOfMonthInput { get; }
```

- *Type:* double[]

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public object IsCustomActionTimeoutEnabled { get; }
```

- *Type:* object

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public object IsMonthlyPatchingEnabled { get; }
```

- *Type:* object

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```csharp
public object SkipRu { get; }
```

- *Type:* object

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemMaintenanceWindowDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

---


### DatabaseDbSystemMaintenanceWindowList <a name="DatabaseDbSystemMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.get"></a>

```csharp
private DatabaseDbSystemMaintenanceWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDbSystemMaintenanceWindowMonthsList <a name="DatabaseDbSystemMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.get"></a>

```csharp
private DatabaseDbSystemMaintenanceWindowMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseDbSystemMaintenanceWindowMonthsOutputReference <a name="DatabaseDbSystemMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths">DatabaseDbSystemMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemMaintenanceWindowMonths InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths">DatabaseDbSystemMaintenanceWindowMonths</a>

---


### DatabaseDbSystemMaintenanceWindowOutputReference <a name="DatabaseDbSystemMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList">DatabaseDbSystemMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.skipRu">SkipRu</a></code> | <code>HashiCorp.Cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow">DatabaseDbSystemMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```csharp
public DatabaseDbSystemMaintenanceWindowDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public IResolvable IsCustomActionTimeoutEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public IResolvable IsMonthlyPatchingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.months"></a>

```csharp
public DatabaseDbSystemMaintenanceWindowMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList">DatabaseDbSystemMaintenanceWindowMonthsList</a>

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.skipRu"></a>

```csharp
public BooleanList SkipRu { get; }
```

- *Type:* HashiCorp.Cdktf.BooleanList

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DatabaseDbSystemMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow">DatabaseDbSystemMaintenanceWindow</a>

---


### DatabaseDbSystemTimeoutsOutputReference <a name="DatabaseDbSystemTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDbSystemTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



