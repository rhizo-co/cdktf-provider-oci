# `databaseCloudAutonomousVmCluster` Submodule <a name="`databaseCloudAutonomousVmCluster` Submodule" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseCloudAutonomousVmCluster <a name="DatabaseCloudAutonomousVmCluster" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster oci_database_cloud_autonomous_vm_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmCluster(Construct Scope, string Id, DatabaseCloudAutonomousVmClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig">DatabaseCloudAutonomousVmClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig">DatabaseCloudAutonomousVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.putMaintenanceWindowDetails">PutMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetAutonomousDataStorageSizeInTbs">ResetAutonomousDataStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetClusterTimeZone">ResetClusterTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetComputeModel">ResetComputeModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetCpuCoreCountPerNode">ResetCpuCoreCountPerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetDbServers">ResetDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetIsMtlsEnabledVmCluster">ResetIsMtlsEnabledVmCluster</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetMaintenanceWindowDetails">ResetMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetMemoryPerOracleComputeUnitInGbs">ResetMemoryPerOracleComputeUnitInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetScanListenerPortNonTls">ResetScanListenerPortNonTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetScanListenerPortTls">ResetScanListenerPortTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetSecurityAttributes">ResetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetTimeUpdated">ResetTimeUpdated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetTotalContainerDatabases">ResetTotalContainerDatabases</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMaintenanceWindowDetails` <a name="PutMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.putMaintenanceWindowDetails"></a>

```csharp
private void PutMaintenanceWindowDetails(DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.putMaintenanceWindowDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails">DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseCloudAutonomousVmClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeouts">DatabaseCloudAutonomousVmClusterTimeouts</a>

---

##### `ResetAutonomousDataStorageSizeInTbs` <a name="ResetAutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetAutonomousDataStorageSizeInTbs"></a>

```csharp
private void ResetAutonomousDataStorageSizeInTbs()
```

##### `ResetClusterTimeZone` <a name="ResetClusterTimeZone" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetClusterTimeZone"></a>

```csharp
private void ResetClusterTimeZone()
```

##### `ResetComputeModel` <a name="ResetComputeModel" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetComputeModel"></a>

```csharp
private void ResetComputeModel()
```

##### `ResetCpuCoreCountPerNode` <a name="ResetCpuCoreCountPerNode" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetCpuCoreCountPerNode"></a>

```csharp
private void ResetCpuCoreCountPerNode()
```

##### `ResetDbServers` <a name="ResetDbServers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetDbServers"></a>

```csharp
private void ResetDbServers()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsMtlsEnabledVmCluster` <a name="ResetIsMtlsEnabledVmCluster" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetIsMtlsEnabledVmCluster"></a>

```csharp
private void ResetIsMtlsEnabledVmCluster()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetMaintenanceWindowDetails` <a name="ResetMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetMaintenanceWindowDetails"></a>

```csharp
private void ResetMaintenanceWindowDetails()
```

##### `ResetMemoryPerOracleComputeUnitInGbs` <a name="ResetMemoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetMemoryPerOracleComputeUnitInGbs"></a>

```csharp
private void ResetMemoryPerOracleComputeUnitInGbs()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetScanListenerPortNonTls` <a name="ResetScanListenerPortNonTls" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetScanListenerPortNonTls"></a>

```csharp
private void ResetScanListenerPortNonTls()
```

##### `ResetScanListenerPortTls` <a name="ResetScanListenerPortTls" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetScanListenerPortTls"></a>

```csharp
private void ResetScanListenerPortTls()
```

##### `ResetSecurityAttributes` <a name="ResetSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetSecurityAttributes"></a>

```csharp
private void ResetSecurityAttributes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeUpdated` <a name="ResetTimeUpdated" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetTimeUpdated"></a>

```csharp
private void ResetTimeUpdated()
```

##### `ResetTotalContainerDatabases` <a name="ResetTotalContainerDatabases" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.resetTotalContainerDatabases"></a>

```csharp
private void ResetTotalContainerDatabases()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseCloudAutonomousVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseCloudAutonomousVmCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseCloudAutonomousVmCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseCloudAutonomousVmCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseCloudAutonomousVmCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseCloudAutonomousVmCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseCloudAutonomousVmCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseCloudAutonomousVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseCloudAutonomousVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.autonomousDataStoragePercentage">AutonomousDataStoragePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTbs">AvailableAutonomousDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.availableContainerDatabases">AvailableContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.availableCpus">AvailableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.cpuPercentage">CpuPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.exadataStorageInTbsLowestScaledValue">ExadataStorageInTbsLowestScaledValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.lastMaintenanceRunId">LastMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.lastUpdateHistoryEntryId">LastUpdateHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList">DatabaseCloudAutonomousVmClusterMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.maintenanceWindowDetails">MaintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference">DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue">MaxAcdsLowestScaledValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.nextMaintenanceRunId">NextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases">NonProvisionableAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.ocpuCount">OcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.ocpusLowestScaledValue">OcpusLowestScaledValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases">ProvisionableAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases">ProvisionedAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.provisionedCpus">ProvisionedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.reservedCpus">ReservedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.timeDatabaseSslCertificateExpires">TimeDatabaseSslCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.timeOrdsCertificateExpires">TimeOrdsCertificateExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference">DatabaseCloudAutonomousVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.totalAutonomousDataStorageInTbs">TotalAutonomousDataStorageInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.totalCpus">TotalCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTbsInput">AutonomousDataStorageSizeInTbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.cloudExadataInfrastructureIdInput">CloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.clusterTimeZoneInput">ClusterTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.computeModelInput">ComputeModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.cpuCoreCountPerNodeInput">CpuCoreCountPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.dbServersInput">DbServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.isMtlsEnabledVmClusterInput">IsMtlsEnabledVmClusterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.maintenanceWindowDetailsInput">MaintenanceWindowDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails">DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbsInput">MemoryPerOracleComputeUnitInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.scanListenerPortNonTlsInput">ScanListenerPortNonTlsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.scanListenerPortTlsInput">ScanListenerPortTlsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.securityAttributesInput">SecurityAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.timeUpdatedInput">TimeUpdatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.totalContainerDatabasesInput">TotalContainerDatabasesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTbs">AutonomousDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.clusterTimeZone">ClusterTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.cpuCoreCountPerNode">CpuCoreCountPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.dbServers">DbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster">IsMtlsEnabledVmCluster</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbs">MemoryPerOracleComputeUnitInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.scanListenerPortNonTls">ScanListenerPortNonTls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.scanListenerPortTls">ScanListenerPortTls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.securityAttributes">SecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.totalContainerDatabases">TotalContainerDatabases</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutonomousDataStoragePercentage`<sup>Required</sup> <a name="AutonomousDataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.autonomousDataStoragePercentage"></a>

```csharp
public double AutonomousDataStoragePercentage { get; }
```

- *Type:* double

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `AvailableAutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="AvailableAutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTbs"></a>

```csharp
public double AvailableAutonomousDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AvailableContainerDatabases`<sup>Required</sup> <a name="AvailableContainerDatabases" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.availableContainerDatabases"></a>

```csharp
public double AvailableContainerDatabases { get; }
```

- *Type:* double

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.availableCpus"></a>

```csharp
public double AvailableCpus { get; }
```

- *Type:* double

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `CpuPercentage`<sup>Required</sup> <a name="CpuPercentage" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.cpuPercentage"></a>

```csharp
public double CpuPercentage { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.dbNodeStorageSizeInGbs"></a>

```csharp
public double DbNodeStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `ExadataStorageInTbsLowestScaledValue`<sup>Required</sup> <a name="ExadataStorageInTbsLowestScaledValue" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.exadataStorageInTbsLowestScaledValue"></a>

```csharp
public double ExadataStorageInTbsLowestScaledValue { get; }
```

- *Type:* double

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `LastMaintenanceRunId`<sup>Required</sup> <a name="LastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.lastMaintenanceRunId"></a>

```csharp
public string LastMaintenanceRunId { get; }
```

- *Type:* string

---

##### `LastUpdateHistoryEntryId`<sup>Required</sup> <a name="LastUpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.lastUpdateHistoryEntryId"></a>

```csharp
public string LastUpdateHistoryEntryId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.maintenanceWindow"></a>

```csharp
public DatabaseCloudAutonomousVmClusterMaintenanceWindowList MaintenanceWindow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList">DatabaseCloudAutonomousVmClusterMaintenanceWindowList</a>

---

##### `MaintenanceWindowDetails`<sup>Required</sup> <a name="MaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.maintenanceWindowDetails"></a>

```csharp
public DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference MaintenanceWindowDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference">DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference</a>

---

##### `MaxAcdsLowestScaledValue`<sup>Required</sup> <a name="MaxAcdsLowestScaledValue" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue"></a>

```csharp
public double MaxAcdsLowestScaledValue { get; }
```

- *Type:* double

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.memorySizeInGbs"></a>

```csharp
public double MemorySizeInGbs { get; }
```

- *Type:* double

---

##### `NextMaintenanceRunId`<sup>Required</sup> <a name="NextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.nextMaintenanceRunId"></a>

```csharp
public string NextMaintenanceRunId { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NonProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="NonProvisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases"></a>

```csharp
public double NonProvisionableAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.ocpuCount"></a>

```csharp
public double OcpuCount { get; }
```

- *Type:* double

---

##### `OcpusLowestScaledValue`<sup>Required</sup> <a name="OcpusLowestScaledValue" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.ocpusLowestScaledValue"></a>

```csharp
public double OcpusLowestScaledValue { get; }
```

- *Type:* double

---

##### `ProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases"></a>

```csharp
public double ProvisionableAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `ProvisionedAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionedAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases"></a>

```csharp
public double ProvisionedAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.provisionedCpus"></a>

```csharp
public double ProvisionedCpus { get; }
```

- *Type:* double

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.reclaimableCpus"></a>

```csharp
public double ReclaimableCpus { get; }
```

- *Type:* double

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.reservedCpus"></a>

```csharp
public double ReservedCpus { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeDatabaseSslCertificateExpires`<sup>Required</sup> <a name="TimeDatabaseSslCertificateExpires" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.timeDatabaseSslCertificateExpires"></a>

```csharp
public string TimeDatabaseSslCertificateExpires { get; }
```

- *Type:* string

---

##### `TimeOrdsCertificateExpires`<sup>Required</sup> <a name="TimeOrdsCertificateExpires" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.timeOrdsCertificateExpires"></a>

```csharp
public string TimeOrdsCertificateExpires { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.timeouts"></a>

```csharp
public DatabaseCloudAutonomousVmClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference">DatabaseCloudAutonomousVmClusterTimeoutsOutputReference</a>

---

##### `TotalAutonomousDataStorageInTbs`<sup>Required</sup> <a name="TotalAutonomousDataStorageInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.totalAutonomousDataStorageInTbs"></a>

```csharp
public double TotalAutonomousDataStorageInTbs { get; }
```

- *Type:* double

---

##### `TotalCpus`<sup>Required</sup> <a name="TotalCpus" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.totalCpus"></a>

```csharp
public double TotalCpus { get; }
```

- *Type:* double

---

##### `AutonomousDataStorageSizeInTbsInput`<sup>Optional</sup> <a name="AutonomousDataStorageSizeInTbsInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTbsInput"></a>

```csharp
public double AutonomousDataStorageSizeInTbsInput { get; }
```

- *Type:* double

---

##### `CloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="CloudExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.cloudExadataInfrastructureIdInput"></a>

```csharp
public string CloudExadataInfrastructureIdInput { get; }
```

- *Type:* string

---

##### `ClusterTimeZoneInput`<sup>Optional</sup> <a name="ClusterTimeZoneInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.clusterTimeZoneInput"></a>

```csharp
public string ClusterTimeZoneInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ComputeModelInput`<sup>Optional</sup> <a name="ComputeModelInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.computeModelInput"></a>

```csharp
public string ComputeModelInput { get; }
```

- *Type:* string

---

##### `CpuCoreCountPerNodeInput`<sup>Optional</sup> <a name="CpuCoreCountPerNodeInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.cpuCoreCountPerNodeInput"></a>

```csharp
public double CpuCoreCountPerNodeInput { get; }
```

- *Type:* double

---

##### `DbServersInput`<sup>Optional</sup> <a name="DbServersInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.dbServersInput"></a>

```csharp
public string[] DbServersInput { get; }
```

- *Type:* string[]

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsMtlsEnabledVmClusterInput`<sup>Optional</sup> <a name="IsMtlsEnabledVmClusterInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.isMtlsEnabledVmClusterInput"></a>

```csharp
public object IsMtlsEnabledVmClusterInput { get; }
```

- *Type:* object

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowDetailsInput`<sup>Optional</sup> <a name="MaintenanceWindowDetailsInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.maintenanceWindowDetailsInput"></a>

```csharp
public DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails MaintenanceWindowDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails">DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails</a>

---

##### `MemoryPerOracleComputeUnitInGbsInput`<sup>Optional</sup> <a name="MemoryPerOracleComputeUnitInGbsInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbsInput"></a>

```csharp
public double MemoryPerOracleComputeUnitInGbsInput { get; }
```

- *Type:* double

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `ScanListenerPortNonTlsInput`<sup>Optional</sup> <a name="ScanListenerPortNonTlsInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.scanListenerPortNonTlsInput"></a>

```csharp
public double ScanListenerPortNonTlsInput { get; }
```

- *Type:* double

---

##### `ScanListenerPortTlsInput`<sup>Optional</sup> <a name="ScanListenerPortTlsInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.scanListenerPortTlsInput"></a>

```csharp
public double ScanListenerPortTlsInput { get; }
```

- *Type:* double

---

##### `SecurityAttributesInput`<sup>Optional</sup> <a name="SecurityAttributesInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.securityAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeUpdatedInput`<sup>Optional</sup> <a name="TimeUpdatedInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.timeUpdatedInput"></a>

```csharp
public string TimeUpdatedInput { get; }
```

- *Type:* string

---

##### `TotalContainerDatabasesInput`<sup>Optional</sup> <a name="TotalContainerDatabasesInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.totalContainerDatabasesInput"></a>

```csharp
public double TotalContainerDatabasesInput { get; }
```

- *Type:* double

---

##### `AutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="AutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTbs"></a>

```csharp
public double AutonomousDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `ClusterTimeZone`<sup>Required</sup> <a name="ClusterTimeZone" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.clusterTimeZone"></a>

```csharp
public string ClusterTimeZone { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `CpuCoreCountPerNode`<sup>Required</sup> <a name="CpuCoreCountPerNode" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.cpuCoreCountPerNode"></a>

```csharp
public double CpuCoreCountPerNode { get; }
```

- *Type:* double

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.dbServers"></a>

```csharp
public string[] DbServers { get; }
```

- *Type:* string[]

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsMtlsEnabledVmCluster`<sup>Required</sup> <a name="IsMtlsEnabledVmCluster" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster"></a>

```csharp
public object IsMtlsEnabledVmCluster { get; }
```

- *Type:* object

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `MemoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGbs"></a>

```csharp
public double MemoryPerOracleComputeUnitInGbs { get; }
```

- *Type:* double

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `ScanListenerPortNonTls`<sup>Required</sup> <a name="ScanListenerPortNonTls" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.scanListenerPortNonTls"></a>

```csharp
public double ScanListenerPortNonTls { get; }
```

- *Type:* double

---

##### `ScanListenerPortTls`<sup>Required</sup> <a name="ScanListenerPortTls" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.scanListenerPortTls"></a>

```csharp
public double ScanListenerPortTls { get; }
```

- *Type:* double

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.securityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TotalContainerDatabases`<sup>Required</sup> <a name="TotalContainerDatabases" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.totalContainerDatabases"></a>

```csharp
public double TotalContainerDatabases { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseCloudAutonomousVmClusterConfig <a name="DatabaseCloudAutonomousVmClusterConfig" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CloudExadataInfrastructureId,
    string CompartmentId,
    string DisplayName,
    string SubnetId,
    double AutonomousDataStorageSizeInTbs = null,
    string ClusterTimeZone = null,
    string ComputeModel = null,
    double CpuCoreCountPerNode = null,
    string[] DbServers = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsMtlsEnabledVmCluster = null,
    string LicenseModel = null,
    DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails MaintenanceWindowDetails = null,
    double MemoryPerOracleComputeUnitInGbs = null,
    string[] NsgIds = null,
    double ScanListenerPortNonTls = null,
    double ScanListenerPortTls = null,
    System.Collections.Generic.IDictionary<string, string> SecurityAttributes = null,
    DatabaseCloudAutonomousVmClusterTimeouts Timeouts = null,
    string TimeUpdated = null,
    double TotalContainerDatabases = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#cloud_exadata_infrastructure_id DatabaseCloudAutonomousVmCluster#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#compartment_id DatabaseCloudAutonomousVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#display_name DatabaseCloudAutonomousVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#subnet_id DatabaseCloudAutonomousVmCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.autonomousDataStorageSizeInTbs">AutonomousDataStorageSizeInTbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#autonomous_data_storage_size_in_tbs DatabaseCloudAutonomousVmCluster#autonomous_data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.clusterTimeZone">ClusterTimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#cluster_time_zone DatabaseCloudAutonomousVmCluster#cluster_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.computeModel">ComputeModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#compute_model DatabaseCloudAutonomousVmCluster#compute_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.cpuCoreCountPerNode">CpuCoreCountPerNode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#cpu_core_count_per_node DatabaseCloudAutonomousVmCluster#cpu_core_count_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.dbServers">DbServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#db_servers DatabaseCloudAutonomousVmCluster#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#defined_tags DatabaseCloudAutonomousVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#description DatabaseCloudAutonomousVmCluster#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#freeform_tags DatabaseCloudAutonomousVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#id DatabaseCloudAutonomousVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.isMtlsEnabledVmCluster">IsMtlsEnabledVmCluster</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#is_mtls_enabled_vm_cluster DatabaseCloudAutonomousVmCluster#is_mtls_enabled_vm_cluster}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#license_model DatabaseCloudAutonomousVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.maintenanceWindowDetails">MaintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails">DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails</a></code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.memoryPerOracleComputeUnitInGbs">MemoryPerOracleComputeUnitInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#memory_per_oracle_compute_unit_in_gbs DatabaseCloudAutonomousVmCluster#memory_per_oracle_compute_unit_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#nsg_ids DatabaseCloudAutonomousVmCluster#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.scanListenerPortNonTls">ScanListenerPortNonTls</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#scan_listener_port_non_tls DatabaseCloudAutonomousVmCluster#scan_listener_port_non_tls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.scanListenerPortTls">ScanListenerPortTls</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#scan_listener_port_tls DatabaseCloudAutonomousVmCluster#scan_listener_port_tls}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.securityAttributes">SecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#security_attributes DatabaseCloudAutonomousVmCluster#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeouts">DatabaseCloudAutonomousVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#time_updated DatabaseCloudAutonomousVmCluster#time_updated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.totalContainerDatabases">TotalContainerDatabases</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#total_container_databases DatabaseCloudAutonomousVmCluster#total_container_databases}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#cloud_exadata_infrastructure_id DatabaseCloudAutonomousVmCluster#cloud_exadata_infrastructure_id}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#compartment_id DatabaseCloudAutonomousVmCluster#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#display_name DatabaseCloudAutonomousVmCluster#display_name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#subnet_id DatabaseCloudAutonomousVmCluster#subnet_id}.

---

##### `AutonomousDataStorageSizeInTbs`<sup>Optional</sup> <a name="AutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.autonomousDataStorageSizeInTbs"></a>

```csharp
public double AutonomousDataStorageSizeInTbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#autonomous_data_storage_size_in_tbs DatabaseCloudAutonomousVmCluster#autonomous_data_storage_size_in_tbs}.

---

##### `ClusterTimeZone`<sup>Optional</sup> <a name="ClusterTimeZone" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.clusterTimeZone"></a>

```csharp
public string ClusterTimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#cluster_time_zone DatabaseCloudAutonomousVmCluster#cluster_time_zone}.

---

##### `ComputeModel`<sup>Optional</sup> <a name="ComputeModel" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.computeModel"></a>

```csharp
public string ComputeModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#compute_model DatabaseCloudAutonomousVmCluster#compute_model}.

---

##### `CpuCoreCountPerNode`<sup>Optional</sup> <a name="CpuCoreCountPerNode" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.cpuCoreCountPerNode"></a>

```csharp
public double CpuCoreCountPerNode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#cpu_core_count_per_node DatabaseCloudAutonomousVmCluster#cpu_core_count_per_node}.

---

##### `DbServers`<sup>Optional</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.dbServers"></a>

```csharp
public string[] DbServers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#db_servers DatabaseCloudAutonomousVmCluster#db_servers}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#defined_tags DatabaseCloudAutonomousVmCluster#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#description DatabaseCloudAutonomousVmCluster#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#freeform_tags DatabaseCloudAutonomousVmCluster#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#id DatabaseCloudAutonomousVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsMtlsEnabledVmCluster`<sup>Optional</sup> <a name="IsMtlsEnabledVmCluster" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.isMtlsEnabledVmCluster"></a>

```csharp
public object IsMtlsEnabledVmCluster { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#is_mtls_enabled_vm_cluster DatabaseCloudAutonomousVmCluster#is_mtls_enabled_vm_cluster}.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#license_model DatabaseCloudAutonomousVmCluster#license_model}.

---

##### `MaintenanceWindowDetails`<sup>Optional</sup> <a name="MaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.maintenanceWindowDetails"></a>

```csharp
public DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails MaintenanceWindowDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails">DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails</a>

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#maintenance_window_details DatabaseCloudAutonomousVmCluster#maintenance_window_details}

---

##### `MemoryPerOracleComputeUnitInGbs`<sup>Optional</sup> <a name="MemoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.memoryPerOracleComputeUnitInGbs"></a>

```csharp
public double MemoryPerOracleComputeUnitInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#memory_per_oracle_compute_unit_in_gbs DatabaseCloudAutonomousVmCluster#memory_per_oracle_compute_unit_in_gbs}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#nsg_ids DatabaseCloudAutonomousVmCluster#nsg_ids}.

---

##### `ScanListenerPortNonTls`<sup>Optional</sup> <a name="ScanListenerPortNonTls" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.scanListenerPortNonTls"></a>

```csharp
public double ScanListenerPortNonTls { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#scan_listener_port_non_tls DatabaseCloudAutonomousVmCluster#scan_listener_port_non_tls}.

---

##### `ScanListenerPortTls`<sup>Optional</sup> <a name="ScanListenerPortTls" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.scanListenerPortTls"></a>

```csharp
public double ScanListenerPortTls { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#scan_listener_port_tls DatabaseCloudAutonomousVmCluster#scan_listener_port_tls}.

---

##### `SecurityAttributes`<sup>Optional</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.securityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#security_attributes DatabaseCloudAutonomousVmCluster#security_attributes}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.timeouts"></a>

```csharp
public DatabaseCloudAutonomousVmClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeouts">DatabaseCloudAutonomousVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#timeouts DatabaseCloudAutonomousVmCluster#timeouts}

---

##### `TimeUpdated`<sup>Optional</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#time_updated DatabaseCloudAutonomousVmCluster#time_updated}.

---

##### `TotalContainerDatabases`<sup>Optional</sup> <a name="TotalContainerDatabases" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterConfig.property.totalContainerDatabases"></a>

```csharp
public double TotalContainerDatabases { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#total_container_databases DatabaseCloudAutonomousVmCluster#total_container_databases}.

---

### DatabaseCloudAutonomousVmClusterMaintenanceWindow <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindow {

};
```


### DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek {

};
```


### DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails {
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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#custom_action_timeout_in_mins DatabaseCloudAutonomousVmCluster#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.daysOfWeek">DaysOfWeek</a></code> | <code>object</code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#hours_of_day DatabaseCloudAutonomousVmCluster#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#is_custom_action_timeout_enabled DatabaseCloudAutonomousVmCluster#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#is_monthly_patching_enabled DatabaseCloudAutonomousVmCluster#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#lead_time_in_weeks DatabaseCloudAutonomousVmCluster#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.months">Months</a></code> | <code>object</code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.patchingMode">PatchingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#patching_mode DatabaseCloudAutonomousVmCluster#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.preference">Preference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#preference DatabaseCloudAutonomousVmCluster#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.skipRu">SkipRu</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#skip_ru DatabaseCloudAutonomousVmCluster#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#weeks_of_month DatabaseCloudAutonomousVmCluster#weeks_of_month}. |

---

##### `CustomActionTimeoutInMins`<sup>Optional</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#custom_action_timeout_in_mins DatabaseCloudAutonomousVmCluster#custom_action_timeout_in_mins}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.daysOfWeek"></a>

```csharp
public object DaysOfWeek { get; set; }
```

- *Type:* object

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#days_of_week DatabaseCloudAutonomousVmCluster#days_of_week}

---

##### `HoursOfDay`<sup>Optional</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#hours_of_day DatabaseCloudAutonomousVmCluster#hours_of_day}.

---

##### `IsCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled"></a>

```csharp
public object IsCustomActionTimeoutEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#is_custom_action_timeout_enabled DatabaseCloudAutonomousVmCluster#is_custom_action_timeout_enabled}.

---

##### `IsMonthlyPatchingEnabled`<sup>Optional</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.isMonthlyPatchingEnabled"></a>

```csharp
public object IsMonthlyPatchingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#is_monthly_patching_enabled DatabaseCloudAutonomousVmCluster#is_monthly_patching_enabled}.

---

##### `LeadTimeInWeeks`<sup>Optional</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#lead_time_in_weeks DatabaseCloudAutonomousVmCluster#lead_time_in_weeks}.

---

##### `Months`<sup>Optional</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.months"></a>

```csharp
public object Months { get; set; }
```

- *Type:* object

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#months DatabaseCloudAutonomousVmCluster#months}

---

##### `PatchingMode`<sup>Optional</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.patchingMode"></a>

```csharp
public string PatchingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#patching_mode DatabaseCloudAutonomousVmCluster#patching_mode}.

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.preference"></a>

```csharp
public string Preference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#preference DatabaseCloudAutonomousVmCluster#preference}.

---

##### `SkipRu`<sup>Optional</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.skipRu"></a>

```csharp
public object SkipRu { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#skip_ru DatabaseCloudAutonomousVmCluster#skip_ru}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#weeks_of_month DatabaseCloudAutonomousVmCluster#weeks_of_month}.

---

### DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#name DatabaseCloudAutonomousVmCluster#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeek.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#name DatabaseCloudAutonomousVmCluster#name}.

---

### DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonths <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonths {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonths.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#name DatabaseCloudAutonomousVmCluster#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonths.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#name DatabaseCloudAutonomousVmCluster#name}.

---

### DatabaseCloudAutonomousVmClusterMaintenanceWindowMonths <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowMonths {

};
```


### DatabaseCloudAutonomousVmClusterTimeouts <a name="DatabaseCloudAutonomousVmClusterTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#create DatabaseCloudAutonomousVmCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#delete DatabaseCloudAutonomousVmCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#update DatabaseCloudAutonomousVmCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#create DatabaseCloudAutonomousVmCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#delete DatabaseCloudAutonomousVmCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_autonomous_vm_cluster#update DatabaseCloudAutonomousVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get"></a>

```csharp
private DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek">DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek">DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeek</a>

---


### DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```csharp
private DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.get"></a>

```csharp
private DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.putDaysOfWeek">PutDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.putMonths">PutMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins">ResetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetHoursOfDay">ResetHoursOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled">ResetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled">ResetIsMonthlyPatchingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks">ResetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetMonths">ResetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetPatchingMode">ResetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetSkipRu">ResetSkipRu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDaysOfWeek` <a name="PutDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.putDaysOfWeek"></a>

```csharp
private void PutDaysOfWeek(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* object

---

##### `PutMonths` <a name="PutMonths" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.putMonths"></a>

```csharp
private void PutMonths(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.putMonths.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomActionTimeoutInMins` <a name="ResetCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins"></a>

```csharp
private void ResetCustomActionTimeoutInMins()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetHoursOfDay` <a name="ResetHoursOfDay" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetHoursOfDay"></a>

```csharp
private void ResetHoursOfDay()
```

##### `ResetIsCustomActionTimeoutEnabled` <a name="ResetIsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```csharp
private void ResetIsCustomActionTimeoutEnabled()
```

##### `ResetIsMonthlyPatchingEnabled` <a name="ResetIsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled"></a>

```csharp
private void ResetIsMonthlyPatchingEnabled()
```

##### `ResetLeadTimeInWeeks` <a name="ResetLeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks"></a>

```csharp
private void ResetLeadTimeInWeeks()
```

##### `ResetMonths` <a name="ResetMonths" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetMonths"></a>

```csharp
private void ResetMonths()
```

##### `ResetPatchingMode` <a name="ResetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetPatchingMode"></a>

```csharp
private void ResetPatchingMode()
```

##### `ResetPreference` <a name="ResetPreference" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetPreference"></a>

```csharp
private void ResetPreference()
```

##### `ResetSkipRu` <a name="ResetSkipRu" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetSkipRu"></a>

```csharp
private void ResetSkipRu()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList">DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList">DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput">CustomActionTimeoutInMinsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput">HoursOfDayInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput">IsCustomActionTimeoutEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput">IsMonthlyPatchingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput">LeadTimeInWeeksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.monthsInput">MonthsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.patchingModeInput">PatchingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.skipRuInput">SkipRuInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.skipRu">SkipRu</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails">DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```csharp
public DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList">DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.months"></a>

```csharp
public DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList">DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsMonthsList</a>

---

##### `CustomActionTimeoutInMinsInput`<sup>Optional</sup> <a name="CustomActionTimeoutInMinsInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput"></a>

```csharp
public double CustomActionTimeoutInMinsInput { get; }
```

- *Type:* double

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput"></a>

```csharp
public object DaysOfWeekInput { get; }
```

- *Type:* object

---

##### `HoursOfDayInput`<sup>Optional</sup> <a name="HoursOfDayInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput"></a>

```csharp
public double[] HoursOfDayInput { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```csharp
public object IsCustomActionTimeoutEnabledInput { get; }
```

- *Type:* object

---

##### `IsMonthlyPatchingEnabledInput`<sup>Optional</sup> <a name="IsMonthlyPatchingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```csharp
public object IsMonthlyPatchingEnabledInput { get; }
```

- *Type:* object

---

##### `LeadTimeInWeeksInput`<sup>Optional</sup> <a name="LeadTimeInWeeksInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput"></a>

```csharp
public double LeadTimeInWeeksInput { get; }
```

- *Type:* double

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.monthsInput"></a>

```csharp
public object MonthsInput { get; }
```

- *Type:* object

---

##### `PatchingModeInput`<sup>Optional</sup> <a name="PatchingModeInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.patchingModeInput"></a>

```csharp
public string PatchingModeInput { get; }
```

- *Type:* string

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.preferenceInput"></a>

```csharp
public string PreferenceInput { get; }
```

- *Type:* string

---

##### `SkipRuInput`<sup>Optional</sup> <a name="SkipRuInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.skipRuInput"></a>

```csharp
public object SkipRuInput { get; }
```

- *Type:* object

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput"></a>

```csharp
public double[] WeeksOfMonthInput { get; }
```

- *Type:* double[]

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public object IsCustomActionTimeoutEnabled { get; }
```

- *Type:* object

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public object IsMonthlyPatchingEnabled { get; }
```

- *Type:* object

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```csharp
public object SkipRu { get; }
```

- *Type:* object

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails">DatabaseCloudAutonomousVmClusterMaintenanceWindowDetails</a>

---


### DatabaseCloudAutonomousVmClusterMaintenanceWindowList <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.get"></a>

```csharp
private DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.get"></a>

```csharp
private DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonths">DatabaseCloudAutonomousVmClusterMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```csharp
public DatabaseCloudAutonomousVmClusterMaintenanceWindowMonths InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonths">DatabaseCloudAutonomousVmClusterMaintenanceWindowMonths</a>

---


### DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference <a name="DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList">DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList">DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.skipRu">SkipRu</a></code> | <code>HashiCorp.Cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindow">DatabaseCloudAutonomousVmClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```csharp
public DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList">DatabaseCloudAutonomousVmClusterMaintenanceWindowDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public IResolvable IsCustomActionTimeoutEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public IResolvable IsMonthlyPatchingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months"></a>

```csharp
public DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList">DatabaseCloudAutonomousVmClusterMaintenanceWindowMonthsList</a>

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.skipRu"></a>

```csharp
public BooleanList SkipRu { get; }
```

- *Type:* HashiCorp.Cdktf.BooleanList

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DatabaseCloudAutonomousVmClusterMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterMaintenanceWindow">DatabaseCloudAutonomousVmClusterMaintenanceWindow</a>

---


### DatabaseCloudAutonomousVmClusterTimeoutsOutputReference <a name="DatabaseCloudAutonomousVmClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudAutonomousVmClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudAutonomousVmCluster.DatabaseCloudAutonomousVmClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



