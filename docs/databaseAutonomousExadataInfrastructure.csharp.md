# `databaseAutonomousExadataInfrastructure` Submodule <a name="`databaseAutonomousExadataInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousExadataInfrastructure <a name="DatabaseAutonomousExadataInfrastructure" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure oci_database_autonomous_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructure(Construct Scope, string Id, DatabaseAutonomousExadataInfrastructureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig">DatabaseAutonomousExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig">DatabaseAutonomousExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.putMaintenanceWindowDetails">PutMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetCreateAsync">ResetCreateAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetMaintenanceWindowDetails">ResetMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMaintenanceWindowDetails` <a name="PutMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.putMaintenanceWindowDetails"></a>

```csharp
private void PutMaintenanceWindowDetails(DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.putMaintenanceWindowDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseAutonomousExadataInfrastructureTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts">DatabaseAutonomousExadataInfrastructureTimeouts</a>

---

##### `ResetCreateAsync` <a name="ResetCreateAsync" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetCreateAsync"></a>

```csharp
private void ResetCreateAsync()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDomain` <a name="ResetDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetMaintenanceWindowDetails` <a name="ResetMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetMaintenanceWindowDetails"></a>

```csharp
private void ResetMaintenanceWindowDetails()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousExadataInfrastructure.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousExadataInfrastructure.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousExadataInfrastructure.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousExadataInfrastructure.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseAutonomousExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseAutonomousExadataInfrastructure to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseAutonomousExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.lastMaintenanceRunId">LastMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.maintenanceWindowDetails">MaintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.nextMaintenanceRunId">NextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.scanDnsName">ScanDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference">DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.createAsyncInput">CreateAsyncInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.maintenanceWindowDetailsInput">MaintenanceWindowDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.createAsync">CreateAsync</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `LastMaintenanceRunId`<sup>Required</sup> <a name="LastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.lastMaintenanceRunId"></a>

```csharp
public string LastMaintenanceRunId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.maintenanceWindow"></a>

```csharp
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowList MaintenanceWindow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowList</a>

---

##### `MaintenanceWindowDetails`<sup>Required</sup> <a name="MaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.maintenanceWindowDetails"></a>

```csharp
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference MaintenanceWindowDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference</a>

---

##### `NextMaintenanceRunId`<sup>Required</sup> <a name="NextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.nextMaintenanceRunId"></a>

```csharp
public string NextMaintenanceRunId { get; }
```

- *Type:* string

---

##### `ScanDnsName`<sup>Required</sup> <a name="ScanDnsName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.scanDnsName"></a>

```csharp
public string ScanDnsName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.timeouts"></a>

```csharp
public DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference">DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference</a>

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CreateAsyncInput`<sup>Optional</sup> <a name="CreateAsyncInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.createAsyncInput"></a>

```csharp
public object CreateAsyncInput { get; }
```

- *Type:* object

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowDetailsInput`<sup>Optional</sup> <a name="MaintenanceWindowDetailsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.maintenanceWindowDetailsInput"></a>

```csharp
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails MaintenanceWindowDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a>

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CreateAsync`<sup>Required</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.createAsync"></a>

```csharp
public object CreateAsync { get; }
```

- *Type:* object

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructure.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousExadataInfrastructureConfig <a name="DatabaseAutonomousExadataInfrastructureConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityDomain,
    string CompartmentId,
    string Shape,
    string SubnetId,
    object CreateAsync = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    string Domain = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string LicenseModel = null,
    DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails MaintenanceWindowDetails = null,
    string[] NsgIds = null,
    DatabaseAutonomousExadataInfrastructureTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#availability_domain DatabaseAutonomousExadataInfrastructure#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#compartment_id DatabaseAutonomousExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#shape DatabaseAutonomousExadataInfrastructure#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#subnet_id DatabaseAutonomousExadataInfrastructure#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.createAsync">CreateAsync</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#create_async DatabaseAutonomousExadataInfrastructure#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#defined_tags DatabaseAutonomousExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#display_name DatabaseAutonomousExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#domain DatabaseAutonomousExadataInfrastructure#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#freeform_tags DatabaseAutonomousExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#id DatabaseAutonomousExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#license_model DatabaseAutonomousExadataInfrastructure#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.maintenanceWindowDetails">MaintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a></code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#nsg_ids DatabaseAutonomousExadataInfrastructure#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts">DatabaseAutonomousExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#availability_domain DatabaseAutonomousExadataInfrastructure#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#compartment_id DatabaseAutonomousExadataInfrastructure#compartment_id}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#shape DatabaseAutonomousExadataInfrastructure#shape}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#subnet_id DatabaseAutonomousExadataInfrastructure#subnet_id}.

---

##### `CreateAsync`<sup>Optional</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.createAsync"></a>

```csharp
public object CreateAsync { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#create_async DatabaseAutonomousExadataInfrastructure#create_async}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#defined_tags DatabaseAutonomousExadataInfrastructure#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#display_name DatabaseAutonomousExadataInfrastructure#display_name}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#domain DatabaseAutonomousExadataInfrastructure#domain}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#freeform_tags DatabaseAutonomousExadataInfrastructure#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#id DatabaseAutonomousExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#license_model DatabaseAutonomousExadataInfrastructure#license_model}.

---

##### `MaintenanceWindowDetails`<sup>Optional</sup> <a name="MaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.maintenanceWindowDetails"></a>

```csharp
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails MaintenanceWindowDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a>

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#maintenance_window_details DatabaseAutonomousExadataInfrastructure#maintenance_window_details}

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#nsg_ids DatabaseAutonomousExadataInfrastructure#nsg_ids}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureConfig.property.timeouts"></a>

```csharp
public DatabaseAutonomousExadataInfrastructureTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts">DatabaseAutonomousExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#timeouts DatabaseAutonomousExadataInfrastructure#timeouts}

---

### DatabaseAutonomousExadataInfrastructureMaintenanceWindow <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindow {

};
```


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek {

};
```


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails {
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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#custom_action_timeout_in_mins DatabaseAutonomousExadataInfrastructure#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.daysOfWeek">DaysOfWeek</a></code> | <code>object</code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#hours_of_day DatabaseAutonomousExadataInfrastructure#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseAutonomousExadataInfrastructure#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#is_monthly_patching_enabled DatabaseAutonomousExadataInfrastructure#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#lead_time_in_weeks DatabaseAutonomousExadataInfrastructure#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.months">Months</a></code> | <code>object</code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.patchingMode">PatchingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#patching_mode DatabaseAutonomousExadataInfrastructure#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.preference">Preference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#preference DatabaseAutonomousExadataInfrastructure#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.skipRu">SkipRu</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#skip_ru DatabaseAutonomousExadataInfrastructure#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#weeks_of_month DatabaseAutonomousExadataInfrastructure#weeks_of_month}. |

---

##### `CustomActionTimeoutInMins`<sup>Optional</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#custom_action_timeout_in_mins DatabaseAutonomousExadataInfrastructure#custom_action_timeout_in_mins}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.daysOfWeek"></a>

```csharp
public object DaysOfWeek { get; set; }
```

- *Type:* object

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#days_of_week DatabaseAutonomousExadataInfrastructure#days_of_week}

---

##### `HoursOfDay`<sup>Optional</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#hours_of_day DatabaseAutonomousExadataInfrastructure#hours_of_day}.

---

##### `IsCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled"></a>

```csharp
public object IsCustomActionTimeoutEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseAutonomousExadataInfrastructure#is_custom_action_timeout_enabled}.

---

##### `IsMonthlyPatchingEnabled`<sup>Optional</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.isMonthlyPatchingEnabled"></a>

```csharp
public object IsMonthlyPatchingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#is_monthly_patching_enabled DatabaseAutonomousExadataInfrastructure#is_monthly_patching_enabled}.

---

##### `LeadTimeInWeeks`<sup>Optional</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#lead_time_in_weeks DatabaseAutonomousExadataInfrastructure#lead_time_in_weeks}.

---

##### `Months`<sup>Optional</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.months"></a>

```csharp
public object Months { get; set; }
```

- *Type:* object

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#months DatabaseAutonomousExadataInfrastructure#months}

---

##### `PatchingMode`<sup>Optional</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.patchingMode"></a>

```csharp
public string PatchingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#patching_mode DatabaseAutonomousExadataInfrastructure#patching_mode}.

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.preference"></a>

```csharp
public string Preference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#preference DatabaseAutonomousExadataInfrastructure#preference}.

---

##### `SkipRu`<sup>Optional</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.skipRu"></a>

```csharp
public object SkipRu { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#skip_ru DatabaseAutonomousExadataInfrastructure#skip_ru}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#weeks_of_month DatabaseAutonomousExadataInfrastructure#weeks_of_month}.

---

### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#name DatabaseAutonomousExadataInfrastructure#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#name DatabaseAutonomousExadataInfrastructure#name}.

---

### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#name DatabaseAutonomousExadataInfrastructure#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#name DatabaseAutonomousExadataInfrastructure#name}.

---

### DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths {

};
```


### DatabaseAutonomousExadataInfrastructureTimeouts <a name="DatabaseAutonomousExadataInfrastructureTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#create DatabaseAutonomousExadataInfrastructure#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#delete DatabaseAutonomousExadataInfrastructure#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#update DatabaseAutonomousExadataInfrastructure#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#create DatabaseAutonomousExadataInfrastructure#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#delete DatabaseAutonomousExadataInfrastructure#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_exadata_infrastructure#update DatabaseAutonomousExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.get"></a>

```csharp
private DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek</a>

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```csharp
private DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.get"></a>

```csharp
private DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.putDaysOfWeek">PutDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.putMonths">PutMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins">ResetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetHoursOfDay">ResetHoursOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled">ResetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled">ResetIsMonthlyPatchingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks">ResetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetMonths">ResetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetPatchingMode">ResetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetSkipRu">ResetSkipRu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDaysOfWeek` <a name="PutDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.putDaysOfWeek"></a>

```csharp
private void PutDaysOfWeek(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* object

---

##### `PutMonths` <a name="PutMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.putMonths"></a>

```csharp
private void PutMonths(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.putMonths.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomActionTimeoutInMins` <a name="ResetCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins"></a>

```csharp
private void ResetCustomActionTimeoutInMins()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetHoursOfDay` <a name="ResetHoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetHoursOfDay"></a>

```csharp
private void ResetHoursOfDay()
```

##### `ResetIsCustomActionTimeoutEnabled` <a name="ResetIsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```csharp
private void ResetIsCustomActionTimeoutEnabled()
```

##### `ResetIsMonthlyPatchingEnabled` <a name="ResetIsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled"></a>

```csharp
private void ResetIsMonthlyPatchingEnabled()
```

##### `ResetLeadTimeInWeeks` <a name="ResetLeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks"></a>

```csharp
private void ResetLeadTimeInWeeks()
```

##### `ResetMonths` <a name="ResetMonths" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetMonths"></a>

```csharp
private void ResetMonths()
```

##### `ResetPatchingMode` <a name="ResetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetPatchingMode"></a>

```csharp
private void ResetPatchingMode()
```

##### `ResetPreference` <a name="ResetPreference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetPreference"></a>

```csharp
private void ResetPreference()
```

##### `ResetSkipRu` <a name="ResetSkipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetSkipRu"></a>

```csharp
private void ResetSkipRu()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput">CustomActionTimeoutInMinsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput">HoursOfDayInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput">IsCustomActionTimeoutEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput">IsMonthlyPatchingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput">LeadTimeInWeeksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.monthsInput">MonthsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.patchingModeInput">PatchingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.skipRuInput">SkipRuInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.skipRu">SkipRu</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```csharp
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.months"></a>

```csharp
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList</a>

---

##### `CustomActionTimeoutInMinsInput`<sup>Optional</sup> <a name="CustomActionTimeoutInMinsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput"></a>

```csharp
public double CustomActionTimeoutInMinsInput { get; }
```

- *Type:* double

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput"></a>

```csharp
public object DaysOfWeekInput { get; }
```

- *Type:* object

---

##### `HoursOfDayInput`<sup>Optional</sup> <a name="HoursOfDayInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput"></a>

```csharp
public double[] HoursOfDayInput { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```csharp
public object IsCustomActionTimeoutEnabledInput { get; }
```

- *Type:* object

---

##### `IsMonthlyPatchingEnabledInput`<sup>Optional</sup> <a name="IsMonthlyPatchingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```csharp
public object IsMonthlyPatchingEnabledInput { get; }
```

- *Type:* object

---

##### `LeadTimeInWeeksInput`<sup>Optional</sup> <a name="LeadTimeInWeeksInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput"></a>

```csharp
public double LeadTimeInWeeksInput { get; }
```

- *Type:* double

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.monthsInput"></a>

```csharp
public object MonthsInput { get; }
```

- *Type:* object

---

##### `PatchingModeInput`<sup>Optional</sup> <a name="PatchingModeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.patchingModeInput"></a>

```csharp
public string PatchingModeInput { get; }
```

- *Type:* string

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.preferenceInput"></a>

```csharp
public string PreferenceInput { get; }
```

- *Type:* string

---

##### `SkipRuInput`<sup>Optional</sup> <a name="SkipRuInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.skipRuInput"></a>

```csharp
public object SkipRuInput { get; }
```

- *Type:* object

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput"></a>

```csharp
public double[] WeeksOfMonthInput { get; }
```

- *Type:* double[]

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public object IsCustomActionTimeoutEnabled { get; }
```

- *Type:* object

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public object IsMonthlyPatchingEnabled { get; }
```

- *Type:* object

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```csharp
public object SkipRu { get; }
```

- *Type:* object

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails</a>

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowList <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.get"></a>

```csharp
private DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.get"></a>

```csharp
private DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths">DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```csharp
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths">DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths</a>

---


### DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference <a name="DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.skipRu">SkipRu</a></code> | <code>HashiCorp.Cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindow">DatabaseAutonomousExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```csharp
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public IResolvable IsCustomActionTimeoutEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public IResolvable IsMonthlyPatchingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```csharp
public DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList">DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList</a>

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.skipRu"></a>

```csharp
public BooleanList SkipRu { get; }
```

- *Type:* HashiCorp.Cdktf.BooleanList

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DatabaseAutonomousExadataInfrastructureMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureMaintenanceWindow">DatabaseAutonomousExadataInfrastructureMaintenanceWindow</a>

---


### DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference <a name="DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousExadataInfrastructure.DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



