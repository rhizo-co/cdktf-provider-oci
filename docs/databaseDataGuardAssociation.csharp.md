# `databaseDataGuardAssociation` Submodule <a name="`databaseDataGuardAssociation` Submodule" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDataGuardAssociation <a name="DatabaseDataGuardAssociation" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association oci_database_data_guard_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDataGuardAssociation(Construct Scope, string Id, DatabaseDataGuardAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig">DatabaseDataGuardAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig">DatabaseDataGuardAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions">PutDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetBackupNetworkNsgIds">ResetBackupNetworkNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCpuCoreCount">ResetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCreateAsync">ResetCreateAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseDefinedTags">ResetDatabaseDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseFreeformTags">ResetDatabaseFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseSoftwareImageId">ResetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDataCollectionOptions">ResetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemDefinedTags">ResetDbSystemDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemFreeformTags">ResetDbSystemFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemSecurityAttributes">ResetDbSystemSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetFaultDomains">ResetFaultDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetIsActiveDataGuardEnabled">ResetIsActiveDataGuardEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbHomeId">ResetPeerDbHomeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbSystemId">ResetPeerDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbUniqueName">ResetPeerDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerSidPrefix">ResetPeerSidPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerVmClusterId">ResetPeerVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetShape">ResetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetStorageVolumePerformanceMode">ResetStorageVolumePerformanceMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataCollectionOptions` <a name="PutDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions"></a>

```csharp
private void PutDataCollectionOptions(DatabaseDataGuardAssociationDataCollectionOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseDataGuardAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetBackupNetworkNsgIds` <a name="ResetBackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetBackupNetworkNsgIds"></a>

```csharp
private void ResetBackupNetworkNsgIds()
```

##### `ResetCpuCoreCount` <a name="ResetCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCpuCoreCount"></a>

```csharp
private void ResetCpuCoreCount()
```

##### `ResetCreateAsync` <a name="ResetCreateAsync" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCreateAsync"></a>

```csharp
private void ResetCreateAsync()
```

##### `ResetDatabaseDefinedTags` <a name="ResetDatabaseDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseDefinedTags"></a>

```csharp
private void ResetDatabaseDefinedTags()
```

##### `ResetDatabaseFreeformTags` <a name="ResetDatabaseFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseFreeformTags"></a>

```csharp
private void ResetDatabaseFreeformTags()
```

##### `ResetDatabaseSoftwareImageId` <a name="ResetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseSoftwareImageId"></a>

```csharp
private void ResetDatabaseSoftwareImageId()
```

##### `ResetDataCollectionOptions` <a name="ResetDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDataCollectionOptions"></a>

```csharp
private void ResetDataCollectionOptions()
```

##### `ResetDbSystemDefinedTags` <a name="ResetDbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemDefinedTags"></a>

```csharp
private void ResetDbSystemDefinedTags()
```

##### `ResetDbSystemFreeformTags` <a name="ResetDbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemFreeformTags"></a>

```csharp
private void ResetDbSystemFreeformTags()
```

##### `ResetDbSystemSecurityAttributes` <a name="ResetDbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemSecurityAttributes"></a>

```csharp
private void ResetDbSystemSecurityAttributes()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDomain` <a name="ResetDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetFaultDomains` <a name="ResetFaultDomains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetFaultDomains"></a>

```csharp
private void ResetFaultDomains()
```

##### `ResetHostname` <a name="ResetHostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsActiveDataGuardEnabled` <a name="ResetIsActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetIsActiveDataGuardEnabled"></a>

```csharp
private void ResetIsActiveDataGuardEnabled()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNodeCount"></a>

```csharp
private void ResetNodeCount()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetPeerDbHomeId` <a name="ResetPeerDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbHomeId"></a>

```csharp
private void ResetPeerDbHomeId()
```

##### `ResetPeerDbSystemId` <a name="ResetPeerDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbSystemId"></a>

```csharp
private void ResetPeerDbSystemId()
```

##### `ResetPeerDbUniqueName` <a name="ResetPeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbUniqueName"></a>

```csharp
private void ResetPeerDbUniqueName()
```

##### `ResetPeerSidPrefix` <a name="ResetPeerSidPrefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerSidPrefix"></a>

```csharp
private void ResetPeerSidPrefix()
```

##### `ResetPeerVmClusterId` <a name="ResetPeerVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerVmClusterId"></a>

```csharp
private void ResetPeerVmClusterId()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```

##### `ResetShape` <a name="ResetShape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetShape"></a>

```csharp
private void ResetShape()
```

##### `ResetStorageVolumePerformanceMode` <a name="ResetStorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetStorageVolumePerformanceMode"></a>

```csharp
private void ResetStorageVolumePerformanceMode()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDataGuardAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDataGuardAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDataGuardAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseDataGuardAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseDataGuardAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseDataGuardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDataGuardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyLag">ApplyLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyRate">ApplyRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference">DatabaseDataGuardAssociationDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDatabaseId">PeerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDataGuardAssociationId">PeerDataGuardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerRole">PeerRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference">DatabaseDataGuardAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIdsInput">BackupNetworkNsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsyncInput">CreateAsyncInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationTypeInput">CreationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPasswordInput">DatabaseAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTagsInput">DatabaseDefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTagsInput">DatabaseFreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageIdInput">DatabaseSoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptionsInput">DataCollectionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTagsInput">DbSystemDefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTagsInput">DbSystemFreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributesInput">DbSystemSecurityAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDeleteInput">DeleteStandbyDbHomeOnDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomainsInput">FaultDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabledInput">IsActiveDataGuardEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeIdInput">PeerDbHomeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemIdInput">PeerDbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueNameInput">PeerDbUniqueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefixInput">PeerSidPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterIdInput">PeerVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionModeInput">ProtectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceModeInput">StorageVolumePerformanceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportTypeInput">TransportTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsync">CreateAsync</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationType">CreationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPassword">DatabaseAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTags">DatabaseDefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTags">DatabaseFreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTags">DbSystemDefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTags">DbSystemFreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributes">DbSystemSecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDelete">DeleteStandbyDbHomeOnDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomains">FaultDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabled">IsActiveDataGuardEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeId">PeerDbHomeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemId">PeerDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueName">PeerDbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefix">PeerSidPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterId">PeerVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionMode">ProtectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceMode">StorageVolumePerformanceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportType">TransportType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplyLag`<sup>Required</sup> <a name="ApplyLag" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyLag"></a>

```csharp
public string ApplyLag { get; }
```

- *Type:* string

---

##### `ApplyRate`<sup>Required</sup> <a name="ApplyRate" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyRate"></a>

```csharp
public string ApplyRate { get; }
```

- *Type:* string

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptions"></a>

```csharp
public DatabaseDataGuardAssociationDataCollectionOptionsOutputReference DataCollectionOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference">DatabaseDataGuardAssociationDataCollectionOptionsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `PeerDatabaseId`<sup>Required</sup> <a name="PeerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDatabaseId"></a>

```csharp
public string PeerDatabaseId { get; }
```

- *Type:* string

---

##### `PeerDataGuardAssociationId`<sup>Required</sup> <a name="PeerDataGuardAssociationId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDataGuardAssociationId"></a>

```csharp
public string PeerDataGuardAssociationId { get; }
```

- *Type:* string

---

##### `PeerRole`<sup>Required</sup> <a name="PeerRole" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerRole"></a>

```csharp
public string PeerRole { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeouts"></a>

```csharp
public DatabaseDataGuardAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference">DatabaseDataGuardAssociationTimeoutsOutputReference</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `BackupNetworkNsgIdsInput`<sup>Optional</sup> <a name="BackupNetworkNsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIdsInput"></a>

```csharp
public string[] BackupNetworkNsgIdsInput { get; }
```

- *Type:* string[]

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCountInput"></a>

```csharp
public double CpuCoreCountInput { get; }
```

- *Type:* double

---

##### `CreateAsyncInput`<sup>Optional</sup> <a name="CreateAsyncInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsyncInput"></a>

```csharp
public object CreateAsyncInput { get; }
```

- *Type:* object

---

##### `CreationTypeInput`<sup>Optional</sup> <a name="CreationTypeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationTypeInput"></a>

```csharp
public string CreationTypeInput { get; }
```

- *Type:* string

---

##### `DatabaseAdminPasswordInput`<sup>Optional</sup> <a name="DatabaseAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPasswordInput"></a>

```csharp
public string DatabaseAdminPasswordInput { get; }
```

- *Type:* string

---

##### `DatabaseDefinedTagsInput`<sup>Optional</sup> <a name="DatabaseDefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DatabaseDefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatabaseFreeformTagsInput`<sup>Optional</sup> <a name="DatabaseFreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DatabaseFreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageIdInput`<sup>Optional</sup> <a name="DatabaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageIdInput"></a>

```csharp
public string DatabaseSoftwareImageIdInput { get; }
```

- *Type:* string

---

##### `DataCollectionOptionsInput`<sup>Optional</sup> <a name="DataCollectionOptionsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptionsInput"></a>

```csharp
public DatabaseDataGuardAssociationDataCollectionOptions DataCollectionOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

---

##### `DbSystemDefinedTagsInput`<sup>Optional</sup> <a name="DbSystemDefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DbSystemDefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DbSystemFreeformTagsInput`<sup>Optional</sup> <a name="DbSystemFreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DbSystemFreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DbSystemSecurityAttributesInput`<sup>Optional</sup> <a name="DbSystemSecurityAttributesInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DbSystemSecurityAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeleteStandbyDbHomeOnDeleteInput`<sup>Optional</sup> <a name="DeleteStandbyDbHomeOnDeleteInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDeleteInput"></a>

```csharp
public string DeleteStandbyDbHomeOnDeleteInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `FaultDomainsInput`<sup>Optional</sup> <a name="FaultDomainsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomainsInput"></a>

```csharp
public string[] FaultDomainsInput { get; }
```

- *Type:* string[]

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsActiveDataGuardEnabledInput`<sup>Optional</sup> <a name="IsActiveDataGuardEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabledInput"></a>

```csharp
public object IsActiveDataGuardEnabledInput { get; }
```

- *Type:* object

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `PeerDbHomeIdInput`<sup>Optional</sup> <a name="PeerDbHomeIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeIdInput"></a>

```csharp
public string PeerDbHomeIdInput { get; }
```

- *Type:* string

---

##### `PeerDbSystemIdInput`<sup>Optional</sup> <a name="PeerDbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemIdInput"></a>

```csharp
public string PeerDbSystemIdInput { get; }
```

- *Type:* string

---

##### `PeerDbUniqueNameInput`<sup>Optional</sup> <a name="PeerDbUniqueNameInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueNameInput"></a>

```csharp
public string PeerDbUniqueNameInput { get; }
```

- *Type:* string

---

##### `PeerSidPrefixInput`<sup>Optional</sup> <a name="PeerSidPrefixInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefixInput"></a>

```csharp
public string PeerSidPrefixInput { get; }
```

- *Type:* string

---

##### `PeerVmClusterIdInput`<sup>Optional</sup> <a name="PeerVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterIdInput"></a>

```csharp
public string PeerVmClusterIdInput { get; }
```

- *Type:* string

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `ProtectionModeInput`<sup>Optional</sup> <a name="ProtectionModeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionModeInput"></a>

```csharp
public string ProtectionModeInput { get; }
```

- *Type:* string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `StorageVolumePerformanceModeInput`<sup>Optional</sup> <a name="StorageVolumePerformanceModeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceModeInput"></a>

```csharp
public string StorageVolumePerformanceModeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `TransportTypeInput`<sup>Optional</sup> <a name="TransportTypeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportTypeInput"></a>

```csharp
public string TransportTypeInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `BackupNetworkNsgIds`<sup>Required</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIds"></a>

```csharp
public string[] BackupNetworkNsgIds { get; }
```

- *Type:* string[]

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `CreateAsync`<sup>Required</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsync"></a>

```csharp
public object CreateAsync { get; }
```

- *Type:* object

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationType"></a>

```csharp
public string CreationType { get; }
```

- *Type:* string

---

##### `DatabaseAdminPassword`<sup>Required</sup> <a name="DatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPassword"></a>

```csharp
public string DatabaseAdminPassword { get; }
```

- *Type:* string

---

##### `DatabaseDefinedTags`<sup>Required</sup> <a name="DatabaseDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DatabaseDefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatabaseFreeformTags`<sup>Required</sup> <a name="DatabaseFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DatabaseFreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; }
```

- *Type:* string

---

##### `DbSystemDefinedTags`<sup>Required</sup> <a name="DbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DbSystemDefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DbSystemFreeformTags`<sup>Required</sup> <a name="DbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DbSystemFreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DbSystemSecurityAttributes`<sup>Required</sup> <a name="DbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DbSystemSecurityAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeleteStandbyDbHomeOnDelete`<sup>Required</sup> <a name="DeleteStandbyDbHomeOnDelete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDelete"></a>

```csharp
public string DeleteStandbyDbHomeOnDelete { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FaultDomains`<sup>Required</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomains"></a>

```csharp
public string[] FaultDomains { get; }
```

- *Type:* string[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsActiveDataGuardEnabled`<sup>Required</sup> <a name="IsActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabled"></a>

```csharp
public object IsActiveDataGuardEnabled { get; }
```

- *Type:* object

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PeerDbHomeId`<sup>Required</sup> <a name="PeerDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeId"></a>

```csharp
public string PeerDbHomeId { get; }
```

- *Type:* string

---

##### `PeerDbSystemId`<sup>Required</sup> <a name="PeerDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemId"></a>

```csharp
public string PeerDbSystemId { get; }
```

- *Type:* string

---

##### `PeerDbUniqueName`<sup>Required</sup> <a name="PeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueName"></a>

```csharp
public string PeerDbUniqueName { get; }
```

- *Type:* string

---

##### `PeerSidPrefix`<sup>Required</sup> <a name="PeerSidPrefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefix"></a>

```csharp
public string PeerSidPrefix { get; }
```

- *Type:* string

---

##### `PeerVmClusterId`<sup>Required</sup> <a name="PeerVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterId"></a>

```csharp
public string PeerVmClusterId { get; }
```

- *Type:* string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionMode"></a>

```csharp
public string ProtectionMode { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `StorageVolumePerformanceMode`<sup>Required</sup> <a name="StorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceMode"></a>

```csharp
public string StorageVolumePerformanceMode { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `TransportType`<sup>Required</sup> <a name="TransportType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportType"></a>

```csharp
public string TransportType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDataGuardAssociationConfig <a name="DatabaseDataGuardAssociationConfig" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDataGuardAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CreationType,
    string DatabaseAdminPassword,
    string DatabaseId,
    string DeleteStandbyDbHomeOnDelete,
    string ProtectionMode,
    string TransportType,
    string AvailabilityDomain = null,
    string[] BackupNetworkNsgIds = null,
    double CpuCoreCount = null,
    object CreateAsync = null,
    System.Collections.Generic.IDictionary<string, string> DatabaseDefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> DatabaseFreeformTags = null,
    string DatabaseSoftwareImageId = null,
    DatabaseDataGuardAssociationDataCollectionOptions DataCollectionOptions = null,
    System.Collections.Generic.IDictionary<string, string> DbSystemDefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> DbSystemFreeformTags = null,
    System.Collections.Generic.IDictionary<string, string> DbSystemSecurityAttributes = null,
    string DisplayName = null,
    string Domain = null,
    string[] FaultDomains = null,
    string Hostname = null,
    string Id = null,
    object IsActiveDataGuardEnabled = null,
    string LicenseModel = null,
    double NodeCount = null,
    string[] NsgIds = null,
    string PeerDbHomeId = null,
    string PeerDbSystemId = null,
    string PeerDbUniqueName = null,
    string PeerSidPrefix = null,
    string PeerVmClusterId = null,
    string PrivateIp = null,
    string Shape = null,
    string StorageVolumePerformanceMode = null,
    string SubnetId = null,
    DatabaseDataGuardAssociationTimeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.creationType">CreationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseAdminPassword">DatabaseAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseId">DatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.deleteStandbyDbHomeOnDelete">DeleteStandbyDbHomeOnDelete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.protectionMode">ProtectionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.transportType">TransportType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.createAsync">CreateAsync</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseDefinedTags">DatabaseDefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseFreeformTags">DatabaseFreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemDefinedTags">DbSystemDefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemFreeformTags">DbSystemFreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemSecurityAttributes">DbSystemSecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.faultDomains">FaultDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.isActiveDataGuardEnabled">IsActiveDataGuardEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nodeCount">NodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbHomeId">PeerDbHomeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbSystemId">PeerDbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbUniqueName">PeerDbUniqueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerSidPrefix">PeerSidPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerVmClusterId">PeerVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.storageVolumePerformanceMode">StorageVolumePerformanceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.creationType"></a>

```csharp
public string CreationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}.

---

##### `DatabaseAdminPassword`<sup>Required</sup> <a name="DatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseAdminPassword"></a>

```csharp
public string DatabaseAdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}.

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}.

---

##### `DeleteStandbyDbHomeOnDelete`<sup>Required</sup> <a name="DeleteStandbyDbHomeOnDelete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.deleteStandbyDbHomeOnDelete"></a>

```csharp
public string DeleteStandbyDbHomeOnDelete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}.

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.protectionMode"></a>

```csharp
public string ProtectionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}.

---

##### `TransportType`<sup>Required</sup> <a name="TransportType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.transportType"></a>

```csharp
public string TransportType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}.

---

##### `BackupNetworkNsgIds`<sup>Optional</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.backupNetworkNsgIds"></a>

```csharp
public string[] BackupNetworkNsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}.

---

##### `CpuCoreCount`<sup>Optional</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}.

---

##### `CreateAsync`<sup>Optional</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.createAsync"></a>

```csharp
public object CreateAsync { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}.

---

##### `DatabaseDefinedTags`<sup>Optional</sup> <a name="DatabaseDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseDefinedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DatabaseDefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}.

---

##### `DatabaseFreeformTags`<sup>Optional</sup> <a name="DatabaseFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseFreeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DatabaseFreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}.

---

##### `DatabaseSoftwareImageId`<sup>Optional</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseSoftwareImageId"></a>

```csharp
public string DatabaseSoftwareImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}.

---

##### `DataCollectionOptions`<sup>Optional</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dataCollectionOptions"></a>

```csharp
public DatabaseDataGuardAssociationDataCollectionOptions DataCollectionOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#data_collection_options DatabaseDataGuardAssociation#data_collection_options}

---

##### `DbSystemDefinedTags`<sup>Optional</sup> <a name="DbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemDefinedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DbSystemDefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}.

---

##### `DbSystemFreeformTags`<sup>Optional</sup> <a name="DbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemFreeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DbSystemFreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}.

---

##### `DbSystemSecurityAttributes`<sup>Optional</sup> <a name="DbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemSecurityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DbSystemSecurityAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}.

---

##### `FaultDomains`<sup>Optional</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.faultDomains"></a>

```csharp
public string[] FaultDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}.

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsActiveDataGuardEnabled`<sup>Optional</sup> <a name="IsActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.isActiveDataGuardEnabled"></a>

```csharp
public object IsActiveDataGuardEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}.

---

##### `PeerDbHomeId`<sup>Optional</sup> <a name="PeerDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbHomeId"></a>

```csharp
public string PeerDbHomeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}.

---

##### `PeerDbSystemId`<sup>Optional</sup> <a name="PeerDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbSystemId"></a>

```csharp
public string PeerDbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}.

---

##### `PeerDbUniqueName`<sup>Optional</sup> <a name="PeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbUniqueName"></a>

```csharp
public string PeerDbUniqueName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}.

---

##### `PeerSidPrefix`<sup>Optional</sup> <a name="PeerSidPrefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerSidPrefix"></a>

```csharp
public string PeerSidPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}.

---

##### `PeerVmClusterId`<sup>Optional</sup> <a name="PeerVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerVmClusterId"></a>

```csharp
public string PeerVmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}.

---

##### `Shape`<sup>Optional</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}.

---

##### `StorageVolumePerformanceMode`<sup>Optional</sup> <a name="StorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.storageVolumePerformanceMode"></a>

```csharp
public string StorageVolumePerformanceMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeouts"></a>

```csharp
public DatabaseDataGuardAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#timeouts DatabaseDataGuardAssociation#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}.

---

### DatabaseDataGuardAssociationDataCollectionOptions <a name="DatabaseDataGuardAssociationDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDataGuardAssociationDataCollectionOptions {
    object IsDiagnosticsEventsEnabled = null,
    object IsHealthMonitoringEnabled = null,
    object IsIncidentLogsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_diagnostics_events_enabled DatabaseDataGuardAssociation#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_health_monitoring_enabled DatabaseDataGuardAssociation#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_incident_logs_enabled DatabaseDataGuardAssociation#is_incident_logs_enabled}. |

---

##### `IsDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```csharp
public object IsDiagnosticsEventsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_diagnostics_events_enabled DatabaseDataGuardAssociation#is_diagnostics_events_enabled}.

---

##### `IsHealthMonitoringEnabled`<sup>Optional</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```csharp
public object IsHealthMonitoringEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_health_monitoring_enabled DatabaseDataGuardAssociation#is_health_monitoring_enabled}.

---

##### `IsIncidentLogsEnabled`<sup>Optional</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```csharp
public object IsIncidentLogsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_incident_logs_enabled DatabaseDataGuardAssociation#is_incident_logs_enabled}.

---

### DatabaseDataGuardAssociationTimeouts <a name="DatabaseDataGuardAssociationTimeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDataGuardAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create DatabaseDataGuardAssociation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete DatabaseDataGuardAssociation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#update DatabaseDataGuardAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create DatabaseDataGuardAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete DatabaseDataGuardAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#update DatabaseDataGuardAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDataGuardAssociationDataCollectionOptionsOutputReference <a name="DatabaseDataGuardAssociationDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDataGuardAssociationDataCollectionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">ResetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">ResetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">ResetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDiagnosticsEventsEnabled` <a name="ResetIsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```csharp
private void ResetIsDiagnosticsEventsEnabled()
```

##### `ResetIsHealthMonitoringEnabled` <a name="ResetIsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```csharp
private void ResetIsHealthMonitoringEnabled()
```

##### `ResetIsIncidentLogsEnabled` <a name="ResetIsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```csharp
private void ResetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">IsDiagnosticsEventsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">IsHealthMonitoringEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">IsIncidentLogsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```csharp
public object IsDiagnosticsEventsEnabledInput { get; }
```

- *Type:* object

---

##### `IsHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="IsHealthMonitoringEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```csharp
public object IsHealthMonitoringEnabledInput { get; }
```

- *Type:* object

---

##### `IsIncidentLogsEnabledInput`<sup>Optional</sup> <a name="IsIncidentLogsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```csharp
public object IsIncidentLogsEnabledInput { get; }
```

- *Type:* object

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```csharp
public object IsDiagnosticsEventsEnabled { get; }
```

- *Type:* object

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```csharp
public object IsHealthMonitoringEnabled { get; }
```

- *Type:* object

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```csharp
public object IsIncidentLogsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.internalValue"></a>

```csharp
public DatabaseDataGuardAssociationDataCollectionOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

---


### DatabaseDataGuardAssociationTimeoutsOutputReference <a name="DatabaseDataGuardAssociationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseDataGuardAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



