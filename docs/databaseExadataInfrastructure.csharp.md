# `databaseExadataInfrastructure` Submodule <a name="`databaseExadataInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExadataInfrastructure <a name="DatabaseExadataInfrastructure" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure oci_database_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructure(Construct Scope, string Id, DatabaseExadataInfrastructureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig">DatabaseExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig">DatabaseExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putContacts">PutContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putNetworkBondingModeDetails">PutNetworkBondingModeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetActivationFile">ResetActivationFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetAdditionalStorageCount">ResetAdditionalStorageCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetComputeCount">ResetComputeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetContacts">ResetContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCorporateProxy">ResetCorporateProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCreateAsync">ResetCreateAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsCpsOfflineReportEnabled">ResetIsCpsOfflineReportEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsMultiRackDeployment">ResetIsMultiRackDeployment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMultiRackConfigurationFile">ResetMultiRackConfigurationFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetNetworkBondingModeDetails">ResetNetworkBondingModeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetStorageCount">ResetStorageCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContacts` <a name="PutContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putContacts"></a>

```csharp
private void PutContacts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putContacts.parameter.value"></a>

- *Type:* object

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(DatabaseExadataInfrastructureMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

---

##### `PutNetworkBondingModeDetails` <a name="PutNetworkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putNetworkBondingModeDetails"></a>

```csharp
private void PutNetworkBondingModeDetails(DatabaseExadataInfrastructureNetworkBondingModeDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putNetworkBondingModeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseExadataInfrastructureTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>

---

##### `ResetActivationFile` <a name="ResetActivationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetActivationFile"></a>

```csharp
private void ResetActivationFile()
```

##### `ResetAdditionalStorageCount` <a name="ResetAdditionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetAdditionalStorageCount"></a>

```csharp
private void ResetAdditionalStorageCount()
```

##### `ResetComputeCount` <a name="ResetComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetComputeCount"></a>

```csharp
private void ResetComputeCount()
```

##### `ResetContacts` <a name="ResetContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetContacts"></a>

```csharp
private void ResetContacts()
```

##### `ResetCorporateProxy` <a name="ResetCorporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCorporateProxy"></a>

```csharp
private void ResetCorporateProxy()
```

##### `ResetCreateAsync` <a name="ResetCreateAsync" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetCreateAsync"></a>

```csharp
private void ResetCreateAsync()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsCpsOfflineReportEnabled` <a name="ResetIsCpsOfflineReportEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsCpsOfflineReportEnabled"></a>

```csharp
private void ResetIsCpsOfflineReportEnabled()
```

##### `ResetIsMultiRackDeployment` <a name="ResetIsMultiRackDeployment" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetIsMultiRackDeployment"></a>

```csharp
private void ResetIsMultiRackDeployment()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetMultiRackConfigurationFile` <a name="ResetMultiRackConfigurationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetMultiRackConfigurationFile"></a>

```csharp
private void ResetMultiRackConfigurationFile()
```

##### `ResetNetworkBondingModeDetails` <a name="ResetNetworkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetNetworkBondingModeDetails"></a>

```csharp
private void ResetNetworkBondingModeDetails()
```

##### `ResetStorageCount` <a name="ResetStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetStorageCount"></a>

```csharp
private void ResetStorageCount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExadataInfrastructure.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExadataInfrastructure.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExadataInfrastructure.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExadataInfrastructure.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseExadataInfrastructure to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activatedStorageCount">ActivatedStorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeCount">AdditionalComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeSystemModel">AdditionalComputeSystemModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contacts">Contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList">DatabaseExadataInfrastructureContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cpusEnabled">CpusEnabled</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.csiNumber">CsiNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbServerVersion">DbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedFileSystemConfigurations">DefinedFileSystemConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList">DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceSloStatus">MaintenanceSloStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference">DatabaseExadataInfrastructureMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxCpuCount">MaxCpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDataStorageInTbs">MaxDataStorageInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDbNodeStorageInGbs">MaxDbNodeStorageInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxMemoryInGbs">MaxMemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.monthlyDbServerVersion">MonthlyDbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetails">NetworkBondingModeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference">DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.rackSerialNumber">RackSerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageServerVersion">StorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference">DatabaseExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFileInput">ActivationFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCountInput">AdditionalStorageCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidrInput">AdminNetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1Input">CloudControlPlaneServer1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2Input">CloudControlPlaneServer2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCountInput">ComputeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contactsInput">ContactsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxyInput">CorporateProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsyncInput">CreateAsyncInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServerInput">DnsServerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gatewayInput">GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidrInput">InfiniBandNetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabledInput">IsCpsOfflineReportEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeploymentInput">IsMultiRackDeploymentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFileInput">MultiRackConfigurationFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmaskInput">NetmaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetailsInput">NetworkBondingModeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServerInput">NtpServerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCountInput">StorageCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFile">ActivationFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCount">AdditionalStorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidr">AdminNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1">CloudControlPlaneServer1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2">CloudControlPlaneServer2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxy">CorporateProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsync">CreateAsync</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServer">DnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gateway">Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidr">InfiniBandNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabled">IsCpsOfflineReportEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeployment">IsMultiRackDeployment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFile">MultiRackConfigurationFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmask">Netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServer">NtpServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCount">StorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActivatedStorageCount`<sup>Required</sup> <a name="ActivatedStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activatedStorageCount"></a>

```csharp
public double ActivatedStorageCount { get; }
```

- *Type:* double

---

##### `AdditionalComputeCount`<sup>Required</sup> <a name="AdditionalComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeCount"></a>

```csharp
public double AdditionalComputeCount { get; }
```

- *Type:* double

---

##### `AdditionalComputeSystemModel`<sup>Required</sup> <a name="AdditionalComputeSystemModel" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalComputeSystemModel"></a>

```csharp
public string AdditionalComputeSystemModel { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `Contacts`<sup>Required</sup> <a name="Contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contacts"></a>

```csharp
public DatabaseExadataInfrastructureContactsList Contacts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList">DatabaseExadataInfrastructureContactsList</a>

---

##### `CpusEnabled`<sup>Required</sup> <a name="CpusEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cpusEnabled"></a>

```csharp
public double CpusEnabled { get; }
```

- *Type:* double

---

##### `CsiNumber`<sup>Required</sup> <a name="CsiNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.csiNumber"></a>

```csharp
public string CsiNumber { get; }
```

- *Type:* string

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbNodeStorageSizeInGbs"></a>

```csharp
public double DbNodeStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DbServerVersion`<sup>Required</sup> <a name="DbServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dbServerVersion"></a>

```csharp
public string DbServerVersion { get; }
```

- *Type:* string

---

##### `DefinedFileSystemConfigurations`<sup>Required</sup> <a name="DefinedFileSystemConfigurations" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedFileSystemConfigurations"></a>

```csharp
public DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList DefinedFileSystemConfigurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList">DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MaintenanceSloStatus`<sup>Required</sup> <a name="MaintenanceSloStatus" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceSloStatus"></a>

```csharp
public string MaintenanceSloStatus { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindow"></a>

```csharp
public DatabaseExadataInfrastructureMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference">DatabaseExadataInfrastructureMaintenanceWindowOutputReference</a>

---

##### `MaxCpuCount`<sup>Required</sup> <a name="MaxCpuCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxCpuCount"></a>

```csharp
public double MaxCpuCount { get; }
```

- *Type:* double

---

##### `MaxDataStorageInTbs`<sup>Required</sup> <a name="MaxDataStorageInTbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDataStorageInTbs"></a>

```csharp
public double MaxDataStorageInTbs { get; }
```

- *Type:* double

---

##### `MaxDbNodeStorageInGbs`<sup>Required</sup> <a name="MaxDbNodeStorageInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxDbNodeStorageInGbs"></a>

```csharp
public double MaxDbNodeStorageInGbs { get; }
```

- *Type:* double

---

##### `MaxMemoryInGbs`<sup>Required</sup> <a name="MaxMemoryInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maxMemoryInGbs"></a>

```csharp
public double MaxMemoryInGbs { get; }
```

- *Type:* double

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.memorySizeInGbs"></a>

```csharp
public double MemorySizeInGbs { get; }
```

- *Type:* double

---

##### `MonthlyDbServerVersion`<sup>Required</sup> <a name="MonthlyDbServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.monthlyDbServerVersion"></a>

```csharp
public string MonthlyDbServerVersion { get; }
```

- *Type:* string

---

##### `NetworkBondingModeDetails`<sup>Required</sup> <a name="NetworkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetails"></a>

```csharp
public DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference NetworkBondingModeDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference">DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference</a>

---

##### `RackSerialNumber`<sup>Required</sup> <a name="RackSerialNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.rackSerialNumber"></a>

```csharp
public string RackSerialNumber { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageServerVersion`<sup>Required</sup> <a name="StorageServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageServerVersion"></a>

```csharp
public string StorageServerVersion { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeouts"></a>

```csharp
public DatabaseExadataInfrastructureTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference">DatabaseExadataInfrastructureTimeoutsOutputReference</a>

---

##### `ActivationFileInput`<sup>Optional</sup> <a name="ActivationFileInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFileInput"></a>

```csharp
public string ActivationFileInput { get; }
```

- *Type:* string

---

##### `AdditionalStorageCountInput`<sup>Optional</sup> <a name="AdditionalStorageCountInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCountInput"></a>

```csharp
public double AdditionalStorageCountInput { get; }
```

- *Type:* double

---

##### `AdminNetworkCidrInput`<sup>Optional</sup> <a name="AdminNetworkCidrInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidrInput"></a>

```csharp
public string AdminNetworkCidrInput { get; }
```

- *Type:* string

---

##### `CloudControlPlaneServer1Input`<sup>Optional</sup> <a name="CloudControlPlaneServer1Input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1Input"></a>

```csharp
public string CloudControlPlaneServer1Input { get; }
```

- *Type:* string

---

##### `CloudControlPlaneServer2Input`<sup>Optional</sup> <a name="CloudControlPlaneServer2Input" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2Input"></a>

```csharp
public string CloudControlPlaneServer2Input { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCountInput"></a>

```csharp
public double ComputeCountInput { get; }
```

- *Type:* double

---

##### `ContactsInput`<sup>Optional</sup> <a name="ContactsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.contactsInput"></a>

```csharp
public object ContactsInput { get; }
```

- *Type:* object

---

##### `CorporateProxyInput`<sup>Optional</sup> <a name="CorporateProxyInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxyInput"></a>

```csharp
public string CorporateProxyInput { get; }
```

- *Type:* string

---

##### `CreateAsyncInput`<sup>Optional</sup> <a name="CreateAsyncInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsyncInput"></a>

```csharp
public object CreateAsyncInput { get; }
```

- *Type:* object

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DnsServerInput`<sup>Optional</sup> <a name="DnsServerInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServerInput"></a>

```csharp
public string[] DnsServerInput { get; }
```

- *Type:* string[]

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gatewayInput"></a>

```csharp
public string GatewayInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InfiniBandNetworkCidrInput`<sup>Optional</sup> <a name="InfiniBandNetworkCidrInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidrInput"></a>

```csharp
public string InfiniBandNetworkCidrInput { get; }
```

- *Type:* string

---

##### `IsCpsOfflineReportEnabledInput`<sup>Optional</sup> <a name="IsCpsOfflineReportEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabledInput"></a>

```csharp
public object IsCpsOfflineReportEnabledInput { get; }
```

- *Type:* object

---

##### `IsMultiRackDeploymentInput`<sup>Optional</sup> <a name="IsMultiRackDeploymentInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeploymentInput"></a>

```csharp
public object IsMultiRackDeploymentInput { get; }
```

- *Type:* object

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.maintenanceWindowInput"></a>

```csharp
public DatabaseExadataInfrastructureMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

---

##### `MultiRackConfigurationFileInput`<sup>Optional</sup> <a name="MultiRackConfigurationFileInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFileInput"></a>

```csharp
public string MultiRackConfigurationFileInput { get; }
```

- *Type:* string

---

##### `NetmaskInput`<sup>Optional</sup> <a name="NetmaskInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmaskInput"></a>

```csharp
public string NetmaskInput { get; }
```

- *Type:* string

---

##### `NetworkBondingModeDetailsInput`<sup>Optional</sup> <a name="NetworkBondingModeDetailsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.networkBondingModeDetailsInput"></a>

```csharp
public DatabaseExadataInfrastructureNetworkBondingModeDetails NetworkBondingModeDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

---

##### `NtpServerInput`<sup>Optional</sup> <a name="NtpServerInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServerInput"></a>

```csharp
public string[] NtpServerInput { get; }
```

- *Type:* string[]

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `StorageCountInput`<sup>Optional</sup> <a name="StorageCountInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCountInput"></a>

```csharp
public double StorageCountInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `ActivationFile`<sup>Required</sup> <a name="ActivationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.activationFile"></a>

```csharp
public string ActivationFile { get; }
```

- *Type:* string

---

##### `AdditionalStorageCount`<sup>Required</sup> <a name="AdditionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.additionalStorageCount"></a>

```csharp
public double AdditionalStorageCount { get; }
```

- *Type:* double

---

##### `AdminNetworkCidr`<sup>Required</sup> <a name="AdminNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.adminNetworkCidr"></a>

```csharp
public string AdminNetworkCidr { get; }
```

- *Type:* string

---

##### `CloudControlPlaneServer1`<sup>Required</sup> <a name="CloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer1"></a>

```csharp
public string CloudControlPlaneServer1 { get; }
```

- *Type:* string

---

##### `CloudControlPlaneServer2`<sup>Required</sup> <a name="CloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.cloudControlPlaneServer2"></a>

```csharp
public string CloudControlPlaneServer2 { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `CorporateProxy`<sup>Required</sup> <a name="CorporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.corporateProxy"></a>

```csharp
public string CorporateProxy { get; }
```

- *Type:* string

---

##### `CreateAsync`<sup>Required</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.createAsync"></a>

```csharp
public object CreateAsync { get; }
```

- *Type:* object

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.dnsServer"></a>

```csharp
public string[] DnsServer { get; }
```

- *Type:* string[]

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.gateway"></a>

```csharp
public string Gateway { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfiniBandNetworkCidr`<sup>Required</sup> <a name="InfiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.infiniBandNetworkCidr"></a>

```csharp
public string InfiniBandNetworkCidr { get; }
```

- *Type:* string

---

##### `IsCpsOfflineReportEnabled`<sup>Required</sup> <a name="IsCpsOfflineReportEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isCpsOfflineReportEnabled"></a>

```csharp
public object IsCpsOfflineReportEnabled { get; }
```

- *Type:* object

---

##### `IsMultiRackDeployment`<sup>Required</sup> <a name="IsMultiRackDeployment" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.isMultiRackDeployment"></a>

```csharp
public object IsMultiRackDeployment { get; }
```

- *Type:* object

---

##### `MultiRackConfigurationFile`<sup>Required</sup> <a name="MultiRackConfigurationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.multiRackConfigurationFile"></a>

```csharp
public string MultiRackConfigurationFile { get; }
```

- *Type:* string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.netmask"></a>

```csharp
public string Netmask { get; }
```

- *Type:* string

---

##### `NtpServer`<sup>Required</sup> <a name="NtpServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.ntpServer"></a>

```csharp
public string[] NtpServer { get; }
```

- *Type:* string[]

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `StorageCount`<sup>Required</sup> <a name="StorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.storageCount"></a>

```csharp
public double StorageCount { get; }
```

- *Type:* double

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructure.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExadataInfrastructureConfig <a name="DatabaseExadataInfrastructureConfig" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AdminNetworkCidr,
    string CloudControlPlaneServer1,
    string CloudControlPlaneServer2,
    string CompartmentId,
    string DisplayName,
    string[] DnsServer,
    string Gateway,
    string InfiniBandNetworkCidr,
    string Netmask,
    string[] NtpServer,
    string Shape,
    string TimeZone,
    string ActivationFile = null,
    double AdditionalStorageCount = null,
    double ComputeCount = null,
    object Contacts = null,
    string CorporateProxy = null,
    object CreateAsync = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsCpsOfflineReportEnabled = null,
    object IsMultiRackDeployment = null,
    DatabaseExadataInfrastructureMaintenanceWindow MaintenanceWindow = null,
    string MultiRackConfigurationFile = null,
    DatabaseExadataInfrastructureNetworkBondingModeDetails NetworkBondingModeDetails = null,
    double StorageCount = null,
    DatabaseExadataInfrastructureTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.adminNetworkCidr">AdminNetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#admin_network_cidr DatabaseExadataInfrastructure#admin_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer1">CloudControlPlaneServer1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server1 DatabaseExadataInfrastructure#cloud_control_plane_server1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer2">CloudControlPlaneServer2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server2 DatabaseExadataInfrastructure#cloud_control_plane_server2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compartment_id DatabaseExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#display_name DatabaseExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dnsServer">DnsServer</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dns_server DatabaseExadataInfrastructure#dns_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.gateway">Gateway</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#gateway DatabaseExadataInfrastructure#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.infiniBandNetworkCidr">InfiniBandNetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#infini_band_network_cidr DatabaseExadataInfrastructure#infini_band_network_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.netmask">Netmask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#netmask DatabaseExadataInfrastructure#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.ntpServer">NtpServer</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#ntp_server DatabaseExadataInfrastructure#ntp_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#shape DatabaseExadataInfrastructure#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#time_zone DatabaseExadataInfrastructure#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.activationFile">ActivationFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#activation_file DatabaseExadataInfrastructure#activation_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.additionalStorageCount">AdditionalStorageCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#additional_storage_count DatabaseExadataInfrastructure#additional_storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.computeCount">ComputeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compute_count DatabaseExadataInfrastructure#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.contacts">Contacts</a></code> | <code>object</code> | contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.corporateProxy">CorporateProxy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#corporate_proxy DatabaseExadataInfrastructure#corporate_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.createAsync">CreateAsync</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create_async DatabaseExadataInfrastructure#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#defined_tags DatabaseExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#freeform_tags DatabaseExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#id DatabaseExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isCpsOfflineReportEnabled">IsCpsOfflineReportEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_cps_offline_report_enabled DatabaseExadataInfrastructure#is_cps_offline_report_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isMultiRackDeployment">IsMultiRackDeployment</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_multi_rack_deployment DatabaseExadataInfrastructure#is_multi_rack_deployment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.multiRackConfigurationFile">MultiRackConfigurationFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#multi_rack_configuration_file DatabaseExadataInfrastructure#multi_rack_configuration_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.networkBondingModeDetails">NetworkBondingModeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a></code> | network_bonding_mode_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.storageCount">StorageCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#storage_count DatabaseExadataInfrastructure#storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AdminNetworkCidr`<sup>Required</sup> <a name="AdminNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.adminNetworkCidr"></a>

```csharp
public string AdminNetworkCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#admin_network_cidr DatabaseExadataInfrastructure#admin_network_cidr}.

---

##### `CloudControlPlaneServer1`<sup>Required</sup> <a name="CloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer1"></a>

```csharp
public string CloudControlPlaneServer1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server1 DatabaseExadataInfrastructure#cloud_control_plane_server1}.

---

##### `CloudControlPlaneServer2`<sup>Required</sup> <a name="CloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.cloudControlPlaneServer2"></a>

```csharp
public string CloudControlPlaneServer2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#cloud_control_plane_server2 DatabaseExadataInfrastructure#cloud_control_plane_server2}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compartment_id DatabaseExadataInfrastructure#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#display_name DatabaseExadataInfrastructure#display_name}.

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.dnsServer"></a>

```csharp
public string[] DnsServer { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dns_server DatabaseExadataInfrastructure#dns_server}.

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.gateway"></a>

```csharp
public string Gateway { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#gateway DatabaseExadataInfrastructure#gateway}.

---

##### `InfiniBandNetworkCidr`<sup>Required</sup> <a name="InfiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.infiniBandNetworkCidr"></a>

```csharp
public string InfiniBandNetworkCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#infini_band_network_cidr DatabaseExadataInfrastructure#infini_band_network_cidr}.

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.netmask"></a>

```csharp
public string Netmask { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#netmask DatabaseExadataInfrastructure#netmask}.

---

##### `NtpServer`<sup>Required</sup> <a name="NtpServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.ntpServer"></a>

```csharp
public string[] NtpServer { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#ntp_server DatabaseExadataInfrastructure#ntp_server}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#shape DatabaseExadataInfrastructure#shape}.

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#time_zone DatabaseExadataInfrastructure#time_zone}.

---

##### `ActivationFile`<sup>Optional</sup> <a name="ActivationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.activationFile"></a>

```csharp
public string ActivationFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#activation_file DatabaseExadataInfrastructure#activation_file}.

---

##### `AdditionalStorageCount`<sup>Optional</sup> <a name="AdditionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.additionalStorageCount"></a>

```csharp
public double AdditionalStorageCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#additional_storage_count DatabaseExadataInfrastructure#additional_storage_count}.

---

##### `ComputeCount`<sup>Optional</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.computeCount"></a>

```csharp
public double ComputeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#compute_count DatabaseExadataInfrastructure#compute_count}.

---

##### `Contacts`<sup>Optional</sup> <a name="Contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.contacts"></a>

```csharp
public object Contacts { get; set; }
```

- *Type:* object

contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#contacts DatabaseExadataInfrastructure#contacts}

---

##### `CorporateProxy`<sup>Optional</sup> <a name="CorporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.corporateProxy"></a>

```csharp
public string CorporateProxy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#corporate_proxy DatabaseExadataInfrastructure#corporate_proxy}.

---

##### `CreateAsync`<sup>Optional</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.createAsync"></a>

```csharp
public object CreateAsync { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create_async DatabaseExadataInfrastructure#create_async}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#defined_tags DatabaseExadataInfrastructure#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#freeform_tags DatabaseExadataInfrastructure#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#id DatabaseExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCpsOfflineReportEnabled`<sup>Optional</sup> <a name="IsCpsOfflineReportEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isCpsOfflineReportEnabled"></a>

```csharp
public object IsCpsOfflineReportEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_cps_offline_report_enabled DatabaseExadataInfrastructure#is_cps_offline_report_enabled}.

---

##### `IsMultiRackDeployment`<sup>Optional</sup> <a name="IsMultiRackDeployment" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.isMultiRackDeployment"></a>

```csharp
public object IsMultiRackDeployment { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_multi_rack_deployment DatabaseExadataInfrastructure#is_multi_rack_deployment}.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.maintenanceWindow"></a>

```csharp
public DatabaseExadataInfrastructureMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#maintenance_window DatabaseExadataInfrastructure#maintenance_window}

---

##### `MultiRackConfigurationFile`<sup>Optional</sup> <a name="MultiRackConfigurationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.multiRackConfigurationFile"></a>

```csharp
public string MultiRackConfigurationFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#multi_rack_configuration_file DatabaseExadataInfrastructure#multi_rack_configuration_file}.

---

##### `NetworkBondingModeDetails`<sup>Optional</sup> <a name="NetworkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.networkBondingModeDetails"></a>

```csharp
public DatabaseExadataInfrastructureNetworkBondingModeDetails NetworkBondingModeDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

network_bonding_mode_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#network_bonding_mode_details DatabaseExadataInfrastructure#network_bonding_mode_details}

---

##### `StorageCount`<sup>Optional</sup> <a name="StorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.storageCount"></a>

```csharp
public double StorageCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#storage_count DatabaseExadataInfrastructure#storage_count}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureConfig.property.timeouts"></a>

```csharp
public DatabaseExadataInfrastructureTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts">DatabaseExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#timeouts DatabaseExadataInfrastructure#timeouts}

---

### DatabaseExadataInfrastructureContacts <a name="DatabaseExadataInfrastructureContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureContacts {
    string Email,
    object IsPrimary,
    string Name,
    object IsContactMosValidated = null,
    string PhoneNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#email DatabaseExadataInfrastructure#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isPrimary">IsPrimary</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_primary DatabaseExadataInfrastructure#is_primary}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isContactMosValidated">IsContactMosValidated</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_contact_mos_validated DatabaseExadataInfrastructure#is_contact_mos_validated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#phone_number DatabaseExadataInfrastructure#phone_number}. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#email DatabaseExadataInfrastructure#email}.

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isPrimary"></a>

```csharp
public object IsPrimary { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_primary DatabaseExadataInfrastructure#is_primary}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}.

---

##### `IsContactMosValidated`<sup>Optional</sup> <a name="IsContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.isContactMosValidated"></a>

```csharp
public object IsContactMosValidated { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_contact_mos_validated DatabaseExadataInfrastructure#is_contact_mos_validated}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContacts.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#phone_number DatabaseExadataInfrastructure#phone_number}.

---

### DatabaseExadataInfrastructureDefinedFileSystemConfigurations <a name="DatabaseExadataInfrastructureDefinedFileSystemConfigurations" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureDefinedFileSystemConfigurations {

};
```


### DatabaseExadataInfrastructureMaintenanceWindow <a name="DatabaseExadataInfrastructureMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureMaintenanceWindow {
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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#custom_action_timeout_in_mins DatabaseExadataInfrastructure#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.daysOfWeek">DaysOfWeek</a></code> | <code>object</code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#hours_of_day DatabaseExadataInfrastructure#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseExadataInfrastructure#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_monthly_patching_enabled DatabaseExadataInfrastructure#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#lead_time_in_weeks DatabaseExadataInfrastructure#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.months">Months</a></code> | <code>object</code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.patchingMode">PatchingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#patching_mode DatabaseExadataInfrastructure#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.preference">Preference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#preference DatabaseExadataInfrastructure#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.skipRu">SkipRu</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#skip_ru DatabaseExadataInfrastructure#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#weeks_of_month DatabaseExadataInfrastructure#weeks_of_month}. |

---

##### `CustomActionTimeoutInMins`<sup>Optional</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#custom_action_timeout_in_mins DatabaseExadataInfrastructure#custom_action_timeout_in_mins}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.daysOfWeek"></a>

```csharp
public object DaysOfWeek { get; set; }
```

- *Type:* object

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#days_of_week DatabaseExadataInfrastructure#days_of_week}

---

##### `HoursOfDay`<sup>Optional</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#hours_of_day DatabaseExadataInfrastructure#hours_of_day}.

---

##### `IsCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```csharp
public object IsCustomActionTimeoutEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseExadataInfrastructure#is_custom_action_timeout_enabled}.

---

##### `IsMonthlyPatchingEnabled`<sup>Optional</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.isMonthlyPatchingEnabled"></a>

```csharp
public object IsMonthlyPatchingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#is_monthly_patching_enabled DatabaseExadataInfrastructure#is_monthly_patching_enabled}.

---

##### `LeadTimeInWeeks`<sup>Optional</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#lead_time_in_weeks DatabaseExadataInfrastructure#lead_time_in_weeks}.

---

##### `Months`<sup>Optional</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.months"></a>

```csharp
public object Months { get; set; }
```

- *Type:* object

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#months DatabaseExadataInfrastructure#months}

---

##### `PatchingMode`<sup>Optional</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.patchingMode"></a>

```csharp
public string PatchingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#patching_mode DatabaseExadataInfrastructure#patching_mode}.

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.preference"></a>

```csharp
public string Preference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#preference DatabaseExadataInfrastructure#preference}.

---

##### `SkipRu`<sup>Optional</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.skipRu"></a>

```csharp
public object SkipRu { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#skip_ru DatabaseExadataInfrastructure#skip_ru}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#weeks_of_month DatabaseExadataInfrastructure#weeks_of_month}.

---

### DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek <a name="DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeek.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}.

---

### DatabaseExadataInfrastructureMaintenanceWindowMonths <a name="DatabaseExadataInfrastructureMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureMaintenanceWindowMonths {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonths.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#name DatabaseExadataInfrastructure#name}.

---

### DatabaseExadataInfrastructureNetworkBondingModeDetails <a name="DatabaseExadataInfrastructureNetworkBondingModeDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureNetworkBondingModeDetails {
    string BackupNetworkBondingMode = null,
    string ClientNetworkBondingMode = null,
    string DrNetworkBondingMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.backupNetworkBondingMode">BackupNetworkBondingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#backup_network_bonding_mode DatabaseExadataInfrastructure#backup_network_bonding_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.clientNetworkBondingMode">ClientNetworkBondingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#client_network_bonding_mode DatabaseExadataInfrastructure#client_network_bonding_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.drNetworkBondingMode">DrNetworkBondingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dr_network_bonding_mode DatabaseExadataInfrastructure#dr_network_bonding_mode}. |

---

##### `BackupNetworkBondingMode`<sup>Optional</sup> <a name="BackupNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.backupNetworkBondingMode"></a>

```csharp
public string BackupNetworkBondingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#backup_network_bonding_mode DatabaseExadataInfrastructure#backup_network_bonding_mode}.

---

##### `ClientNetworkBondingMode`<sup>Optional</sup> <a name="ClientNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.clientNetworkBondingMode"></a>

```csharp
public string ClientNetworkBondingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#client_network_bonding_mode DatabaseExadataInfrastructure#client_network_bonding_mode}.

---

##### `DrNetworkBondingMode`<sup>Optional</sup> <a name="DrNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails.property.drNetworkBondingMode"></a>

```csharp
public string DrNetworkBondingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#dr_network_bonding_mode DatabaseExadataInfrastructure#dr_network_bonding_mode}.

---

### DatabaseExadataInfrastructureTimeouts <a name="DatabaseExadataInfrastructureTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create DatabaseExadataInfrastructure#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#delete DatabaseExadataInfrastructure#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#update DatabaseExadataInfrastructure#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#create DatabaseExadataInfrastructure#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#delete DatabaseExadataInfrastructure#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure#update DatabaseExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExadataInfrastructureContactsList <a name="DatabaseExadataInfrastructureContactsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureContactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.get"></a>

```csharp
private DatabaseExadataInfrastructureContactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseExadataInfrastructureContactsOutputReference <a name="DatabaseExadataInfrastructureContactsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureContactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetIsContactMosValidated">ResetIsContactMosValidated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsContactMosValidated` <a name="ResetIsContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetIsContactMosValidated"></a>

```csharp
private void ResetIsContactMosValidated()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidatedInput">IsContactMosValidatedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimaryInput">IsPrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidated">IsContactMosValidated</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimary">IsPrimary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IsContactMosValidatedInput`<sup>Optional</sup> <a name="IsContactMosValidatedInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidatedInput"></a>

```csharp
public object IsContactMosValidatedInput { get; }
```

- *Type:* object

---

##### `IsPrimaryInput`<sup>Optional</sup> <a name="IsPrimaryInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimaryInput"></a>

```csharp
public object IsPrimaryInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `IsContactMosValidated`<sup>Required</sup> <a name="IsContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isContactMosValidated"></a>

```csharp
public object IsContactMosValidated { get; }
```

- *Type:* object

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.isPrimary"></a>

```csharp
public object IsPrimary { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureContactsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList <a name="DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.get"></a>

```csharp
private DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference <a name="DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition">IsBackupPartition</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isResizable">IsResizable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.minSizeGb">MinSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations">DatabaseExadataInfrastructureDefinedFileSystemConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsBackupPartition`<sup>Required</sup> <a name="IsBackupPartition" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition"></a>

```csharp
public IResolvable IsBackupPartition { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsResizable`<sup>Required</sup> <a name="IsResizable" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isResizable"></a>

```csharp
public IResolvable IsResizable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MinSizeGb`<sup>Required</sup> <a name="MinSizeGb" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.minSizeGb"></a>

```csharp
public double MinSizeGb { get; }
```

- *Type:* double

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DatabaseExadataInfrastructureDefinedFileSystemConfigurations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureDefinedFileSystemConfigurations">DatabaseExadataInfrastructureDefinedFileSystemConfigurations</a>

---


### DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList <a name="DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.get"></a>

```csharp
private DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseExadataInfrastructureMaintenanceWindowMonthsList <a name="DatabaseExadataInfrastructureMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureMaintenanceWindowMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.get"></a>

```csharp
private DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference <a name="DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseExadataInfrastructureMaintenanceWindowOutputReference <a name="DatabaseExadataInfrastructureMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek">PutDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putMonths">PutMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins">ResetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay">ResetHoursOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled">ResetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsMonthlyPatchingEnabled">ResetIsMonthlyPatchingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks">ResetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetMonths">ResetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode">ResetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetSkipRu">ResetSkipRu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDaysOfWeek` <a name="PutDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek"></a>

```csharp
private void PutDaysOfWeek(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* object

---

##### `PutMonths` <a name="PutMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putMonths"></a>

```csharp
private void PutMonths(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.putMonths.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomActionTimeoutInMins` <a name="ResetCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins"></a>

```csharp
private void ResetCustomActionTimeoutInMins()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetHoursOfDay` <a name="ResetHoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```csharp
private void ResetHoursOfDay()
```

##### `ResetIsCustomActionTimeoutEnabled` <a name="ResetIsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```csharp
private void ResetIsCustomActionTimeoutEnabled()
```

##### `ResetIsMonthlyPatchingEnabled` <a name="ResetIsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetIsMonthlyPatchingEnabled"></a>

```csharp
private void ResetIsMonthlyPatchingEnabled()
```

##### `ResetLeadTimeInWeeks` <a name="ResetLeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```csharp
private void ResetLeadTimeInWeeks()
```

##### `ResetMonths` <a name="ResetMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetMonths"></a>

```csharp
private void ResetMonths()
```

##### `ResetPatchingMode` <a name="ResetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode"></a>

```csharp
private void ResetPatchingMode()
```

##### `ResetPreference` <a name="ResetPreference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetPreference"></a>

```csharp
private void ResetPreference()
```

##### `ResetSkipRu` <a name="ResetSkipRu" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetSkipRu"></a>

```csharp
private void ResetSkipRu()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList">DatabaseExadataInfrastructureMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput">CustomActionTimeoutInMinsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput">HoursOfDayInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">IsCustomActionTimeoutEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabledInput">IsMonthlyPatchingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">LeadTimeInWeeksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput">MonthsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput">PatchingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRuInput">SkipRuInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRu">SkipRu</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```csharp
public DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureMaintenanceWindowDaysOfWeekList</a>

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```csharp
public DatabaseExadataInfrastructureMaintenanceWindowMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowMonthsList">DatabaseExadataInfrastructureMaintenanceWindowMonthsList</a>

---

##### `CustomActionTimeoutInMinsInput`<sup>Optional</sup> <a name="CustomActionTimeoutInMinsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput"></a>

```csharp
public double CustomActionTimeoutInMinsInput { get; }
```

- *Type:* double

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```csharp
public object DaysOfWeekInput { get; }
```

- *Type:* object

---

##### `HoursOfDayInput`<sup>Optional</sup> <a name="HoursOfDayInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```csharp
public double[] HoursOfDayInput { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```csharp
public object IsCustomActionTimeoutEnabledInput { get; }
```

- *Type:* object

---

##### `IsMonthlyPatchingEnabledInput`<sup>Optional</sup> <a name="IsMonthlyPatchingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```csharp
public object IsMonthlyPatchingEnabledInput { get; }
```

- *Type:* object

---

##### `LeadTimeInWeeksInput`<sup>Optional</sup> <a name="LeadTimeInWeeksInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```csharp
public double LeadTimeInWeeksInput { get; }
```

- *Type:* double

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput"></a>

```csharp
public object MonthsInput { get; }
```

- *Type:* object

---

##### `PatchingModeInput`<sup>Optional</sup> <a name="PatchingModeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```csharp
public string PatchingModeInput { get; }
```

- *Type:* string

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput"></a>

```csharp
public string PreferenceInput { get; }
```

- *Type:* string

---

##### `SkipRuInput`<sup>Optional</sup> <a name="SkipRuInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRuInput"></a>

```csharp
public object SkipRuInput { get; }
```

- *Type:* object

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```csharp
public double[] WeeksOfMonthInput { get; }
```

- *Type:* double[]

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public object IsCustomActionTimeoutEnabled { get; }
```

- *Type:* object

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public object IsMonthlyPatchingEnabled { get; }
```

- *Type:* object

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.skipRu"></a>

```csharp
public object SkipRu { get; }
```

- *Type:* object

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DatabaseExadataInfrastructureMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureMaintenanceWindow">DatabaseExadataInfrastructureMaintenanceWindow</a>

---


### DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference <a name="DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetBackupNetworkBondingMode">ResetBackupNetworkBondingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetClientNetworkBondingMode">ResetClientNetworkBondingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetDrNetworkBondingMode">ResetDrNetworkBondingMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupNetworkBondingMode` <a name="ResetBackupNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetBackupNetworkBondingMode"></a>

```csharp
private void ResetBackupNetworkBondingMode()
```

##### `ResetClientNetworkBondingMode` <a name="ResetClientNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetClientNetworkBondingMode"></a>

```csharp
private void ResetClientNetworkBondingMode()
```

##### `ResetDrNetworkBondingMode` <a name="ResetDrNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.resetDrNetworkBondingMode"></a>

```csharp
private void ResetDrNetworkBondingMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingModeInput">BackupNetworkBondingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingModeInput">ClientNetworkBondingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingModeInput">DrNetworkBondingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingMode">BackupNetworkBondingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingMode">ClientNetworkBondingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingMode">DrNetworkBondingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupNetworkBondingModeInput`<sup>Optional</sup> <a name="BackupNetworkBondingModeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingModeInput"></a>

```csharp
public string BackupNetworkBondingModeInput { get; }
```

- *Type:* string

---

##### `ClientNetworkBondingModeInput`<sup>Optional</sup> <a name="ClientNetworkBondingModeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingModeInput"></a>

```csharp
public string ClientNetworkBondingModeInput { get; }
```

- *Type:* string

---

##### `DrNetworkBondingModeInput`<sup>Optional</sup> <a name="DrNetworkBondingModeInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingModeInput"></a>

```csharp
public string DrNetworkBondingModeInput { get; }
```

- *Type:* string

---

##### `BackupNetworkBondingMode`<sup>Required</sup> <a name="BackupNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingMode"></a>

```csharp
public string BackupNetworkBondingMode { get; }
```

- *Type:* string

---

##### `ClientNetworkBondingMode`<sup>Required</sup> <a name="ClientNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingMode"></a>

```csharp
public string ClientNetworkBondingMode { get; }
```

- *Type:* string

---

##### `DrNetworkBondingMode`<sup>Required</sup> <a name="DrNetworkBondingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.drNetworkBondingMode"></a>

```csharp
public string DrNetworkBondingMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabaseExadataInfrastructureNetworkBondingModeDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureNetworkBondingModeDetails">DatabaseExadataInfrastructureNetworkBondingModeDetails</a>

---


### DatabaseExadataInfrastructureTimeoutsOutputReference <a name="DatabaseExadataInfrastructureTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructure.DatabaseExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



