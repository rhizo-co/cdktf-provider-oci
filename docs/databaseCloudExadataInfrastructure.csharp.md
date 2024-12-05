# `databaseCloudExadataInfrastructure` Submodule <a name="`databaseCloudExadataInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseCloudExadataInfrastructure <a name="DatabaseCloudExadataInfrastructure" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure oci_database_cloud_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructure(Construct Scope, string Id, DatabaseCloudExadataInfrastructureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig">DatabaseCloudExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig">DatabaseCloudExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.putCustomerContacts">PutCustomerContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetClusterPlacementGroupId">ResetClusterPlacementGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetComputeCount">ResetComputeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetCustomerContacts">ResetCustomerContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetStorageCount">ResetStorageCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomerContacts` <a name="PutCustomerContacts" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.putCustomerContacts"></a>

```csharp
private void PutCustomerContacts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.putCustomerContacts.parameter.value"></a>

- *Type:* object

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(DatabaseCloudExadataInfrastructureMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow">DatabaseCloudExadataInfrastructureMaintenanceWindow</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseCloudExadataInfrastructureTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeouts">DatabaseCloudExadataInfrastructureTimeouts</a>

---

##### `ResetClusterPlacementGroupId` <a name="ResetClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetClusterPlacementGroupId"></a>

```csharp
private void ResetClusterPlacementGroupId()
```

##### `ResetComputeCount` <a name="ResetComputeCount" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetComputeCount"></a>

```csharp
private void ResetComputeCount()
```

##### `ResetCustomerContacts` <a name="ResetCustomerContacts" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetCustomerContacts"></a>

```csharp
private void ResetCustomerContacts()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetStorageCount` <a name="ResetStorageCount" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetStorageCount"></a>

```csharp
private void ResetStorageCount()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseCloudExadataInfrastructure.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseCloudExadataInfrastructure.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseCloudExadataInfrastructure.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseCloudExadataInfrastructure.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseCloudExadataInfrastructure to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseCloudExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseCloudExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.activatedStorageCount">ActivatedStorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.additionalStorageCount">AdditionalStorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.availableStorageSizeInGbs">AvailableStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.cpuCount">CpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.customerContacts">CustomerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList">DatabaseCloudExadataInfrastructureCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.dbServerVersion">DbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.definedFileSystemConfigurations">DefinedFileSystemConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList">DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.lastMaintenanceRunId">LastMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference">DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.maxCpuCount">MaxCpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.maxDataStorageInTbs">MaxDataStorageInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.maxDbNodeStorageInGbs">MaxDbNodeStorageInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.maxMemoryInGbs">MaxMemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.monthlyDbServerVersion">MonthlyDbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.monthlyStorageServerVersion">MonthlyStorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.nextMaintenanceRunId">NextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.storageServerVersion">StorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference">DatabaseCloudExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.totalStorageSizeInGbs">TotalStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.clusterPlacementGroupIdInput">ClusterPlacementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.computeCountInput">ComputeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.customerContactsInput">CustomerContactsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow">DatabaseCloudExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.storageCountInput">StorageCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.storageCount">StorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActivatedStorageCount`<sup>Required</sup> <a name="ActivatedStorageCount" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.activatedStorageCount"></a>

```csharp
public double ActivatedStorageCount { get; }
```

- *Type:* double

---

##### `AdditionalStorageCount`<sup>Required</sup> <a name="AdditionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.additionalStorageCount"></a>

```csharp
public double AdditionalStorageCount { get; }
```

- *Type:* double

---

##### `AvailableStorageSizeInGbs`<sup>Required</sup> <a name="AvailableStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.availableStorageSizeInGbs"></a>

```csharp
public double AvailableStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.cpuCount"></a>

```csharp
public double CpuCount { get; }
```

- *Type:* double

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.customerContacts"></a>

```csharp
public DatabaseCloudExadataInfrastructureCustomerContactsList CustomerContacts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList">DatabaseCloudExadataInfrastructureCustomerContactsList</a>

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.dbNodeStorageSizeInGbs"></a>

```csharp
public double DbNodeStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DbServerVersion`<sup>Required</sup> <a name="DbServerVersion" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.dbServerVersion"></a>

```csharp
public string DbServerVersion { get; }
```

- *Type:* string

---

##### `DefinedFileSystemConfigurations`<sup>Required</sup> <a name="DefinedFileSystemConfigurations" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.definedFileSystemConfigurations"></a>

```csharp
public DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList DefinedFileSystemConfigurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList">DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList</a>

---

##### `LastMaintenanceRunId`<sup>Required</sup> <a name="LastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.lastMaintenanceRunId"></a>

```csharp
public string LastMaintenanceRunId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.maintenanceWindow"></a>

```csharp
public DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference">DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference</a>

---

##### `MaxCpuCount`<sup>Required</sup> <a name="MaxCpuCount" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.maxCpuCount"></a>

```csharp
public double MaxCpuCount { get; }
```

- *Type:* double

---

##### `MaxDataStorageInTbs`<sup>Required</sup> <a name="MaxDataStorageInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.maxDataStorageInTbs"></a>

```csharp
public double MaxDataStorageInTbs { get; }
```

- *Type:* double

---

##### `MaxDbNodeStorageInGbs`<sup>Required</sup> <a name="MaxDbNodeStorageInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.maxDbNodeStorageInGbs"></a>

```csharp
public double MaxDbNodeStorageInGbs { get; }
```

- *Type:* double

---

##### `MaxMemoryInGbs`<sup>Required</sup> <a name="MaxMemoryInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.maxMemoryInGbs"></a>

```csharp
public double MaxMemoryInGbs { get; }
```

- *Type:* double

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.memorySizeInGbs"></a>

```csharp
public double MemorySizeInGbs { get; }
```

- *Type:* double

---

##### `MonthlyDbServerVersion`<sup>Required</sup> <a name="MonthlyDbServerVersion" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.monthlyDbServerVersion"></a>

```csharp
public string MonthlyDbServerVersion { get; }
```

- *Type:* string

---

##### `MonthlyStorageServerVersion`<sup>Required</sup> <a name="MonthlyStorageServerVersion" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.monthlyStorageServerVersion"></a>

```csharp
public string MonthlyStorageServerVersion { get; }
```

- *Type:* string

---

##### `NextMaintenanceRunId`<sup>Required</sup> <a name="NextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.nextMaintenanceRunId"></a>

```csharp
public string NextMaintenanceRunId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageServerVersion`<sup>Required</sup> <a name="StorageServerVersion" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.storageServerVersion"></a>

```csharp
public string StorageServerVersion { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.timeouts"></a>

```csharp
public DatabaseCloudExadataInfrastructureTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference">DatabaseCloudExadataInfrastructureTimeoutsOutputReference</a>

---

##### `TotalStorageSizeInGbs`<sup>Required</sup> <a name="TotalStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.totalStorageSizeInGbs"></a>

```csharp
public double TotalStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `ClusterPlacementGroupIdInput`<sup>Optional</sup> <a name="ClusterPlacementGroupIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.clusterPlacementGroupIdInput"></a>

```csharp
public string ClusterPlacementGroupIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.computeCountInput"></a>

```csharp
public double ComputeCountInput { get; }
```

- *Type:* double

---

##### `CustomerContactsInput`<sup>Optional</sup> <a name="CustomerContactsInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.customerContactsInput"></a>

```csharp
public object CustomerContactsInput { get; }
```

- *Type:* object

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.maintenanceWindowInput"></a>

```csharp
public DatabaseCloudExadataInfrastructureMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow">DatabaseCloudExadataInfrastructureMaintenanceWindow</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `StorageCountInput`<sup>Optional</sup> <a name="StorageCountInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.storageCountInput"></a>

```csharp
public double StorageCountInput { get; }
```

- *Type:* double

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `ClusterPlacementGroupId`<sup>Required</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.clusterPlacementGroupId"></a>

```csharp
public string ClusterPlacementGroupId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `StorageCount`<sup>Required</sup> <a name="StorageCount" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.storageCount"></a>

```csharp
public double StorageCount { get; }
```

- *Type:* double

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructure.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseCloudExadataInfrastructureConfig <a name="DatabaseCloudExadataInfrastructureConfig" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureConfig {
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
    string Shape,
    string ClusterPlacementGroupId = null,
    double ComputeCount = null,
    object CustomerContacts = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    DatabaseCloudExadataInfrastructureMaintenanceWindow MaintenanceWindow = null,
    double StorageCount = null,
    string SubscriptionId = null,
    DatabaseCloudExadataInfrastructureTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#availability_domain DatabaseCloudExadataInfrastructure#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#compartment_id DatabaseCloudExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#display_name DatabaseCloudExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#shape DatabaseCloudExadataInfrastructure#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#cluster_placement_group_id DatabaseCloudExadataInfrastructure#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.computeCount">ComputeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#compute_count DatabaseCloudExadataInfrastructure#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.customerContacts">CustomerContacts</a></code> | <code>object</code> | customer_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#defined_tags DatabaseCloudExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#freeform_tags DatabaseCloudExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#id DatabaseCloudExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow">DatabaseCloudExadataInfrastructureMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.storageCount">StorageCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#storage_count DatabaseCloudExadataInfrastructure#storage_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#subscription_id DatabaseCloudExadataInfrastructure#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeouts">DatabaseCloudExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#availability_domain DatabaseCloudExadataInfrastructure#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#compartment_id DatabaseCloudExadataInfrastructure#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#display_name DatabaseCloudExadataInfrastructure#display_name}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#shape DatabaseCloudExadataInfrastructure#shape}.

---

##### `ClusterPlacementGroupId`<sup>Optional</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.clusterPlacementGroupId"></a>

```csharp
public string ClusterPlacementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#cluster_placement_group_id DatabaseCloudExadataInfrastructure#cluster_placement_group_id}.

---

##### `ComputeCount`<sup>Optional</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.computeCount"></a>

```csharp
public double ComputeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#compute_count DatabaseCloudExadataInfrastructure#compute_count}.

---

##### `CustomerContacts`<sup>Optional</sup> <a name="CustomerContacts" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.customerContacts"></a>

```csharp
public object CustomerContacts { get; set; }
```

- *Type:* object

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#customer_contacts DatabaseCloudExadataInfrastructure#customer_contacts}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#defined_tags DatabaseCloudExadataInfrastructure#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#freeform_tags DatabaseCloudExadataInfrastructure#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#id DatabaseCloudExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.maintenanceWindow"></a>

```csharp
public DatabaseCloudExadataInfrastructureMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow">DatabaseCloudExadataInfrastructureMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#maintenance_window DatabaseCloudExadataInfrastructure#maintenance_window}

---

##### `StorageCount`<sup>Optional</sup> <a name="StorageCount" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.storageCount"></a>

```csharp
public double StorageCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#storage_count DatabaseCloudExadataInfrastructure#storage_count}.

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#subscription_id DatabaseCloudExadataInfrastructure#subscription_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureConfig.property.timeouts"></a>

```csharp
public DatabaseCloudExadataInfrastructureTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeouts">DatabaseCloudExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#timeouts DatabaseCloudExadataInfrastructure#timeouts}

---

### DatabaseCloudExadataInfrastructureCustomerContacts <a name="DatabaseCloudExadataInfrastructureCustomerContacts" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureCustomerContacts {
    string Email = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContacts.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#email DatabaseCloudExadataInfrastructure#email}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContacts.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#email DatabaseCloudExadataInfrastructure#email}.

---

### DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations <a name="DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations {

};
```


### DatabaseCloudExadataInfrastructureMaintenanceWindow <a name="DatabaseCloudExadataInfrastructureMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureMaintenanceWindow {
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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#custom_action_timeout_in_mins DatabaseCloudExadataInfrastructure#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.daysOfWeek">DaysOfWeek</a></code> | <code>object</code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#hours_of_day DatabaseCloudExadataInfrastructure#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseCloudExadataInfrastructure#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#is_monthly_patching_enabled DatabaseCloudExadataInfrastructure#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#lead_time_in_weeks DatabaseCloudExadataInfrastructure#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.months">Months</a></code> | <code>object</code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.patchingMode">PatchingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#patching_mode DatabaseCloudExadataInfrastructure#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.preference">Preference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#preference DatabaseCloudExadataInfrastructure#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.skipRu">SkipRu</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#skip_ru DatabaseCloudExadataInfrastructure#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#weeks_of_month DatabaseCloudExadataInfrastructure#weeks_of_month}. |

---

##### `CustomActionTimeoutInMins`<sup>Optional</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#custom_action_timeout_in_mins DatabaseCloudExadataInfrastructure#custom_action_timeout_in_mins}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.daysOfWeek"></a>

```csharp
public object DaysOfWeek { get; set; }
```

- *Type:* object

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#days_of_week DatabaseCloudExadataInfrastructure#days_of_week}

---

##### `HoursOfDay`<sup>Optional</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#hours_of_day DatabaseCloudExadataInfrastructure#hours_of_day}.

---

##### `IsCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```csharp
public object IsCustomActionTimeoutEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseCloudExadataInfrastructure#is_custom_action_timeout_enabled}.

---

##### `IsMonthlyPatchingEnabled`<sup>Optional</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.isMonthlyPatchingEnabled"></a>

```csharp
public object IsMonthlyPatchingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#is_monthly_patching_enabled DatabaseCloudExadataInfrastructure#is_monthly_patching_enabled}.

---

##### `LeadTimeInWeeks`<sup>Optional</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#lead_time_in_weeks DatabaseCloudExadataInfrastructure#lead_time_in_weeks}.

---

##### `Months`<sup>Optional</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.months"></a>

```csharp
public object Months { get; set; }
```

- *Type:* object

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#months DatabaseCloudExadataInfrastructure#months}

---

##### `PatchingMode`<sup>Optional</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.patchingMode"></a>

```csharp
public string PatchingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#patching_mode DatabaseCloudExadataInfrastructure#patching_mode}.

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.preference"></a>

```csharp
public string Preference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#preference DatabaseCloudExadataInfrastructure#preference}.

---

##### `SkipRu`<sup>Optional</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.skipRu"></a>

```csharp
public object SkipRu { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#skip_ru DatabaseCloudExadataInfrastructure#skip_ru}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#weeks_of_month DatabaseCloudExadataInfrastructure#weeks_of_month}.

---

### DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek <a name="DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#name DatabaseCloudExadataInfrastructure#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#name DatabaseCloudExadataInfrastructure#name}.

---

### DatabaseCloudExadataInfrastructureMaintenanceWindowMonths <a name="DatabaseCloudExadataInfrastructureMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureMaintenanceWindowMonths {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonths.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#name DatabaseCloudExadataInfrastructure#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonths.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#name DatabaseCloudExadataInfrastructure#name}.

---

### DatabaseCloudExadataInfrastructureTimeouts <a name="DatabaseCloudExadataInfrastructureTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#create DatabaseCloudExadataInfrastructure#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#delete DatabaseCloudExadataInfrastructure#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#update DatabaseCloudExadataInfrastructure#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#create DatabaseCloudExadataInfrastructure#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#delete DatabaseCloudExadataInfrastructure#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_exadata_infrastructure#update DatabaseCloudExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseCloudExadataInfrastructureCustomerContactsList <a name="DatabaseCloudExadataInfrastructureCustomerContactsList" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureCustomerContactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.get"></a>

```csharp
private DatabaseCloudExadataInfrastructureCustomerContactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseCloudExadataInfrastructureCustomerContactsOutputReference <a name="DatabaseCloudExadataInfrastructureCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureCustomerContactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureCustomerContactsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList <a name="DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.get"></a>

```csharp
private DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference <a name="DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition">IsBackupPartition</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isResizable">IsResizable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.minSizeGb">MinSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations">DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsBackupPartition`<sup>Required</sup> <a name="IsBackupPartition" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition"></a>

```csharp
public IResolvable IsBackupPartition { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsResizable`<sup>Required</sup> <a name="IsResizable" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.isResizable"></a>

```csharp
public IResolvable IsResizable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MinSizeGb`<sup>Required</sup> <a name="MinSizeGb" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.minSizeGb"></a>

```csharp
public double MinSizeGb { get; }
```

- *Type:* double

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations">DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations</a>

---


### DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList <a name="DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.get"></a>

```csharp
private DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList <a name="DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.get"></a>

```csharp
private DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference <a name="DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference <a name="DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek">PutDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.putMonths">PutMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins">ResetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay">ResetHoursOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled">ResetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetIsMonthlyPatchingEnabled">ResetIsMonthlyPatchingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks">ResetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetMonths">ResetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode">ResetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetSkipRu">ResetSkipRu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDaysOfWeek` <a name="PutDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek"></a>

```csharp
private void PutDaysOfWeek(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* object

---

##### `PutMonths` <a name="PutMonths" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.putMonths"></a>

```csharp
private void PutMonths(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.putMonths.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomActionTimeoutInMins` <a name="ResetCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins"></a>

```csharp
private void ResetCustomActionTimeoutInMins()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetHoursOfDay` <a name="ResetHoursOfDay" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```csharp
private void ResetHoursOfDay()
```

##### `ResetIsCustomActionTimeoutEnabled` <a name="ResetIsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```csharp
private void ResetIsCustomActionTimeoutEnabled()
```

##### `ResetIsMonthlyPatchingEnabled` <a name="ResetIsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetIsMonthlyPatchingEnabled"></a>

```csharp
private void ResetIsMonthlyPatchingEnabled()
```

##### `ResetLeadTimeInWeeks` <a name="ResetLeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```csharp
private void ResetLeadTimeInWeeks()
```

##### `ResetMonths` <a name="ResetMonths" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetMonths"></a>

```csharp
private void ResetMonths()
```

##### `ResetPatchingMode` <a name="ResetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode"></a>

```csharp
private void ResetPatchingMode()
```

##### `ResetPreference` <a name="ResetPreference" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPreference"></a>

```csharp
private void ResetPreference()
```

##### `ResetSkipRu` <a name="ResetSkipRu" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetSkipRu"></a>

```csharp
private void ResetSkipRu()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList">DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList">DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput">CustomActionTimeoutInMinsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput">HoursOfDayInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">IsCustomActionTimeoutEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabledInput">IsMonthlyPatchingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">LeadTimeInWeeksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput">MonthsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput">PatchingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.skipRuInput">SkipRuInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.skipRu">SkipRu</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow">DatabaseCloudExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```csharp
public DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList">DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList</a>

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```csharp
public DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList">DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList</a>

---

##### `CustomActionTimeoutInMinsInput`<sup>Optional</sup> <a name="CustomActionTimeoutInMinsInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput"></a>

```csharp
public double CustomActionTimeoutInMinsInput { get; }
```

- *Type:* double

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```csharp
public object DaysOfWeekInput { get; }
```

- *Type:* object

---

##### `HoursOfDayInput`<sup>Optional</sup> <a name="HoursOfDayInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```csharp
public double[] HoursOfDayInput { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```csharp
public object IsCustomActionTimeoutEnabledInput { get; }
```

- *Type:* object

---

##### `IsMonthlyPatchingEnabledInput`<sup>Optional</sup> <a name="IsMonthlyPatchingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```csharp
public object IsMonthlyPatchingEnabledInput { get; }
```

- *Type:* object

---

##### `LeadTimeInWeeksInput`<sup>Optional</sup> <a name="LeadTimeInWeeksInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```csharp
public double LeadTimeInWeeksInput { get; }
```

- *Type:* double

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput"></a>

```csharp
public object MonthsInput { get; }
```

- *Type:* object

---

##### `PatchingModeInput`<sup>Optional</sup> <a name="PatchingModeInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```csharp
public string PatchingModeInput { get; }
```

- *Type:* string

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput"></a>

```csharp
public string PreferenceInput { get; }
```

- *Type:* string

---

##### `SkipRuInput`<sup>Optional</sup> <a name="SkipRuInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.skipRuInput"></a>

```csharp
public object SkipRuInput { get; }
```

- *Type:* object

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```csharp
public double[] WeeksOfMonthInput { get; }
```

- *Type:* double[]

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public object IsCustomActionTimeoutEnabled { get; }
```

- *Type:* object

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public object IsMonthlyPatchingEnabled { get; }
```

- *Type:* object

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.skipRu"></a>

```csharp
public object SkipRu { get; }
```

- *Type:* object

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DatabaseCloudExadataInfrastructureMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureMaintenanceWindow">DatabaseCloudExadataInfrastructureMaintenanceWindow</a>

---


### DatabaseCloudExadataInfrastructureTimeoutsOutputReference <a name="DatabaseCloudExadataInfrastructureTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseCloudExadataInfrastructureTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudExadataInfrastructure.DatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



